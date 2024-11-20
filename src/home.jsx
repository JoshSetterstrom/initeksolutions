import './home.css';
import { useEffect, useRef } from 'react';

export default function Home({ img }) {
    const textRef = useRef(null);
    const imgRef = useRef(null);

    useEffect(() => {
        // Update image marginTop for parallax effect on scroll
        const handleScroll = () => {
            if (imgRef.current) {
                imgRef.current.style.marginTop = `${window.scrollY * -0.3}px`;
            }
        };

        // Animate text and image on component mount
        const animateElements = () => {
            if (textRef.current && imgRef.current) {
                setTimeout(() => {
                    imgRef.current.style.opacity = '1';
                }, 500);
                
                textRef.current.style.left = '0';
                textRef.current.style.opacity = '1';
            };
        };

        window.addEventListener('scroll', handleScroll);

        const timer = setTimeout(animateElements, 200);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(timer);
        };
    }, []);

    const handleScroll = () => {
        document.getElementById('contact-us')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id='home'>
            <div id='canvas-container'>
                <div className='canvas-gradient top' />
                <div className='canvas-gradient bottom' />
                <div className='canvas-gradient left' />
                <div className='canvas-gradient right' />
                <div className='canvas-gradient five' />
                <img src={img} ref={imgRef} alt="canvas" />
            </div>

            <div id='home-text-container' ref={textRef}>
                <h1>
                    Your Network, <br />
                    Our Expertise
                </h1>

                <p>
                    Providing a wide range of voice, data, and networking solutions for businesses of all sizes, 
                    aiming to deliver cost-effective and efficient options to meet your communication and networking needs.
                </p>

                <button onClick={handleScroll}>
                    Book a consultation
                </button>
            </div>
        </section>
    );
};