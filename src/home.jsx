import './home.css';
import { useEffect, useRef } from 'react';

export default function Home({ img }) {
    const textRef = useRef(null);
    const imgRef = useRef(null);

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
          if (!ticking) {
            window.requestAnimationFrame(() => {
              if (imgRef.current && window.scrollY <= 1000) {
                imgRef.current.style.transform = `translateY(${window.scrollY * -0.3}px)`;
              }
              ticking = false;
            });
            ticking = true;
          }
        };

        // Animate text and image on component mount
        const animateElements = () => {
            if (textRef.current && imgRef.current) {
                imgRef.current.classList.remove('loading');

                textRef.current.classList.remove('loading');
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
                <img src={img} className='loading' ref={imgRef} alt="canvas" />
            </div>

            <div id='home-text-container' className='loading' ref={textRef}>
                <h1>
                    Your Network, <br />
                    Our Expertise
                </h1>

                <p>
                    Providing a wide range of voice, data, and networking solutions for businesses of all sizes, 
                    aiming to deliver cost-effective and efficient options to meet your communication and networking needs.
                </p>

                <button onClick={handleScroll} aria-label='Book a Consultation'>
                    Book a consultation
                </button>
            </div>
        </section>
    );
};