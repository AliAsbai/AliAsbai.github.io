import React, { useState, useLayoutEffect } from 'react'
import { Tjanst, Info, Uppgifter, Date, Success } from './components';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { send } from 'emailjs-com';
import 'yup-phone';
import './offertForm.css';

const infoData = [
    {
        id: "Kontorsstädning",
        buttons: [
            {
                id: "kontorl",
                value: "Kontorslokal",
            },
            {
                id: "kontorlagerl",
                value: "Kontor & lager",
            },
        ],
    },
    {
        id: "Trappstädning",
        buttons: [
            {
                id: "tapph",
                value: "Trapphus",
            },
        ],
    },
    {
        id: "Butiksstädning",
        buttons: [
            {
                id: "butikl",
                value: "Butikslokal",
            },
        ],
    },
    {
        id: "Städning av köpcentrum",
        buttons: [
            {
                id: "test",
                value: "test",
            },
            {
                id: "test",
                value: "test",
            },
        ],
    },
    {
        id: "Kontraktsstädning",
        buttons: [
            {
                id: "restu",
                value: "Resturang",
            },
            {
                id: "gym",
                value: "Gym",
            },
            {
                id: "skola",
                value: "Förskola",
            },
            {
                id: "vård",
                value: "Vårdinrättning",
            },
        ],
    },
    {
        id: "Fönsterputs",
        buttons: [
            {
                id: "kontorl",
                value: "Kontorslokal",
            },
            {
                id: "butikl",
                value: "Butikslokal",
            },
            {
                id: "restu",
                value: "Resturang",
            },
            {
                id: "trapph",
                value: "Trapphus",
            },
        ],
    },
    {
        id: "Visningsstädning",
        buttons: [
            {
                id: "villa",
                value: "Villa/Radhus",
            },
            {
                id: "lägenh",
                value: "Lägenhet",
            },
        ],
    },
    {
        id: "Flyttstädning",
        buttons: [
            {
                id: "kontorl",
                value: "Kontorslokal",
            },
            {
                id: "butikl",
                value: "Butikslokal",
            },
            {
                id: "lagerl",
                value: "Lagerlokal",
            },
            {
                id: "villa",
                value: "Villa/Radhus",
            },
            {
                id: "lägenh",
                value: "Lägenhet",
            },
        ],
    },
    {
        id: "Lagerstädning",
        buttons: [
            {
                id: "lagerl",
                value: "Lagerlokal",
            },
            {
                id: "kontorlagerl",
                value: "Kontor & LAger",
            },
        ],
    },
]

const schema = yup.object().shape({
    tjanst: yup.string().required().typeError("Vänligen välj tjänst!"),

    yta: yup.number().required("Vänligen fyll i städyta!").typeError("Vänligen ange lokalens yta i kvm!"),
    misc: yup.string(),

    namn: yup.string().required("Vänligen fyll i förnamn!"),
    efternamn: yup.string().required("Vänligen fyll i efternamn!"),
    adress: yup.string().required("Vänligen fyll i adress!"),
    postnummer: yup.string().required("Vänligen fyll i postnummer!").matches(/^[0-9]+$/, "Fyll i ett giltigt postnummer!").min(5, "Postnummer är för kort!").max(5, "Postnummer är för långt!"),
    ort: yup.string().required("Vänligen fyll i ort!"),
    epost: yup.string().email("Vänligen fyll i en giltig e-postadress!").required("Vänligen fyll i e-postadress!"),
    telefon: yup.string().required("Vänligen fyll i telefonnummer!").phone("SE", false,"Vänligen fyll i ett giltigt telefonnummer!"),

    date: yup.string().nullable(),
    altDate: yup.string(),
    altMisc: yup.string(),
    privacy: yup.boolean().oneOf([true], "Vänligen acceptera hantering av personuppgifter!"),
});

function switchComponent(step, nextStep, prevStep, register, errors, trigger, getValues) {
    switch(step) {
        case 1:
            return (
                <Tjanst
                nextStep={ nextStep }
                register={ register }
                errors={ errors }
                trigger={ trigger } />
            )
        case 2:
            return (
                <Info 
                prevStep= { prevStep }
                nextStep={ nextStep }
                register={ register }
                errors={ errors }
                trigger={ trigger }
                values={ infoData }
                tjanst= { getValues("tjanst") } />
            )
        case 3:
            return (
                <Uppgifter
                prevStep= { prevStep }
                nextStep={ nextStep }
                register={ register }
                errors={ errors }
                trigger={ trigger } />
            )
        case 4:
            return (
                <Date
                prevStep= { prevStep }
                register={ register }
                errors={ errors } />
            )
        case 5:
            return (
                <Success />
            )
        default:
    }
}

const OffertForm = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    const { register, handleSubmit, reset, trigger, formState: { errors }, getValues } = useForm({
        resolver: yupResolver(schema),
    });

    const [step, setStep] = useState(1);

    const prevStep = () => {
        setStep(step - 1);
    };
    
    const nextStep = () => {
        setStep(step + 1);
    };

    const submitForm = ( data ) => {
        nextStep();
        send(
            'service_9wl85xf',
            'template_sfclwus',
            data,
            'eZq5ymJuPRiYrUMX7'
        ).then((response) => {
            reset({
                tjanst: '',

                yta: '',
                misc: '',

                namn: '',
                efternamn: '',
                adress: '',
                postnummer: '',
                ort: '',
                epost: '',
                telefon: '',

                date: '',
                altDate: '',
                altMisc: '',
                privacy: '',
            });
            console.log('SUCCESS!', response.status, response.text);
          })
          .catch((err) => {
            console.log('FAILED...', err);
          });
    };

    return (
        <div className="offert section__padding">
            <div className="offert__container">
                <div className="offert__container-progress" style={step > 4 ? {display: "none"}: {}}>
                    <div style={{background: "var(--color-button)"}} />
                    <div style={step > 1 ? {background: "var(--color-button)"}: {}} />
                    <div style={step > 2 ? {background: "var(--color-button)"}: {}} />
                    <div style={step > 3 ? {background: "var(--color-button)"}: {}} />
                </div>
                <form className="offert__container-form" onSubmit={ handleSubmit(submitForm) }>
                    {switchComponent(step, nextStep, prevStep, register, errors, trigger, getValues)}
                </form>
            </div>
        </div>
    )
        
}
export default OffertForm