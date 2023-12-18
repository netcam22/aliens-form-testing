import { ChangeEventHandler, ChangeEvent} from 'react';
import { InputProps} from "./W12MForm";
import { ErrorMessage } from './error_message';
import {  } from './W12MForm';
export interface TextInputProps extends InputProps {
	onChange: ChangeEventHandler<HTMLInputElement> | any;
}

export const TextInput : React.FC<TextInputProps> = (props) => {

function validateInput() {
	return props.submitted? props.validate(props.title, props.regex, props.value, props.message) : "";
}
const errorMessage = validateInput();

const onChangeText = (errorMessage:string) => (event: ChangeEvent<HTMLInputElement>) => {
	props.onChange(event, errorMessage);
}

return (
    <>	<label htmlFor={props.role}>{props.title}</label>
        <input id ={props.role}
			className = "valid"
					type ='text'
					value = {props.value}
					onChange={onChangeText(errorMessage)} 
		/>
		{props.submitted && errorMessage !== "" &&
		<ErrorMessage message = {errorMessage}/>
		}
    </> 
	);
};