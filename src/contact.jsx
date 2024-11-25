import { useRef, useState } from 'react';
import './contact.css';
import Popup from './popup';
import axios from 'axios';

const FormItem = ({ errors, label, id, isTextarea=false, index=null, type='text'}) => {
    const error = errors?.[index];

    return (
        <div className="form-item">
            <label htmlFor={id}>{label}<span style={{opacity: error ? 1 : 0}}>{error}</span></label>
            {isTextarea ? <textarea className={error ? 'error' : ''} id={id} name={id} /> : <input className={error ? 'error' : ''} type={type} id={id} name={id} />}
        </div>
    );
};

// Helper function to create contact info items
const InfoItem = ({ title, content, icon }) => (
    <div className='contact-item'>
        <div className="contact-header">
            {icon}
            <div className="contact-divider" />
            <span>{title}</span>
        </div>
        {content}
    </div>
);

let timer = null;

export default function Contact() {
    const [popup, setPopup] = useState(null);
    const [errors, setErrors] = useState([null, null, null]);
    const [submitTimeout, setSubmitTimeout] = useState(null);
    const [buttonContent, setButtonContent] = useState("Submit");
    const formRef = useRef(null);
    const submitRef = useRef(null);

    const info = {
        email: 'info@initeksolutions.com',
        number: '604-690-0731',
    };

    const icons = [
        <svg 
            className='info-icon'
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64" 
        >
            <rect x="7.1" y="9.65" width="49.8" height="44.71" rx="2.5"/>
            <path d="M7.88 9.65l25.16 21.97 23.11-21.25"/>
        </svg>,
        <svg 
            className='info-icon'
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 64 64" 
        >
            <path d="M31.56 56.51S14.41 37.67 14.41 25.39c0-14.49 9.48-17.84 17.15-17.84 7.06 0 16.13 3.79 16.13 17.84 0 12.68-16.13 31.12-16.13 31.12z"/>
            <circle cx="31.05" cy="22.24" r="6.93"/>
        </svg>
    ]

    const loading = (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 100 100" 
            preserveAspectRatio="xMidYMid" 
            style={{height: 48, width: 48, shapeRendering: "auto", display: "block", background: "transparent"}}
            xlink="http://www.w3.org/1999/xlink"
        >
            <g>
                <circle stroke-dasharray="164.93361431346415 56.97787143782138" r="35" stroke-width="10" stroke="#eef4fc" fill="none" cy="50" cx="50">
                    <animateTransform keyTimes="0;1" values="0 50 50;360 50 50" dur="1s" repeatCount="indefinite" type="rotate" attributeName="transform"/>
                </circle>
                <g></g>
            </g>
        </svg>
    )

    // Handle form submission
    const submitForm = async () => {
        const data = Object.fromEntries(new FormData(formRef.current));

        popup && setPopup(null);

        const validations = [
            validateName(data),
            validatePhone(data),
            validateEmail(data)
        ]

        setErrors(errors => {
            let newErrors = errors;

            [...newErrors] = [...validations];

            return [...newErrors];
        });

        if (!validations.some(x => x)) {
            if (submitTimeout) {
                const remainder = 5 - Math.ceil((Date.now() - timer) / 1000);

                setPopup(<Popup close={() => setPopup(null)} message={`You have recently submitted a form. Please wait ${remainder === 0 ? 1 : remainder} more seconds before trying again.`}/>);
            } else {
                submitRef.current.classList.add('loading');
                
                setButtonContent(loading);
                
                let response = {}

                try {
                    response = await axios.post('/contact.php', new FormData(formRef.current));
                } catch (err) {
                    response = {data: "Unable to process your request. Please try again later."}
                }

                setPopup(<Popup close={() => setPopup(null)} message={response.data}/>);

                setSubmitTimeout(setTimeout(() => setSubmitTimeout(false), 5000));
                setButtonContent("Submit")
                submitRef.current.classList.remove('loading');
                timer = Date.now();
            }
        }
    };

    const validateName = data => {
        return data.name.length === 0 ? "Required" : null;
    }

    const validatePhone = data => {
        if (data.phone_number.length === 0) return "Required";

        const reg = /^(?!.*[A-Za-z])(?:1\+|011\+)?[ -.]?\d{3}[-. ]?\d{3}[-. ]?\d{4}$/;

        return reg.test(data.phone_number) ? null : "Invalid Phone Number";
    };

    const validateEmail = data => {
        if (data.email.length === 0) return "Required";

        const reg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        return reg.test(data.email) ? null : "Invalid Email Address";
    }

    return (
        <section id="contact-us">
            {popup}
            <div id="contact-container">
                <h5>/ Contact Us /</h5>
                <h3>Book an appointment with us today</h3>
                <p>If you have any questions, feel free to email or give us a call.</p>

                <form ref={formRef} id="contact-form" onChange={() => setErrors([null, null, null])}>
                    <FormItem errors={errors} index={0} label="Full Name *" id="name" />
                    <FormItem errors={errors} index={1} label="Phone Number *" id="phone_number" />
                    <FormItem errors={errors} index={2} label="Email Address *" id="email" />
                    <FormItem errors={errors} label="Company Name" id="company_name" />
                    <FormItem errors={errors} label="Additional Notes" id="notes" isTextarea />
                </form>

                <button ref={submitRef} onClick={submitForm}>{buttonContent}</button>
            </div>

            <div id="info-container">
                <InfoItem
                    title="Email us"
                    content={<a href={`mailto:${info.email}`}>{info.email}</a>}
                    icon={icons[0]}
                />
                <InfoItem
                    title="Call us"
                    content={<a href={`tel:${info.number}`}>{info.number}</a>}
                    icon={icons[1]}
                />
            </div>
        </section>
    );
}
