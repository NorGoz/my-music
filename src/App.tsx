import React, { useState} from 'react';
import './_app.scss';
import {Form} from "./components/Form/Form";
import {Input} from "./components/Input/Input";
import {HttpMethod, useFetch} from "./utils/hooks/useFetch";
import {validationContractor} from "./utils/validation/validationContractor";


export interface Contractor{
    name:string;
    lastName:string;
    id:number | string;
    photo:any;
}
const initContractor: Contractor ={
    name:'',
    lastName:'',
    id:'',
    photo:null,
}

function App() {
    const [isCompany, setIsCompany] = useState(false);
    const [data, status, fetchData] = useFetch();

    console.log(status)
    const changeCompany = () => {
        setIsCompany(prevValue => !prevValue);
    }

    const sendForm = (data:Contractor) => {
        if(validationContractor(data,isCompany)){
            fetchData(`https://localhost:60001/Contractor/Save`, {
                method: HttpMethod.POST,
                headers: { 'content-type': 'application/json;charset=UTF-8' },
                body: { data },
            });
            return alert('Wysłano formularz')
        }
        return alert(`Wprowadziłeś błędne dane`)
    }

    if(status === 'fetching'){
        return (
            <div>
                <h2>Error 404</h2>
                <p>Nie znaleziono metody zapisu</p>
            </div>
        )
    } else
        return (
            <div className='page'>
                <div className='form__container'>
                    <h2 className='form__title'>Nowy Kontrahent</h2>
                    {/*<form className='form__form' onSubmit={sendForm}>*/}
                    {/*    <label htmlFor="name" className='form__label'>*/}
                    {/*        <input type="text" id='name' required={true} className='form__input input__text'  onChange={e => updateForm('name', e.target.value)}/><span className='form__text'>Imię</span>*/}
                    {/*    </label>*/}
                    {/*    <label htmlFor="lastName" className='form__label'>*/}
                    {/*        <input type="text" id='lastName' required={true} className='form__input input__text'  onChange={e => updateForm('lastName', e.target.value)}/><span className='form__text'>Nazwisko</span>*/}
                    {/*    </label>*/}
                    {/*    <label htmlFor="PIT" className='form__label PIT'>*/}
                    {/*        Firma <input type="checkbox" id='PIT' className='form__input' checked={isCompany}  onChange={changeCompany}/>*/}
                    {/*    </label>*/}
                    {/*    {*/}
                    {/*        isCompany ?*/}
                    {/*            <label htmlFor="NIP" className='form__label'>*/}
                    {/*                <input type="number" id='NIP' required={true} className='form__input input__text'  onChange={e => updateForm('id', e.target.value)}/><span className='form__text'>NIP</span>*/}
                    {/*            </label>*/}
                    {/*            :*/}
                    {/*            <label htmlFor="PESEL" className='form__label'>*/}
                    {/*                <input type="number" id='PESEL' required={true} className='form__input input__text'  onChange={e => updateForm('id', e.target.value)}/><span className='form__text'>PESEL</span>*/}
                    {/*            </label>*/}
                    {/*    }*/}
                    {/*    <label htmlFor="upload" className='form__label'>*/}
                    {/*        Dodaj Zdjęcie: <input type="file" id='upload' accept='image/png, image/jpeg' className='form__input'/>*/}
                    {/*    </label>*/}
                    {/*    /!*<Dropzone/>*!/*/}
                    {/*    <button className='form__btn btn'>Dodaj</button>*/}
                    {/*</form>*/}
                    <Form formInitialValues={initContractor} functionToForm={sendForm}>
                        <Input
                            name='name'
                            id='name'
                            spanText='Imię'
                            type='text'
                        />
                        <Input
                            name='lastName'
                            id='lastName'
                            spanText='Nazwisko'
                            type='text'
                        />
                        <label htmlFor="PIT" className='form__label PIT'>
                            Firma <input type="checkbox" id='PIT' className='form__input' checked={isCompany}  onChange={changeCompany}/>
                        </label>
                        {
                            isCompany ?
                                <Input
                                    name='id'
                                    id='NIP'
                                    type='number'
                                    spanText='NIP'
                                />
                                :
                                <Input
                                    name='id'
                                    id='pesel'
                                    type='number'
                                    spanText='Pesel'
                                />
                        }
                        <button className='form__btn btn'>Dodaj</button>
                    </Form>
                </div>
            </div>
        );

}

export default App;
