import { ChangeEventHandler} from 'react';
import { InputProps } from "./W12MForm";
import { ErrorMessage } from './error_message';

export interface TextInputProps extends InputProps {
	onChange: ChangeEventHandler<HTMLInputElement>;
}

export const TextInput : React.FC<TextInputProps> = (props) => {

function validateInput() {
	return props.submitted? props.validate(props.title, props.regex, props.value, props.message) : "";
}
const errorMessage = validateInput();

return (
    <>	<label htmlFor={props.role}>{props.title}</label>
        <input id ={props.role}
			className = "valid"
					type ='text'
					value = {props.value}
					onChange = {props.onChange} 
		/>
		{props.submitted && errorMessage !== "" &&
		<ErrorMessage message = {errorMessage}/>
		}
    </> 
	);
};