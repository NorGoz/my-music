import React, {ReactElement, useState} from "react";
import './_Form.scss';

interface Props {
    children: ReactElement[];
    formInitialValues:{};
    functionToForm?:any;
}

export const FormContext = React.createContext({
    form: {},
    handleFormChange: (event: React.ChangeEvent<HTMLInputElement>) => {},
});

export function Form({children, functionToForm, formInitialValues}: Props) {
    const [form, setForm] = useState(formInitialValues);

    const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        const updatedForm = {
            ...form,
            [name]: value,
        };
        setForm(updatedForm);
    };
    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        functionToForm(form);
        setForm(formInitialValues);
    };
    return(
        <FormContext.Provider
            value={{
                form,
                handleFormChange,
            }}
        >
            <form className='form__form' onSubmit={handleSubmit}>
                    {children}
            </form>
        </FormContext.Provider>
    );
}