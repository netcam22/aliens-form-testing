import { validateInput } from "./validate_input";

describe("test validation of user input to fields", () => {
	test('Maths answer validation returns empty array if answer is correct', () => {
		//Arrange
		const params = {
			title: "What is 2 + 2?",
			regex: [/^4{1}$/],
			value: "4",
			message: ['"4" must be selected']
		};
		//Act
		const validationCall = validateInput(params.title, params.regex, params.value, params.message);
		//Assert
		expect(validationCall).toEqual([]);
	});	

	test('Maths answer validation returns error message if answer is incorrect', () => {
		//Arrange
		const params = {
			title: "What is 2 + 2?",
			regex: [/^4{1}$/],
			value: "Not 4",
			message: ['"4" must be selected']
		};
		//Act
		const validationCall = validateInput(params.title, params.regex, params.value, params.message);
		//Assert
		expect(validationCall).toEqual([params.message[0]]);
	});	

	test('Species Name validation returns error message if input is invalid', () => {
		//Arrange
		const params = {
			title: "Species Name",
			regex: [/^.{3,23}$/gi, /^[a-z]+$/gi],
			value: "F%",
			message: ["must be between 3 and 23 characters", "no numbers or special characters allowed"]
		};
		//Act
		const validationCall = validateInput(params.title, params.regex, params.value, params.message);
		//Assert
		expect(validationCall).toEqual(["must be between 3 and 23 characters", "no numbers or special characters allowed"]);
	});	

	test('Species Name validation returns empty array if input is valid', () => {
		//Arrange
		const params = {
			title: "Species Name",
			regex:  [/^.{3,23}$/gi, /^[a-z]+$/gi],
			value: "Fred",
			message: ["must be between 3 and 23 characters", "no numbers or special characters allowed"]
		};
		//Act
		const validationCall = validateInput(params.title, params.regex, params.value, params.message);
		//Assert
		expect(validationCall).toEqual([]);
	});	

	test('Species Name validation returns single message if 3 or more number or special characters', () => {
		//Arrange
		const params = {
			title: "Species Name",
			regex:  [/^.{3,23}$/gi, /^[a-z]+$/gi],
			value: "5&%$",
			message: ["must be between 3 and 23 characters", "no numbers or special characters allowed"]
		};
		//Act
		const validationCall = validateInput(params.title, params.regex, params.value, params.message);
		//Assert
		expect(validationCall).toEqual(["no numbers or special characters allowed"]);
	});	

	test('Species Name validation returns single message if fewer than 3 valid characters', () => {
		//Arrange
		const params = {
			title: "Species Name",
			regex:  [/^.{3,23}$/gi, /^[a-z]+$/gi],
			value: "An",
			message: ["must be between 3 and 23 characters", "no numbers or special characters allowed"]
		};
		//Act
		const validationCall = validateInput(params.title, params.regex, params.value, params.message);
		//Assert
		expect(validationCall).toEqual(["must be between 3 and 23 characters"]);
	});	

	test('Number of Beings validation returns error message if input is invalid', () => {
		//Arrange
		const params = {
			title: "Number of Beings",
			regex: [/^[0-9]+$/g, /^[0-9]{10,}$/g],
			value: "999999999",
			message: ["numbers ONLY", "must be at least 1,000,000,000"]
		};
		//Act
		const validationCall = validateInput(params.title, params.regex, params.value, params.message);
		//Assert
		expect(validationCall).toEqual(["must be at least 1,000,000,000"]);
	});	

	test('Number of Beings validation returns empty array if input is valid', () => {
		//Arrange
		const params = {
			title: "Number of Beings",
			regex: [/^[0-9]+$/g, /^[0-9]{10,}$/g],
			value: "9999999999",
			message: ["numbers ONLY", "must be at least 1,000,000,000"]
		};
		//Act
		const validationCall = validateInput(params.title, params.regex, params.value, params.message);
		//Assert
		expect(validationCall).toEqual([]);
	});	

	test('Maths questions validation returns error message if selected option is incorrect', () => {
		//Arrange
		const params = {
			title: "What is 2 + 2?",
			regex: [/^4{1}$/],
			value: "4 million",
			message: [`"4" must be selected`]
		};
		//Act
		const validationCall = validateInput(params.title, params.regex, params.value, params.message);
		//Assert
		expect(validationCall).toEqual([params.message[0]]);
	});	
});