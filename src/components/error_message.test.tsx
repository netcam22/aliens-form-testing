import { render, screen } from '@testing-library/react';
import { ErrorMessage, ErrorMessageProps } from './error_message';

test('Error message must be between 17 and 153... is displayed when passed in through props', () => {

	const requiredProps: ErrorMessageProps = {
		message: "must be between 17 and 153 characters"
	}

	render(<ErrorMessage {...requiredProps}/>);
	
	const text = screen.getByText(
		/must be between 17 and 153 characters/i
	);
	expect(text).toBeInTheDocument();
});

test('Error numbers ONLY... is displayed when passed in through props', () => {

	const requiredProps: ErrorMessageProps = {
		message: "numbers ONLY; must be at least 1,000,000,000"
	}

	render(<ErrorMessage {...requiredProps}/>);
	
	const text = screen.getByText(
		/numbers ONLY; must be at least 1,000,000,000/i
	);
	expect(text).toBeInTheDocument();
});

