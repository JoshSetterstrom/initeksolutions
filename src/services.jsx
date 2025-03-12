import { useEffect, useRef, useState } from 'react';
import './services.css';

export default function Services({ imgs }) {
    const cardRefs = useRef([]);
    const [cardStates, setCardStates] = useState([false, false, false]);

    const [img1, img2, img3, img4, img5, img6] = imgs;

    useEffect(() => {
        // Flag to prevent multiple triggers
        let triggered = false;

        const handleAnimations = () => {
            const anchor = document.getElementById('our-services');
            if (!anchor || triggered) return;

            // Check if the section is in view
            const rect = anchor.getBoundingClientRect();

            if (rect.top <= window.innerHeight * 0.9) {
                triggered = true;
                // Animate cards into view
                cardRefs.current.forEach((ref) => {
                    if (ref) {
                        ref.style.transform = 'translate3d(0, 0, 0)';
                        ref.style.opacity = '1';
                    }
                });
                window.removeEventListener('scroll', handleAnimations);
            }
        };

        window.addEventListener('scroll', handleAnimations);
        handleAnimations();

        return () => window.removeEventListener('scroll', handleAnimations);
    }, []);

    // SVG arrow icon component
    const RightArrow = (
        <svg
            className="right-arrow"
            viewBox="0 0 64 64"
            strokeWidth="5"
            fill="none"
            stroke="#CACBD2"
        >
            <path d="M55.78 32.63H10.33M38.55 14.63l17.23 18.16-17.23 16.53" />
        </svg>
    );

    const LeftArrow = (
        <svg
            className="right-arrow"
            viewBox="0 0 64 64"
            strokeWidth="5"
            fill="none"
            stroke="#CACBD2"
            style={{transform: 'rotate(180deg)'}}
        >
            <path d="M55.78 32.63H10.33M38.55 14.63l17.23 18.16-17.23 16.53" />
        </svg>
    );

    // Service cards data
    const data = [
        {
            img: img1,
            title: 'Business Phone Systems',
            summary: 'We specialize in troubleshooting, programming, and installing state-of-the-art phone systems, tailored to meet the unique needs of your business.',
            details: (
                <>
                    <ul>
                        <li>Nortel BCM</li>
                        <li>Nortel Norstar</li>
                        <li>Meridian Option 11c</li>
                        <li>Nortel Call Pilot</li>
                        <li>Avaya IP Office</li>
                        <li>VoIP phone sets</li>
                        <li>Desk phones, cordless, conference phones and headsets</li>
                    </ul>
                    <p style={{marginTop: 24}}>
                        If you require assistance in choosing the best phone system
                        to support your business,{' '}
                        <span
                            className='services-anchor'
                            onClick={() => document.getElementById('contact-us').scrollIntoView({ behavior: 'smooth' })}
                        >
                            contact us
                        </span>{' '}
                        at your earliest convenience.
                    </p>
                </>
            ),
        },
        {
            img: img2,
            title: 'Cable/Fiber Installation',
            summary: 'We provide meticulous installation, repair, and testing of copper and fiber-optic cabling for businesses of all sizes.',
            details: (
                <ul>
                    <li>
                        Voice/Data runs: cat5e, cat6, cat6a or any voice/data
                        cabling (FT6 or FT4 rated, plenum, indoor, or outdoor) as
                        per regulations
                    </li>
                    <li>
                        Fiber, small to large scale installation (multimode 50/125,
                        62.5/125, single mode, SC, LC, ST connectors, indoor or
                        outdoor)
                    </li>
                    <li>Coaxial cabling (rg6, rg59)</li>
                </ul>
            ),
        },
        {
            img: img3,
            title: 'Network & Testing',
            summary: "Our expert team offers end-to-end solutions, from network design and configuration to rigorous testing protocols that ensure reliability.",
            details: (
                <>
                    <ul>
                        <li>Wireless solutions (routers, access points, modems)</li>
                        <li>Patch panels and switches</li>
                        <li>Extend and terminate network services</li>
                        <li>Network racks</li>
                        <li>Testing for latency and multi-pair connectivity</li>
                        <li>Providing and installing UPS (Uninterrupted Power Supply)</li>
                    </ul>
                    <p style={{marginTop: 24}}>
                        Ready to optimize your network?{' '}
                        <span
                            className='services-anchor'
                            onClick={() => document.getElementById('contact-us').scrollIntoView({ behavior: 'smooth' })}
                        >
                            Contact
                        </span>{' '}
                        our team today to discuss your needs and schedule a consultation. We’re here to ensure your network operates at its best!
                    </p>
                </>
            ),
        },
        {
            img: img4,
            title: 'NVR IP Camera Security Systems',
            summary: 'We install advanced NVR IP Camera Systems to enhance your security setup. Our approach is tailored to your unique needs, ensuring a smooth and personalized experience.',
            details: (
                <ul>
                    <li>High-Resolution Video</li>
                    <li>Real-Time Remote Access</li>
                    <li>Smart Motion Detection</li>
                    <li>Network racks</li>
                    <li>Seamless Network Integration</li>
                    <li>Expert Installation & Support</li>
                </ul>
            ),
        },
        {
            img: img5,
            title: 'Retail Motorola CLS 2-Way Radio Repair & Replacement',
            summary: "We offer specialized repair and replacement services for your Motorola CLS 2-Way Radios, ensuring your team stays connected no matter what.",
            details: (
                <>
                    <ul>
                        <li>Expert Repairs</li>
                        <li>Quality Replacement Parts</li>
                        <li>Fast Turnaround</li>
                        <li>Cost-Effective Solutions</li>
                        <li>Testing for latency and multi-pair connectivity</li>
                        <li>Comprehensive Support</li>
                    </ul>
                    <p style={{marginTop: 24}}>
                        Trust us to keep your communication systems running smoothly.{' '}
                        <span
                            className='services-anchor'
                            onClick={() => document.getElementById('contact-us').scrollIntoView({ behavior: 'smooth' })}
                        >
                            Contact us
                        </span>{' '}
                        today to learn more or schedule a service!
                    </p>
                </>
            ),
        },
        {
            img: img6,
            title: 'Business Paging & Music Systems',
            summary: "We provide reliable Business Paging and Music Systems from brands like Algo and Bogen. Our service is designed to provide seamless, high-quality audio experiences that keep your business connected and engaged.",
            details: (
                <ul>
                    <li>Customized paging and background music systems</li>
                    <li>Reliable paging for announcements and emergencies</li>
                    <li>Easily incorporated into your current setup for hassle-free operation</li>
                    <li>Expert Installation & Support</li>
                </ul>
            ),
        },
    ];

    // Handle card click animations
    const handleCardClick = index => {
        const card = cardRefs.current[index].children[1].children[0];
        
        card.style.transition = 'none';
        card.style.width = 0;

        setCardStates(prevCardStates => {
            const newCardStates = [...prevCardStates];
    
            newCardStates[index] = !newCardStates[index];

            return newCardStates;
        });

        setTimeout(() => {
            card.style.transition = 'width 0.3s';
            card.style.width = '120px';
        }, 300);
    };

    // Render service cards
    const renderCards = data.map((card, index) => (
        <div
            key={index}
            className={`services-card${!!cardStates[index] ? " expand" : ""}`}
            style={{transform: `translate3d(0, ${index%2 === 0 ? '-24' : '24'}px, 0)`}}
            ref={el => cardRefs.current[index] = el}
            onClick={() => handleCardClick(index)}
        >
            <div className="services-card-content-container">
                <div className="services-card-img-container">
                    <img src={card.img} alt={card.title} height={399}/>
                    <div className="services-card-img-overlay" />
                </div>
                <div className="services-card-content">
                    <h4>{card.title}</h4>
                    <p>{card.summary}</p>
                    <div className="services-card-details">{card.details}</div>
                </div>
            </div>
            <div className="services-cta">
                {!!cardStates[index] ? <span>Collapse {LeftArrow}</span> : <span>Read More {RightArrow}</span>}
            </div>
        </div>
    ));

    return (
        <section id="our-services">
            <h5>/ Our Services /</h5>
            <div className="cards-container">{renderCards}</div>
        </section>
    );
}
