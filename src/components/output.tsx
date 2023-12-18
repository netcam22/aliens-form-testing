
export type FormValuesProps = {
    title: string;
    value: string;
    role: string;
    regex: Array<RegExp>;
    errorMessage: string;
    validate: (title:string, regex: Array<RegExp>, value: string, errorMessage: Array<string>) => string;
    submitted: boolean;
  }

export const Output: React.FC<FormValuesProps> = (props) => {

        return (
        <>
        {props.submitted && props.value !== "" && props.errorMessage === "" &&
         <div className="col-50-right submitted">
        <p className = "valid">{props.title}: {props.value}</p>
        </div>
        }
        {props.submitted && (props.value === "" || props.errorMessage !== "") &&
         <div className="col-50-right pending">
        <p className = "error">{props.title}:</p>
        </div>
        }
        </>
        )
};