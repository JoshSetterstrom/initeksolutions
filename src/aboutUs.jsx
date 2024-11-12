import { useState } from 'react';
import './aboutUs.css';
import img2 from './assets/stockphoto4.jpg';

export default function AboutUs() {
    const [imgPos, setImgPos] = useState({marginTop: -5, marginLeft: -5});

    const handleImgMouseMove = e => {
        // setImgPos(imgPos => ({
        //     marginLeft: e.movementX/1000 + imgPos.marginLeft,
        //     marginTop: e.movementY/1000 + imgPos.marginTop,
        // }))
    }

    return (
        <section id='about-us'>
            <div className='background'/>
            <div className="section-container">
                <img src={img2} className='about-us-img' onMouseMove={handleImgMouseMove}/>

                <div id='about-us-text-container'>
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