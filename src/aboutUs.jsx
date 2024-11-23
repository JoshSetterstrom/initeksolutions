import { useEffect, useRef } from 'react';
import './aboutUs.css';

export default function AboutUs({img}) {
    const imgRef = useRef(null);
    const textRef = useRef(null);

    // Handle various animation affects on image and text
    useEffect(() => {
        let triggered = false;

        const handleAnimations = () => {
            const anchor = document.getElementById('about-us');

            if (triggered) {
                document.removeEventListener('scroll', handleAnimations);
            }

            if (window.innerHeight - anchor.getBoundingClientRect().y > window.innerHeight / 3) {
                triggered = true;

                setTimeout(() => {
                    imgRef.current.style.height = '100vh';
                    imgRef.current.style.opacity = 1;

                    setTimeout(() => imgRef.current.style.transition = 'none', 3000);
                }, 300);

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
    }, []);

    return (
        <section id='about-us'>
            <div className='background'/>

            <div id='about-us-img-container' ref={imgRef}>
                <img src={img} alt="about-us" />
            </div>

            <div id='about-us-text-container' ref={textRef}>
                <h5>/ About Us /</h5>
                <h2>Providing Innovative Ideas</h2>
                <p>
                    At Initek Solutions, we pride ourselves on delivering innovative IT solutions tailored to meet the unique needs of our clients. 
                    We’re here to make sure your technology infrastructure is efficient, secure, and ready for the future. 
                    With our team’s commitment to excellent service, you can trust us to support your business at every step. 
                    <br/><br/>
                    Our technicians understand that providing quality and effective service and support are essential in keeping our valued customers. 
                    No matter what your business needs, we have the expertise to support a wide range of systems and services tailored just for you.
                </p>
                <ul>
                    <li>Providing Excellence</li>
                    <li>Professional Communication</li>
                    <li>Personalized Approach</li>
                    <li>Reliable Service</li>
                    <li>Quality Work</li>
                </ul>
            </div>
        </section>
    );
};