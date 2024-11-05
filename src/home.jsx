import './home.css';
import { useLayoutEffect, useState } from 'react';
import canvas from './assets/home_canvas.jpg';





export default function Home() {
    const [p1t, setp1t] = useState({opacity: 1, left: 0});
	const [p1i, setp1i] = useState({marginTop: 0});

    useLayoutEffect(() => {
		const handleCanvasScroll = e => {
            const position = window.scrollY/window.innerHeight;
    
            const opacity = 1-position*2;
            const marginTop = window.scrollY * -0.3;
        
            setp1i(p1i => ({...p1i, marginTop}));
            // setp1t(p1t => ({...p1t, opacity}));
		}

		document.addEventListener('scroll', handleCanvasScroll);

		return () => {
			document.removeEventListener('scroll', handleCanvasScroll);
		}
	}, []);

    return (
        <section id='home'>
            <div className='section-container' >
                <div id='canvas-container'>
                    <div className='canvas-gradient top'/>
                    <div className='canvas-gradient bottom'/>
                    <div className='canvas-gradient left'/>
                    <img src={canvas} style={p1i} alt="canvas image"/>
                </div>

                <div id='home-text-container' style={p1t}>
                    <h1 id='title-logo'>INITEK SOLUTIONS</h1>
                    <p id='title-p'>Providing a wide range of voice, data, and networking solutions for businesses of all sizes, aiming to deliver cost-effective and efficient options to meet your communication and networking needs.</p>
                    <button
                        onClick={() => document.getElementById('contact-us-anchor')?.scrollIntoView({behavior: 'smooth'})}
                    >
                        Book a consultation
                    </button>
                </div>
            </div>
        </section>
    )
}