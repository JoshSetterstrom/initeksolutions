import { useState } from 'react';
import './aboutUs.css';
import img2 from './assets/stockphoto2.jpg';

export default function AboutUs() {
    const [imgPos, setImgPos] = useState({marginTop: -5, marginLeft: -5});

    const handleImgMouseMove = e => {
        setImgPos(imgPos => ({
            marginLeft: e.movementX/1000 + imgPos.marginLeft,
            marginTop: e.movementY/1000 + imgPos.marginTop,
        }))
    }

    return (
        <section id='about-us'>
            <div className="section-container">
                <div id="about-us-image-container">
                    <img src={img2} style={{marginTop: `${imgPos.marginTop}vh`, marginLeft: `${imgPos.marginLeft}vh`}} onMouseMove={handleImgMouseMove}/>
                </div>

                <div id='about-us-text-container'>
                    <h2>At Initek Solutions we provide innovative ideas to increase proficiency by catering to your business' operational demands</h2>
                    <p>
                        Our technicians are knowledgeable and experienced with installation and troubleshooting the industry's leading technology and products. 
                        Providing efficient and effective voice and data solutions to your organization is crucial in today's society.
                    </p>
                </div>
            </div>
        </section>
    );
};