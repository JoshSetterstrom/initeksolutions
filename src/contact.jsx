import { useRef } from 'react';
import './contact.css';

export default function Contact({ imgs }) {
    // Destructure the imported images
    const [emailIco, phoneIco, mapsIco] = imgs;

    // Create a reference to the form
    const formRef = useRef(null);

    // Contact information
    const info = {
        email: 'contact@initeksolutions.com',
        number: '604-123-1234',
        location: '123 Fake Street, Vancouver, BC',
    };

    // Handle form submission
    const submitForm = () => {
        const data = Object.fromEntries(new FormData(formRef.current));
        // Submit data here
        console.log(data);
    };

    // Helper function to create form items
    const FormItem = ({ label, id, isTextarea = false }) => (
        <div className="form-item">
            <label htmlFor={id}>{label}</label>
            {isTextarea ? <textarea id={id} name={id} /> : <input type="text" id={id} name={id} />}
        </div>
    );

    // Helper function to create contact info items
    const InfoItem = ({ title, content, icon }) => (
        <div className='contact-item'>
            <div className="contact-header">
                <img src={icon} alt={`${title} icon`} />
                <div className="contact-divider" />
                <span>{title}</span>
            </div>
            {content}
        </div>
    );

    return (
        <section id="contact-us">
            <div id="contact-container">
                <h5>/ Contact Us /</h5>
                <h3>Book an appointment with us today</h3>
                <p>If you have any questions, feel free to email or give us a call.</p>

                <form ref={formRef} id="contact-form">
                    <FormItem label="Full Name" id="name" />
                    <FormItem label="Phone" id="phone_number" />
                    <FormItem label="Company Name" id="company_name" />
                    <FormItem label="Email Address" id="email" />
                    <FormItem label="Additional Notes" id="notes" isTextarea />
                </form>

                <button onClick={submitForm}>Submit</button>
            </div>

            <div id="info-container">
                <InfoItem
                    title="Email us"
                    content={<a href={`mailto:${info.email}`}>{info.email}</a>}
                    icon={emailIco}
                />
                <InfoItem
                    title="Call us"
                    content={<a href={`tel:${info.number}`}>{info.number}</a>}
                    icon={phoneIco}
                />
                <InfoItem
                    title="Find us"
                    content={<address>{info.location}</address>}
                    icon={mapsIco}
                />
            </div>
        </section>
    );
}
