import { InitialValue} from "../data/alien_form_data";

const useHasErrors = (errors: InitialValue) => {

    const errorData = Object.values(errors).reduce((acc: string, value) => 
      acc = acc + value, "");
    return errorData === ""? false: true;

};
export default useHasErrors;