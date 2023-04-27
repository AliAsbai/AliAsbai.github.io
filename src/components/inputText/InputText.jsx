import React from 'react';
import './inputText.css';

const InputText = ({ type, label, placeholder, name, register, errors }) => {
    return (
        <div className="inputText__container">
            <label htmlFor="textInput" id="over"><p>{label}</p></label>
            <input type={type} placeholder={placeholder} name={name} id="textInput" {...register(`${name}`)} className={ errors ? "textInput__error" : "" } />
            <p id="under">{errors && errors.message}</p>
        </div>
    )
}

InputText.defaultProps = {
    type: "text",
    label: "",
    placeholder: "",
    size: null,
    name: "",
    register: null,
    errors: null,
}

export default InputText