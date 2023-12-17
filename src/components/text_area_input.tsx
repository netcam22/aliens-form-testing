import { ChangeEventHandler } from "react";
import { InputProps } from "./W12MForm";
import { ErrorMessage } from './error_message';
export interface TextAreaInputProps extends InputProps {
	onChange: ChangeEventHandler<HTMLTextAreaElement>;
	size: {
		rows: number;
		cols: number;
	}
}

export const TextAreaInput : React.FC<TextAreaInputProps> = (props) => {

	function validateInput() {
		return props.submitted? props.validate(props.title, props.regex, props.value, props.message) : "";
	}
	const errorMessage = validateInput();
	return (
    <>
        <label htmlFor={props.role}>{props.title}</label>
        <textarea id={props.role}
					rows={props.size.rows}
					cols={props.size.cols}
					value={props.value}
					onChange= {props.onChange}  />
    {errorMessage !== "" &&
		<ErrorMessage message = {errorMessage}/>
		}
	</>
	 )
}