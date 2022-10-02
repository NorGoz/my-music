import React, {useContext, useState} from 'react';
import {FormContext} from "../Form/Form";

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
        <div>
            <input
                type="file"
                onChange={handleChange}
                accept="image/jpg, image/png"
            />
            <img
                src={file ? file : ''}
                alt='Twoje zdjęcie'
                style={{
                    display: 'flex',
                    border: '2px solid royaleblue',
                    width: '150px',
                    height: '150px',
                    margin: '10px auto'
                }}
            />
        </div>
    );
}
export default UploadFile;