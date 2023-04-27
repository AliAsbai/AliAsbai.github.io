import React from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { send } from 'emailjs-com';
import InputText from '../inputText/InputText';
import 'yup-phone';
import './contact.css';

const schema = yup.object().shape({
    namn: yup.string().required("Vänligen fyll i förnamn!"),
    email: yup.string().email("Vänligen fyll i en giltig e-postadress!").required("Vänligen fyll i e-postadress!"),
    phone: yup.string().required("Vänligen fyll i telefonnummer!").phone("SE", false,"Vänligen fyll i ett giltigt telefonnummer!"),
    subject: yup.string().test("requiredTest", "Vänligen välj ärende ur listan!",(value) => !nothingSelected(value)).required(),
    message: yup.string().required("Vänligen beskriv ditt ärende!"),
    privacy: yup.boolean().oneOf([true], "Vänligen acceptera hantering av personuppgifter!"),
});

const nothingSelected = (value) => /^Ditt ärende$/.test(value);

const Contact = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
        shouldFocusError: false,
    });

    const submitForm = ( data ) => {
        send(
            'service_9wl85xf',
            'template_58ts1kp',
            data,
            'eZq5ymJuPRiYrUMX7'
        ).then((response) => {
            reset({
                namn: '',
                email: '',
                phone: '',
                subject: 'Ditt ärende',
                message: '',
                privacy: '',
            });
            console.log('SUCCESS!', response.status, response.text);
          })
          .catch((err) => {
            console.log('FAILED...', err);
          });
    };
    
    return (
        <div className="contact__container">
            <form className="contact__container-form" onSubmit={handleSubmit(submitForm)}>
                    <InputText type="text" placeholder="Namn*" name="namn" register={ register } errors={ errors.namn } />
                    <InputText type="text" placeholder="E-post*" name="email" register={ register } errors={ errors.email } />
                    <InputText type="tel" placeholder="Telefonnummer*" name="phone" register={ register } errors={ errors.phone } />
                    <div className="contact__container-form_select">
                        <select name="subject" {...register("subject")} className={ errors.subject ? "contact__error" : ""} >
                            <option disabled hidden selected>Ditt ärende</option>
                            <option>Vill boka en städning</option>
                            <option>Har frågor om era företagstjänster</option>
                            <option>Vill boka offertmöte</option>
                            <option>Fakturafråga</option>
                            <option>Söker arbete</option>
                            <option>Annat</option>
                        </select>
                        <p id="under">{ errors.subject && errors.subject.message }</p>
                    </div>
                    <div id="contact__container-form_texarea">
                        <textarea name="message" placeholder="Beskriv ärende" rows="10" {...register("message")} className={ errors.message ? "contact__error" : ""} />
                        <p id="under">{ errors.message && errors.message.message }</p>
                    </div>
                    <label className="contact__container-form_privacy">
                            <input type="checkbox" name="privacy" value={true} {...register("privacy")} required />
                            Jag godkänner integritetspolicyn
                    </label>
                    <input className="contact__container-form_submit" value="Skicka" type="submit" name="submit" />
            </form> 
        </div>
    )
}

export default Contact