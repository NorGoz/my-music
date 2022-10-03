import React, {useContext, useState} from 'react';
import {FormContext} from "../Form/Form";
import './_UploadFile.scss';

export function UploadFile() {
    const [file, setFile] = useState(null);
    const formContext = useContext<any>(FormContext);
    const {  handleFormChange } = formContext;

    const handleChange = async (
        event: React.ChangeEvent<HTMLInputElement>
    ): Promise<any> => {
        // @ts-ignore
        const fileLoaded = URL.createObjectURL(event.target.files[0]);
        const files = event.target.files;
        handleFormChange(event)
        // @ts-ignore
        setFile(fileLoaded);
    };
    return (
        <div className='form__label'>
            <input
                className='form__input'
                type="file"
                required={true}
                onChange={handleChange}
                accept="image/jpeg, image/png"
            />
            <img
                src={file ? file : ''}
                alt='Twoje zdjęcie'
                className='input__img'
            />
        </div>
    );
}
export default UploadFile;