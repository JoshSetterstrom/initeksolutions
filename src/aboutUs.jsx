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
            <div className='background'/>
            <div className="section-container">
                {/* <div id="about-us-image-container">
                    <div className='about-us-image-cell' style={{left: '20vw'}}/>
                    <div className='about-us-image-cell' style={{left: '30vw'}}/>
                    <div className='about-us-image-cell' style={{left: '40vw'}}/>
                    <img src={img2} style={{marginTop: `${imgPos.marginTop}vh`, marginLeft: `${imgPos.marginLeft}vh`}} onMouseMove={handleImgMouseMove}/>
                </div>

                <div id='about-us-text-container'>
                    <h1>Providing innovative ideas to increase proficiency</h1>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div> */}
            </div>
        </section>
    );
};