import { ChangeEventHandler } from "react";
import { InputProps } from "./W12MForm";
import { ErrorMessage } from './error_message';
export interface TextAreaInputProps extends InputProps {
	onChange: ChangeEventHandler<HTMLTextAreaElement> | any;
	size: {
		rows: number;
		cols: number;
	}
}

export const TextAreaInput : React.FC<TextAreaInputProps> = (props) => {

	return (
    <>
        <label htmlFor={props.role}>{props.title}</label>
        <textarea id={props.role}
					rows={props.size.rows}
					cols={props.size.cols}
					value={props.value}
					onChange={props.onChange}  
					/>
    {props.submitted && props.errorMessage !== "" &&
		<ErrorMessage message = {props.errorMessage}/>
		}
	</>
	 )
}