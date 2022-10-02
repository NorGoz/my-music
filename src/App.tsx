import React from 'react';

import './_app.scss';

function App() {
  return (
    <div className='page'>
        <div className='form__container'>
            <h2 className='form__title'>Nowy Kontrahent</h2>
            <form className='form__form'>
                <label htmlFor="name" className='form__label'><input type="text" id='name' required={true} className='form__input input__text'/><span className='form__text'>Imię</span></label>
                <label htmlFor="lastName" className='form__label'><input type="text" id='lastName' required={true} className='form__input input__text'/><span className='form__text'>Nazwisko</span></label>
                <label htmlFor="PIT" className='form__label PIT'>Firma <input type="checkbox" id='PIT' className='form__input'/></label>
                <label htmlFor="nipOrPit" className='form__label'><input type="text" id='nipOrPit' required={true} className='form__input input__text'/><span className='form__text'>PIT || NIP</span></label>
                <label htmlFor="upload" className='form__label'>Dodaj Zdjęcie: <input type="file" id='upload' accept='image/png, image/jpeg' className='form__input'/></label>
                <button className='form__btn btn'>Dodaj</button>
            </form>
        </div>
    </div>
  );
}

export default App;
