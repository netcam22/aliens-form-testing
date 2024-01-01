import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { SubmitButton } from './submit_button';

test('When user clicks the button, the handleSubmit function is called', async () => {

	const mockSubmit = jest.fn();
	const requiredProps = {
		buttonText: "",
		onSubmitHandler: mockSubmit,
		id: "submitAlienDataButton",
		role: "submitAlienDataButton",
		disable: false
	};

	render(<SubmitButton {...requiredProps}/>);
	
	const submitButton = screen.getByRole("submitAlienDataButton");
    expect(submitButton).toBeInTheDocument();

	if (submitButton) {
		await userEvent.click(submitButton);
	}
	expect(mockSubmit).toBeCalled();

});