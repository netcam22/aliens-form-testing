import { render, screen} from '@testing-library/react';
import { Output } from './output';
import { FormValuesProps } from './output';

test('renders title for species name in output following form submission', () => {
	//Arrange
	const requiredProps: FormValuesProps = {
		title: "Species Name",
		value: "Woman",
		role: "speciesName",
		regex: [/^[a-z]{3,23}$/gi],
		message: ["Must be between 3 and 23 characters. No numbers or special characters allowed!"],
		validate: () =>  "",
		submitted: true,
	};
	//Act
	render(<Output {...requiredProps}/>);
	const text = screen.getByText(
		/Species Name/i
	);
	//Assert
	expect(text).toBeInTheDocument();
});

test('Reasons For Sparing output does not display if there has been no submission', () => {
    //Arrange
	const requiredProps = {
		title: "Reasons For Sparing",
		role: "reasonsForSparing",
		value: "",
		regex: [/^.{17,153}$/gi],
		message: ["Must be between 17 and 153 characters"],
		validate: () =>  "",
		submitted: false,
		size: {rows: 5, cols: 20}
	};
	//Act
	render(<Output {...requiredProps}/>);
	//Assert
	expect(screen.queryByRole("paragraph")).not.toBeInTheDocument();
});

test('Reasons For Sparing output displays if there has been submission', () => {
    //Arrange
	const requiredProps = {
		title: "Reasons For Sparing",
		role: "reasonsForSparing",
		value: "Because we are a special species",
		regex: [/^.{17,153}$/gi],
		message: ["Must be between 17 and 153 characters"],
		submitted: true,
		validate: () =>  "",
		size: {rows: 5, cols: 20}
	};
	//Act
	render(<Output {...requiredProps}/>)
	const text = screen.getByText(
		/Because we are a special species/i
	);
	//Assert
	expect(text).toBeInTheDocument();
});

test('Reasons For Sparing output displays error message if submitted value is invalid', () => {
    //Arrange
	const mockValidate = jest.fn();
	const requiredProps = {
		title: "Reasons For Sparing",
		role: "reasonsForSparing",
		value: "B",
		regex: [/^.{17,153}$/gi],
		message: ["must be between 17 and 153 characters"],
		submitted: true,
		validate: mockValidate,
		size: {rows: 5, cols: 20}
	};
	//Act
	render(<Output {...requiredProps}/>)
	//Assert
	mockValidate.mockReturnValue(requiredProps.message);
	render(<Output {...requiredProps}/>)
	//Assert
	expect(mockValidate).toBeCalled();
	expect(mockValidate()).toStrictEqual(requiredProps.message);
});

test('Number of Beings output displays error message if submitted value is invalid', () => {
    //Arrange
	const mockValidate = jest.fn();
	const requiredProps = {
		title: "Number of Beings",
		role: "numberOfBeings",
		value: "5",
		regex: [/^[0-9]{10,}$/g],
		message: ["numbers ONLY. Must be at least 1,000,000,000"],
		submitted: true,
		validate: mockValidate
	};
	//Act
	mockValidate.mockReturnValue(["numbers ONLY. Must be at least 1,000,000,000"]);
	render(<Output {...requiredProps}/>)
	//Assert
	expect(mockValidate).toBeCalled();
	expect(mockValidate()).toStrictEqual(["numbers ONLY. Must be at least 1,000,000,000"]);
});

test('Maths answer validation returns error message if answer is incorrect', () => {
    //Arrange
	const mockValidate = jest.fn();
	const requiredProps = {
		title: "What is 2 + 2?",
		role: "mathsAnswer",
		value: "99",
		regex: [/^4{1}$/],
		message: ['"4" must be selected'],
		submitted: true,
		validate: mockValidate,
		options: ["Not 4", "0", "4", "99", "4 million"]
	};
	//Act
	mockValidate.mockReturnValue([`"4" must be selected`]);
	render(<Output {...requiredProps}/>)
	//Assert
	expect(mockValidate).toBeCalled();
	expect(mockValidate()).toStrictEqual([`"4" must be selected`]);
});

test('Maths answer validation returns no error message if answer is correct', () => {
    //Arrange
	const mockValidate = jest.fn();
	const requiredProps = {
		title: "What is 2 + 2?",
		role: "mathsAnswer",
		value: "4",
		regex: [/^4{1}$/],
		message: ['"4" must be selected'],
		submitted: true,
		validate: mockValidate,
		options: ["Not 4", "0", "4", "99", "4 million"]
	};
	//Act
	mockValidate.mockReturnValue([]);
	render(<Output {...requiredProps}/>)
	//Assert
	expect(mockValidate).toBeCalled();
	expect(mockValidate()).toStrictEqual([]);
});

