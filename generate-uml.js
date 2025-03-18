// This script generates a PlantUML component diagram based on the components in the src directory.
// It reads all the .js, .jsx, and .tsx files in the src directory and its subdirectories.
// It looks for import statements in each file to determine the dependencies between components.
// It generates a component diagram in PlantUML format and saves it to component-diagram.puml.
// The generated diagram might need manual adjustments to look better.
//@Rotott, aka. Anton Jansson


const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");

const componentsDir = path.join(__dirname, "src"); 
const outputUML = path.join(__dirname, "component-diagram.puml");

function getFiles(dir, files = []) {
  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      getFiles(fullPath, files);
    } else if (file.endsWith(".js") || file.endsWith(".tsx") || file.endsWith(".jsx")) {
      files.push(fullPath);
    }
  });
  return files;
}

const files = getFiles(componentsDir);
let umlContent = `@startuml\nskinparam componentStyle rectangle\nleft to right direction\n`;  
const relationships = new Set(); // Prevents redundant dependencies
const packages = {};

// Function to determine stereotype for a component
function getComponentStereotype(name) {
  if (/db|database|prisma|mongo|sql|postgres/i.test(name)) {
    return "database";
  } else if (/service|api|server|auth|webservice/i.test(name)) {
    return "webservice";
  } else {
    return "component"; // Default
  }
}

files.forEach((file) => {
  try {
    const relativePath = path.relative(componentsDir, file);
    const parts = relativePath.split(path.sep);
    const componentName = path.basename(file, path.extname(file));
    const packageName = parts.length > 1 ? parts[0] : "Uncategorized";

    // Add quotes around component names with hyphens
    const quotedComponentName = componentName.includes('-') ? `"${componentName}"` : componentName;
    const stereotype = getComponentStereotype(componentName);

    if (!packages[packageName]) {
      packages[packageName] = [];
    }
    packages[packageName].push({ name: quotedComponentName, stereotype });

    // Find dependencies by looking at import statements
    const content = fs.readFileSync(file, "utf8");
    const importRegex = /import\s+.*?['"](.*)['"]/g;
    let match;
    while ((match = importRegex.exec(content)) !== null) {
      const importedModule = match[1];
      const importedComponent = path.basename(importedModule, path.extname(importedModule));
      const quotedImportedComponent = importedComponent.includes('-') ? `"${importedComponent}"` : importedComponent;
      
      // Prevent redundant dependencies 
      const dependency = `${quotedComponentName} -- ${quotedImportedComponent}`;
      relationships.add(dependency); // Set ensures uniqueness
    }
  } catch (err) {
    console.warn(`Skipping file ${file}:`, err.message);
  }
});

Object.entries(packages).forEach(([packageName, components]) => {
  umlContent += `package ${packageName} {\n`;
  components.forEach(({ name, stereotype }) => {
    umlContent += `  component ${name} <<${stereotype}>>\n`; 
  });
  umlContent += `}\n\n`;
});

umlContent += Array.from(relationships).join("\n") + "\n"; // Convert Set to string
umlContent += "@enduml";

fs.writeFileSync(outputUML, umlContent);
console.log(`Component diagram saved to ${outputUML}`);

// Generate PNG output. This is not tested yet.
exec(`plantuml ${outputUML}`, (err, stdout, stderr) => {
  if (err) console.error("Error generating UML:", stderr);
  else console.log("Component Diagram generated successfully!");
});
