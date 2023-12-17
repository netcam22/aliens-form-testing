import { render, screen, fireEvent } from '@testing-library/react';
import { SelectInput } from './select_input';
import { SelectInputProps } from "../components/select_input";

test('renders form label for maths question', () => {

	const requiredProps : SelectInputProps = {
		title: "What is 2 + 2?",
		role: "mathsAnswer",
		value: "4",
		onChange: () => {},
		regex: [/^4{1}$/],
		message: ['"4" must be selected'],
		submitted: false,
		validate: () =>  "",
		options: ["Not 4", "0", "4", "99", "4 million"]
	};
	render(<SelectInput {...requiredProps}/>);

	const labelText = screen.getByText(
		"What is 2 + 2?"
	);
	expect(labelText).toBeInTheDocument();
});

test('Maths question Input field exists', () => {
    //Arrange
	const requiredProps: SelectInputProps = {
		title: "What is 2 + 2?",
		role: "mathsAnswer",
		value: "4",
		onChange: () => {},
		regex: [/^4{1}$/],
		message: ['"4" must be selected'],
		submitted: false,
		validate: () =>  "",
		options: ["Not 4", "0", "4", "99", "4 million"]
	};
	//Act
	render(<SelectInput {...requiredProps}/>);
	const selectInput: HTMLSelectElement = screen.getByLabelText("What is 2 + 2?");
	//Assert
    expect(selectInput).toBeInTheDocument();
});

test('Maths question input field displays value passed in through props', () => {
    //Arrange
	const requiredProps : SelectInputProps = {
		title: "What is 2 + 2?",
		role: "mathsAnswer",
		value: "99",
		onChange: () => {},
		regex: [/^4{1}$/],
		message: ['"4" must be selected'],
		submitted: false,
		validate: () =>  "",
		options: ["Not 4", "0", "4", "99", "4 million"]
	};
	//Act
	render(<SelectInput {...requiredProps}/>);
	const selectInput: HTMLSelectElement = screen.getByLabelText("What is 2 + 2?");
	//Assert
	expect(selectInput.value).toBe("99");
});

test('Maths question input field call its onChange function', () => {
    //Arrange
	const mockChange = jest.fn();
	
	const requiredProps : SelectInputProps = {
		title: "What is 2 + 2?",
		role: "mathsAnswer",
		value: "",
		onChange: mockChange,
		regex: [/^4{1}$/],
		message: ['"4" must be selected'],
		submitted: false,
		validate: () =>  "",
		options: ["Not 4", "0", "4", "99", "4 million"]
	};
	//Act
	render(<SelectInput {...requiredProps}/>);
	const selectInput: HTMLSelectElement = screen.getByLabelText("What is 2 + 2?");
	//Assert
	if (selectInput) {
		fireEvent.change(selectInput, {target: {value: '4'}})
	}
	expect(mockChange).toBeCalled();
});
