import React, { useState } from 'react';
import { RiArrowRightLine, RiArrowLeftLine } from 'react-icons/ri';
import './datePicker.css'

const now = new Date();
const today = now.toLocaleString("en-US", { day : '2-digit'});

const DatePicker = ({ register, name }) => {
    const [month, setMonth] = useState(0);
    const [daysInMonth, setDaysInMonth] = useState(new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate());
    const [firstDayInMonth, setFirsDayInMonth] = useState(new Date(now.getFullYear(), now.getMonth(), 1).getDay())

    const nextMonth = () => {
        setMonth(month + 1);
        setDaysInMonth(new Date(now.getFullYear(), now.getMonth()+ 2 + month, 0).getDate());

        if(new Date(now.getFullYear(), now.getMonth() + 1 + month, 1).getDay() === 0){
            setFirsDayInMonth(7);
        } else {
            setFirsDayInMonth(new Date(now.getFullYear(), now.getMonth() + 1 + month, 1).getDay());
        }
    }

    const prevMonth = () => {
        setMonth(month - 1);
        setDaysInMonth(new Date(now.getFullYear(), now.getMonth() - 2 + month, 0).getDate());

        if(new Date(now.getFullYear(), now.getMonth() - 1 + month, 1).getDay() === 0){
            setFirsDayInMonth(7);
        } else {
            setFirsDayInMonth(new Date(now.getFullYear(), now.getMonth() - 1 + month, 1).getDay());
        }
    }

    return (
        <div className="datepicker__container">
            <div className="datepicker__container-header">
                <RiArrowLeftLine size={28} className="datepicker__container-header_button" onClick={ month < 1 ? undefined : prevMonth } />
                <h3>{ new Date(now.getFullYear(), now.getMonth()+month, 1).toLocaleString('default', { month: 'long' }) }</h3>
                <RiArrowRightLine size={28} className="datepicker__container-header_button" onClick={ nextMonth } />
            </div>
            <div className="datepicker__container-body">
                <p>Mån<span>dag</span></p><p>Tis<span>dag</span></p><p>Ons<span>dag</span></p><p>Tors<span>dag</span></p><p>Fre<span>dag</span></p><p>Lör<span>dag</span></p><p>Sön<span>dag</span></p>
                {[...Array(daysInMonth)].map((item, index) =>(
                        <React.Fragment key={`item${index}`} className="date__brick">
                            <input 
                            type="radio" 
                            name={name} 
                            value={new Date(now.getFullYear(), now.getMonth() + month, index + 1).toLocaleDateString()} 
                            id={`item${index}`} {...register(`${name}`)} disabled={ index + 1 < today && month === 0 ? true : false } />
                            <label
                            htmlFor={`item${index}`}
                            style={ index === 0 ? {gridColumnStart: firstDayInMonth } : {} } >{index + 1}</label>
                        </React.Fragment>   
                ))}
            </div>
        </div>
    )
}

export default DatePicker