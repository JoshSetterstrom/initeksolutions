import './home.css';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';


export default function Home({img}) {
    const [p1t, setp1t] = useState({opacity: 1, left: 0});
	const [p1i, setp1i] = useState({marginTop: 0});

    const textRef = useRef(null);
    const imgRef = useRef(null);


    useLayoutEffect(() => {
		const handleCanvasScroll = () => {    
            const marginTop = window.scrollY * -0.3;
        
            setp1i(p1i => ({...p1i, marginTop}));
		}

		document.addEventListener('scroll', handleCanvasScroll);

		return () => {
			document.removeEventListener('scroll', handleCanvasScroll);
		}
	}, []);

    useEffect(() => {
        setTimeout(() => {
            textRef.current.style.left = 0;
            textRef.current.style.opacity = 1;
            imgRef.current.style.opacity = 1;
        }, 200)
    }, [])

    return (
        <section id='home'>
            <div id='canvas-container'>
                <div className='canvas-gradient top'/>
                <div className='canvas-gradient bottom'/>
                <div className='canvas-gradient left'/>
                <div className='canvas-gradient right'/>
                <div className='canvas-gradient five'/>
                <img src={img} ref={imgRef} style={p1i} alt="canvas"/>
            </div>

            <div id='home-text-container' ref={textRef}>
                <h1>Your Network, <br/>Our Expertise</h1>
                <p>Providing a wide range of voice, data, and networking solutions for businesses of all sizes, aiming to deliver cost-effective and efficient options to meet your communication and networking needs.</p>
                <button
                    onClick={() => document.getElementById('contact-us-anchor')?.scrollIntoView({behavior: 'smooth'})}
                >
                    Book a consultation
                </button>
            </div>
        </section>
    )
}