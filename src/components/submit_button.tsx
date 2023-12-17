import { MouseEventHandler } from "react";

interface SubmitButtonProps {
	buttonText: string;
	onSubmitHandler: MouseEventHandler<HTMLButtonElement>;
}

export const SubmitButton : React.FC<SubmitButtonProps> = ({buttonText, onSubmitHandler}) => (
	// eslint-disable-next-line jsx-a11y/aria-role
	<button role="submitButton" onClick={onSubmitHandler}>{buttonText}</ button>
	);