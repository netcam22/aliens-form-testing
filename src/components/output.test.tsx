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
		errorMessage: "",
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
		errorMessage: "Must be between 17 and 153 characters",
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
		errorMessage: "",
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


