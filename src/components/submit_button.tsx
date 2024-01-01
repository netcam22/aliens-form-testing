import { MouseEventHandler } from "react";

interface SubmitButtonProps {
	buttonText: string;
	onSubmitHandler: MouseEventHandler<HTMLButtonElement>;
	id: string;
	role: string;
	disable: boolean;
}

export const SubmitButton : React.FC<SubmitButtonProps> =
 ({buttonText, onSubmitHandler, id, role, disable}) => {
	return (
	<button
	className = {role}
	id={id} 
	// eslint-disable-next-line jsx-a11y/aria-role
	role={id} 
	disabled={disable}
	onClick={onSubmitHandler}>{buttonText}</ button>
	);
 }