import React from 'react';
import "@testing-library/jest-dom";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import PlantViewPlantInfo from "../components/PlantViewPlantInfo";

/** notes: comment out auth related imports in PlantViewPlantInfo.jsx before testing */

describe("PlantViewPlantInfo", () => {

    // initial: "" --> input: "#cacty #flower" --> result: "#cacty #flower"
    test("two tags in correct format", () => {
        // 1. create the component with empty tags
        const {getByTestId, getByRole} = render(<PlantViewPlantInfo tags="" test={true}/>);
        // 2. access the fields
        const updateTagsButton = screen.getByRole("button", {name: "Update Tags"});
        const tagInputField = screen.getByPlaceholderText("enter tags..." );
        expect(tagInputField).toBeInTheDocument();
        // 3. insert chosen input 
        fireEvent.change(tagInputField, { target: { value: "#cacty #flower" } });
        // 4. click the "update tags" button
        fireEvent.click(updateTagsButton);
        // 5. assert correct output
        expect(tagInputField.value).toBe("#cacty #flower");
    });

    // initial: "" --> input: "#cacty #flower seasonal" --> result: "#cacty #flower"
    test("combination of tags in correct and incorrect format", () => {

        const {getByTestId, getByRole} = render(<PlantViewPlantInfo tags="" test={true}/>);
        const updateTagsButton = screen.getByRole("button", {name: "Update Tags"});
        const tagInputField = screen.getByPlaceholderText("enter tags..." );
        expect(tagInputField).toBeInTheDocument();

        fireEvent.change(tagInputField, { target: { value: "#cacty #flower seasonal" } });
        fireEvent.click(updateTagsButton);
        expect(tagInputField.value).toBe("#cacty #flower");
    });

    // initial: "" --> input: "#blue flower" --> result: "#blue"
    test("two-word-tag containing space", () => {

        const {getByTestId, getByRole} = render(<PlantViewPlantInfo tags="" test={true}/>);
        const updateTagsButton = screen.getByRole("button", {name: "Update Tags"});
        const tagInputField = screen.getByPlaceholderText("enter tags..." );
        expect(tagInputField).toBeInTheDocument();

        fireEvent.change(tagInputField, { target: { value: "#blue flower" } });
        fireEvent.click(updateTagsButton);
        expect(tagInputField.value).toBe("#blue");
    });

    // initial: "" --> input: "#blueFlower" --> result: "#blueFlower"
    test("two-word-tag without space", () => {

        const {getByTestId, getByRole} = render(<PlantViewPlantInfo tags="" test={true}/>);
        const updateTagsButton = screen.getByRole("button", {name: "Update Tags"});
        const tagInputField = screen.getByPlaceholderText("enter tags..." );
        expect(tagInputField).toBeInTheDocument();

        fireEvent.change(tagInputField, { target: { value: "#blueFlower" } });
        fireEvent.click(updateTagsButton);
        expect(tagInputField.value).toBe("#blueFlower");
    });

    // initial: "" --> input: "cacty flower" --> result: ""
    test("all invalid input", () => {

        const {getByTestId, getByRole} = render(<PlantViewPlantInfo tags="" test={true}/>);
        const updateTagsButton = screen.getByRole("button", {name: "Update Tags"});
        const tagInputField = screen.getByPlaceholderText("enter tags..." );
        expect(tagInputField).toBeInTheDocument();

        fireEvent.change(tagInputField, { target: { value: "cacty flower" } });
        fireEvent.click(updateTagsButton);
        expect(tagInputField.value).toBe("");
    });

    // initial: "#blue" --> input: "#blue #flower" --> result: "#blue #flower"
    test("adding another tag to existing list of tags", () => {

        const {getByTestId, getByRole} = render(<PlantViewPlantInfo tags="#blue" test={true}/>);
        const updateTagsButton = screen.getByRole("button", {name: "Update Tags"});
        const tagInputField = screen.getByPlaceholderText("enter tags..." );
        expect(tagInputField).toBeInTheDocument();

        fireEvent.change(tagInputField, { target: { value: "#blue #flower" } });
        fireEvent.click(updateTagsButton);
        expect(tagInputField.value).toBe("#blue #flower");
    });

    // initial: "#cacty #flower" --> input: "" --> result: ""
    test("clearing exisiting tags", () => {

        const {getByTestId, getByRole} = render(<PlantViewPlantInfo tags="#cacty #flower" test={true}/>);
        const updateTagsButton = screen.getByRole("button", {name: "Update Tags"});
        const tagInputField = screen.getByPlaceholderText("enter tags..." );
        expect(tagInputField).toBeInTheDocument();

        fireEvent.change(tagInputField, { target: { value: "" } });
        fireEvent.click(updateTagsButton);
        expect(tagInputField.value).toBe("");
    });

    // initial: "#cacty #flower" --> no input --> result: "#cacty #flower"
    test("clicking button without making input changes", () => {

        const {getByTestId, getByRole} = render(<PlantViewPlantInfo tags="#cacty #flower" test={true}/>);
        const updateTagsButton = screen.getByRole("button", {name: "Update Tags"});
        const tagInputField = screen.getByPlaceholderText("enter tags..." );
        expect(tagInputField).toBeInTheDocument();

        fireEvent.click(updateTagsButton);
        expect(tagInputField.value).toBe("");
    });

    // initial: "" --> input: "" --> result: ""
    test("clearing exisiting tags", () => {

        const {getByTestId, getByRole} = render(<PlantViewPlantInfo tags="" test={true}/>);
        const updateTagsButton = screen.getByRole("button", {name: "Update Tags"});
        const tagInputField = screen.getByPlaceholderText("enter tags..." );
        expect(tagInputField).toBeInTheDocument();

        fireEvent.change(tagInputField, { target: { value: "" } });
        fireEvent.click(updateTagsButton);
        expect(tagInputField.value).toBe("");
    });

});