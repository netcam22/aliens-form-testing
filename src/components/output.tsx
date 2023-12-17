
export type FormValuesProps = {
    title: string;
    value: string;
    role: string;
    regex: Array<RegExp>;
    message: Array<string>;
    validate: (title:string, regex: Array<RegExp>, value: string, message: Array<string>) => string;
    submitted: boolean;
  }

export const Output: React.FC<FormValuesProps> = (props) => {

    function validateInput() {
        return props.submitted? props.validate(props.title, props.regex, props.value, props.message) : "";
    }
    const errorMessage = validateInput();
        return (
        <>
        {props.submitted && errorMessage === "" &&
         <div className="col-50-right submitted">
        <p className = "valid">{props.title}: {props.value}</p>
        </div>
        }
        {props.submitted && errorMessage !== "" &&
         <div className="col-50-right pending">
        <p className = "error">{props.title}:</p>
        </div>
        }
        </>
        )
};