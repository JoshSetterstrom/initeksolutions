import { useRef } from 'react';
import './services.css';
import img1 from './assets/stockphoto3.jpg';


export default function Services() {
    const focusRef = useRef([]);

    const handleFocusChange = i => {
        focusRef.current.forEach(ref => {
            ref.classList.remove('expanded');

            // ref.children[0].style.opacity = 0;
        });
        
        focusRef.current[i].classList.add('expanded');

        setTimeout(() => {
            // focusRef.current[i].children[0].style.opacity = 1;
        }, 400)
    }

    const cardsMobile = (
        <>
            <div className='services-card' ref={ref => focusRef.current[0] = ref}>
                <div className='services-card-content'></div>
            </div>
            <div className='services-card' ref={ref => focusRef.current[1] = ref}>
                <div className='services-card-content'>
                    <h2>Cable/Fiber Installation</h2>
                    <p>Initek Solutions provides installation, repair and testing of all the following:</p>
                    <ul>
                        <li>Voice/ Data runs: cat5e, cat6, cat6a or any voice/data cabling (FT6 or FT4 rated, plenum, indoor, or outdoor) as per regulations.</li>
                        <li>Fiber, small to large scale installation (multimode 50/125, 62.5/125, single mode, SC, LC, ST connectors, indoor or outdoor).</li>
                        <li>Coaxial cabling (rg6, rg59).</li>
                    </ul>

                </div>
            </div>
            <div className='services-card' ref={ref => focusRef.current[2] = ref}>
                <div className='services-card-content'></div>
            </div>
        </>
    );

    const cardsDekstop = (
        <>
            <div className='services-card expanded' ref={ref => focusRef.current[0] = ref} onClick={() => handleFocusChange(0)}>
                <div className='radial-gradient'/>
                <img src={img1}/>
                <div className='services-card-content'>
                    <h2>Business Phone Systems</h2>
                    <p>Initek Solutions is diversified in troubleshooting, programming and installing any of the following systems, to include voicemail and mail systems.</p>
                    <ul>
                        <li>Nortel BCM</li>
                        <li>Nortel Norstar</li>
                        <li>Meridian Option 11c</li>
                        <li>Nortel Call Pilot</li>
                        <li>Avaya IP Office</li>
                        <li>VoIP phone sets</li>
                        <li>Desk phones, cordless, conference phones and headsets</li>
                    </ul>
                    <p>If you require assistance in choosing the best phone system to support your business, <a style={{color: '#144283', cursor: 'pointer'}}>contact us</a> at your earliest convenience.</p>
                </div>
            </div>
            <div className='services-card' ref={ref => focusRef.current[1] = ref} onClick={() => handleFocusChange(1)}>
                    <div className='services-card-content'>
                        <h2>Cable/Fiber Installation</h2>
                        <p>Initek Solutions provides installation, repair and testing of all the following:</p>
                        <ul>
                            <li>Voice/ Data runs: cat5e, cat6, cat6a or any voice/data cabling (FT6 or FT4 rated, plenum, indoor, or outdoor) as per regulations.</li>
                            <li>Fiber, small to large scale installation (multimode 50/125, 62.5/125, single mode, SC, LC, ST connectors, indoor or outdoor).</li>
                            <li>Coaxial cabling (rg6, rg59).</li>
                        </ul>
                    </div>
                </div>
            <div className='services-card' ref={ref => focusRef.current[2] = ref} onClick={() => handleFocusChange(2)}>
                <div className='services-card-content'>
                    <h2>Networking & Testing</h2>
                    <ul>
                        <li>Wireless solutions (routers, access points, modems)</li>
                        <li>Patch panels and Switches</li>
                        <li>Extend and terminate network services</li>
                        <li>Network Racks</li>
                        <li>Testing for latency and multi-pair connectivity</li>
                        <li>Providing and installing UPS (Uninterrupted Power Supply)</li>
                    </ul>
                </div>
            </div>
        </>
    );

    return (
        <section id='our-services'>
            <div className='section-container'>
                {window.screen.width < 1000 || window.innerWidth < 1000 ? cardsMobile : cardsDekstop}
            </div>
        </section>
    )
}