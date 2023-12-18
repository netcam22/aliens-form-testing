import { MouseEventHandler } from "react";
import { InitialValue } from "../data/alien_form_data";

interface SubmitButtonProps {
	buttonText: string;
	onSubmitHandler: MouseEventHandler<HTMLButtonElement>;
	errorMessages: InitialValue;
	id: string;
	role: string;
}

function manageSubmitButton(errorMessages: InitialValue)  {
	const errorData = Object.entries(errorMessages).reduce((acc, [key, value]) => 
	  acc = acc + value, "");
	return errorData === ""? false: true;
}

export const SubmitButton : React.FC<SubmitButtonProps> =
 ({buttonText, onSubmitHandler, errorMessages, id, role}) => {
	const disableButton = manageSubmitButton(errorMessages);
	return (
	<button
	className = "submitButton"
	id="submitAlienDataButton" 
	// eslint-disable-next-line jsx-a11y/aria-role
	role="submitAlienDataButton" 
	disabled={disableButton}
	onClick={onSubmitHandler}>{buttonText}</ button>
	);
 }