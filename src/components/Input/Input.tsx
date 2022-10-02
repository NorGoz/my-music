import React, { useContext } from 'react';
import { FormContext } from '../Form/Form';
import './_Input.scss';

type Type = 'text' | 'number' | 'password' | 'radio' | 'submit' | 'file';

interface Props {
    name: string;
    value?: any;
    type: Type;
    title?: string;
    id?:string;
    spanText?:string;
}

export function Input({
    name,
    value,
    type,
    title,
    id,
    spanText,

                      }: Props) {
    const formContext = useContext<any>(FormContext);
    const { form, handleFormChange } = formContext;
    return (
            <label className='form__label'  htmlFor={id ? id : ''}>
                {title && <p>{title}</p>}
                <input
                    className='form__input input__text'
                    required={true}
                    type={type}
                    value={type === 'radio' ? value : form[name]}
                    name={name}
                    id={id}
                    onChange={handleFormChange}
                />
                {spanText ? <span className='form__text'>{spanText}</span> : null}
            </label>
    );
}