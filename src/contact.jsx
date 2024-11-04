import './contact.css';

import emailIco from './assets/email-ico.png';
import phoneIco from './assets/phone-ico.png';
import mapsIco from './assets/maps-ico.png';
import { useRef } from 'react';


const info = {
    email: 'contactus@initeksolutions.com',
    number: '604-123-1234',
    location: '123 Fake Street, Vancouver, BC'
};

const createFormItem = (title, id, textarea=false) => {
    return (
        <div className="form-item">
            <label htmlFor={id}>{title}</label>
            {textarea ? 
                <textarea type="text" id={id} name={id}/> :
                <input type="text" id={id} name={id}/>
            }
        </div>
    );
};

const createInfoItem = (title, link, img) => {
    return (
        <li>
            <div className="contact-header">
                <img src={img} alt={`${title} icon`}/>
                <div className="contact-divider"/>
                <span>{title}</span>
            </div>

            {link}
        </li>
    );
};

const submitForm = ref => {
    const data = Object.fromEntries(new FormData(ref.current));

    // Submit data here
    console.log(data);
};

export default function Contact() {
    const formRef = useRef(null);

    return (
        <section id='contact-us'>
            <div className='section-container'>
                <div id='contact-container'>
                    <h1 id="contact-us-anchor">Book an appointment with us today</h1>
                    <p>If you have any questions, feel free to email or give us a call.</p>

                    <form ref={formRef} id='contact-form'>
                        {createFormItem("Full Name", "name")}
                        {createFormItem("Phone", "phone_number")}
                        {createFormItem("Company Name", "company_name")}
                        {createFormItem("Email Address", "email")}
                        {createFormItem("Additional Notes", "notes", true)}
                    </form>

                    <button onClick={() => submitForm(formRef)}>Submit</button>
                </div>

                <div id="info-container">
                    <ul>
                        {createInfoItem('Email us', <a href={`mailto:${info.email}`}>{info.email}</a>, emailIco)}
                        {createInfoItem('Call us', <a href={`tel:${info.number}`}>{info.number}</a>, phoneIco)}
                        {createInfoItem('Find us', <address>{info.location}</address>, mapsIco)}
                    </ul>
                </div>
            </div>
        </section>
    );
};