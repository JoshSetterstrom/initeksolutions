import { useEffect, useRef, useState } from 'react';
import './aboutUs.css';
import img2 from './assets/stockphoto4.jpg';

export default function AboutUs() {
    const imgRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        let triggered = false;

        const handleAnimations = () => {
            const anchor = document.getElementById('about-us');

            if (triggered) {
                document.removeEventListener('scroll', handleAnimations);
            }

            if (window.innerHeight - anchor.getBoundingClientRect().y > window.innerHeight / 2) {
                triggered = true;

                imgRef.current.style.height = '105vh';
                imgRef.current.style.opacity = 1;

                for (let i = 0; i < textRef.current.children.length; i++) {
                    const ele = textRef.current.children[i];

                    if (ele.tagName === 'UL') {
                        Array.from(ele.children).forEach((child, l) => {
                            setTimeout(() => child.style.opacity = 1, 500*(i+1) + 200*l);
                        });
                    } else {
                        setTimeout(() => {
                            ele.style.left = 0;
                            ele.style.opacity = 1;
                        }, 500*(i+1));
                    };
                };

                document.removeEventListener('scroll', handleAnimations);
            };
        };

        handleAnimations();

        document.addEventListener('scroll', handleAnimations);

        return () => document.removeEventListener('scroll', handleAnimations);
    }, [])

    return (
        <section id='about-us'>
            <div className='background'/>
            <div className="section-container">
                <div id='about-us-img-container' ref={imgRef}>
                    <img src={img2} />
                </div>

                <div id='about-us-text-container' ref={textRef}>
                    <div>/ About Us /</div>
                    <h2>Providing Innovative Ideas</h2>
                    <p>
                    At Initek Solutions, we pride ourselves on delivering innovative IT solutions tailored to meet the unique needs of our clients. We’re here to make sure your technology infrastructure is efficient, secure, and ready for the future. With our team’s commitment to excellent service, you can trust us to support your business at every step. <br/><br/>
                    Our technicians understand that providing quality and effective service and support are essential in keeping our valued customers. No matter what your business needs, we have the expertise to support a wide range of systems and services tailored just for you.</p>
                    <ul>
                        <li>✓ Providing Excellence</li>
                        <li>✓ Professional Communication</li>
                        <li>✓ Personalized Approach</li>
                        <li>✓ Reliable Service</li>
                        <li>✓ Quality Work</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};