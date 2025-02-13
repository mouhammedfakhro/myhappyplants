
async function register(email, confirmEmail, username, password, confirmPassword) {

    if (!email || !confirmEmail || !username || !password || !confirmPassword) {
      alert("All fields are required.");
      return;
    }
  
    if (email !== confirmEmail) {
      alert("Emails do not match.");
      return;
    }
  
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
  
    const gdprConsent = confirm(
      "Your account details will be saved in accordance with GDPR requirements.\nDo you still want to create the account?"
    );
  
    if (!gdprConsent) {
      console.log("User declined GDPR consent");
      return;
    }
    
    const registrationData = {
      email,
      confirmEmail,
      username,
      password,
      confirmPassword,
    };
  
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(registrationData),
      });
  
      const responseData = await response.json();
  
      if (response.ok && responseData.success) {
        alert(responseData.message);
        console.log("User registered successfully:", responseData.data);
      } else {
        alert(responseData.message || "Registration failed.");
        console.error("Error:", responseData);
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
      console.error("Error during registration:", error);
    }
  }

  
  

  