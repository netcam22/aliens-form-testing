import { render, screen, fireEvent } from '@testing-library/react';
import { TextInput } from './text_input';
import { TextInputProps } from "./text_input";

test('renders form label for species name', () => {
	 //Arrange
	const requiredProps: TextInputProps = {
		title: "Species Name",
		role: "speciesName",
		value: "Woman",
		onChange: () => {},
    	errorMessage: "",
		submitted: false
	};
	//Act
	render(<TextInput {...requiredProps}/>);
	const labelText = screen.getByText(
		/Species Name/i
	);
	//Assert
	expect(labelText).toBeInTheDocument();
});

test('Species name Input field exists', () => {
    //Arrange
	const requiredProps: TextInputProps = {
		title: "Species Name",
		role: "speciesName",
		value: "",
		onChange: () => {},
    	errorMessage: "Species Name required",
		submitted: false
	};
	//Act
	render(<TextInput {...requiredProps}/>);
	const inputField: HTMLInputElement = screen.getByLabelText("Species Name");
	//Assert
    expect(inputField).toBeInTheDocument();
});

test('Species name input field displays value passed in through props', () => {
    //Arrange
	const requiredProps: TextInputProps = {
		title: "Species Name",
		role: "speciesName",
		value: "Woman",
		onChange: () => {},
    	errorMessage: "",
		submitted: false
	};
	//Act
	render(<TextInput {...requiredProps}/>);
	const inputField: HTMLInputElement = screen.getByLabelText("Species Name");
	//Assert
	expect(inputField.value).toBe("Woman");
});

test('Species name input field call its onChange function', () => {
    //Arrange
	const mockChange = jest.fn();
	const requiredProps: TextInputProps = {
		title: "Species Name",
		role: "speciesName",
		value: "",
		onChange: mockChange,
    	errorMessage: "Species Name required",
		submitted: false
	};
	//Act
	render(<TextInput {...requiredProps}/>);
	const inputField: HTMLInputElement = screen.getByLabelText("Species Name");
	if (inputField) {
		fireEvent.change(inputField, {target: {value: 'W'}})
	}
	//Assert
	expect(mockChange).toBeCalled();
});


test('renders form label for planet name', () => {
	//Arrange
	const requiredProps: TextInputProps = {
		title: "Planet Name",
		role: "planetName",
		value: "Mars",
		onChange: () => {},
    	errorMessage: "",
		submitted: false
	};
	//Act
	render(<TextInput {...requiredProps}/>);
	const labelText = screen.getByText(
		/Planet Name/i
	);
	//Assert
	expect(labelText).toBeInTheDocument();
});

test('Planet name Input field exists', () => {
    //Arrange
	const requiredProps: TextInputProps = {
		title: "Planet Name",
		role: "planetName",
		value: "",
		onChange: () => {},
    	errorMessage: "Planet Name required",
		submitted: false
	};
	//Act
	render(<TextInput {...requiredProps}/>);
	const inputField: HTMLInputElement = screen.getByLabelText("Planet Name");
	//Assert
    expect(inputField).toBeInTheDocument();
});

test('Planet name input field displays value passed in through props', () => {
    //Arrange
	const requiredProps: TextInputProps = {
		title: "Planet Name",
		role: "planetName",
		value: "Mars",
		onChange: () => {},
    	errorMessage: "",
		submitted: false
	};
	//Act
	render(<TextInput {...requiredProps}/>);
	const inputField: HTMLInputElement = screen.getByLabelText("Planet Name");
	//Assert
	expect(inputField.value).toBe("Mars");
});

test('Planet name input field calls its onChange function', () => {
    //Arrange
	const mockChange = jest.fn();
	const requiredProps: TextInputProps = {
		title: "Planet Name",
		role: "planetName",
		value: "",
		onChange: mockChange,
    	errorMessage: "Planet Name required",
		submitted: false
	};
	//Act
	render(<TextInput {...requiredProps}/>);
	const inputField: HTMLInputElement = screen.getByLabelText("Planet Name");
	if (inputField) {
		fireEvent.change(inputField, {target: {value: 'M'}})
	}
	//Assert
	expect(mockChange).toBeCalled();
});

test('renders form label for number of beings', () => {
	//Arrange
	const requiredProps: TextInputProps = {
		title: "Number of Beings",
		role: "numberOfBeings",
		value: "999",
		onChange: () => {},
    	errorMessage: "must be at least 1,000,000,000",
		submitted: false
	};
	render(<TextInput {...requiredProps}/>);
	//Act
	const labelText = screen.getByText(
		/Number of Beings/i
	);
	//Assert
	expect(labelText).toBeInTheDocument();
});

test('Number of Beings Input field exists', () => {
    //Arrange
	const requiredProps: TextInputProps = {
		title: "Number of Beings",
		role: "numberOfBeings",
		value: "",
		onChange: () => {},
    	errorMessage: "Number of Beings required",
		submitted: false
	};
	//Act
	render(<TextInput {...requiredProps}/>);
	const inputField: HTMLInputElement = screen.getByLabelText("Number of Beings");
	//Assert
    expect(inputField).toBeInTheDocument();
});

test('Number of Beings input field displays value passed in through props', () => {
    //Arrange
	const requiredProps: TextInputProps = {
		title: "Number of Beings",
		role: "numberOfBeings",
		value: "100000000000",
		onChange: () => {},
    	errorMessage: "",
		submitted: false
	};
	//Act
	render(<TextInput {...requiredProps}/>);
	const inputField: HTMLInputElement = screen.getByLabelText("Number of Beings");
	//Assert
	expect(inputField.value).toBe("100000000000");
});

test('Number of Beings input field calls its onChange function', () => {
    //Arrange
	const mockChange = jest.fn();
	const requiredProps: TextInputProps = {
		title: "Number of Beings",
		role: "numberOfBeings",
		value: "",
		onChange: mockChange,
    	errorMessage: "Number of Beings required",
		submitted: false
	};
	//Act
	render(<TextInput {...requiredProps}/>);
	const inputField: HTMLInputElement = screen.getByLabelText("Number of Beings");
	if (inputField) {
		fireEvent.change(inputField, {target: {value: '1'}})
	}
	//Assert
	expect(mockChange).toBeCalled();
});

test('Number of Beings displays error message under input field if submitted value is invalid', () => {
    //Arrange;
	const requiredProps = {
		title: "Number of Beings",
		role: "numberOfBeings",
		value: "5",
		onChange: () => {},
    	errorMessage: "must be at least 1,000,000,000",
		submitted: true
	};
	render(<TextInput {...requiredProps}/>);
	//Act
	const message = screen.getByText(
		/must be at least 1,000,000,000/i
	);
	//Assert
	expect(message).toBeInTheDocument();
});