import { MouseEventHandler } from "react";

interface SubmitButtonProps {
	buttonText: string;
	onSubmitHandler: MouseEventHandler<HTMLButtonElement>;
	isDisabled: boolean;
	id: string;
	role: string;
}

export const SubmitButton : React.FC<SubmitButtonProps> =
 ({buttonText, onSubmitHandler, isDisabled, id, role}) => (
	<button
	className = "submitButton"
	id="submitAlienDataButton" 
	// eslint-disable-next-line jsx-a11y/aria-role
	role="submitAlienDataButton" 
	disabled={isDisabled}
	onClick={onSubmitHandler}>{buttonText}</ button>
	);