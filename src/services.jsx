import { useRef } from 'react';
import './services.css';

export default function Services({imgs}) {
    const focusRef = useRef([]);

    const [img1, img2, img3] = [...imgs];

    const rightArrow = (
        <svg className='right-arrow' viewBox="0 0 64 64" strokeWidth="5" fill="none" stroke="#CACBD2">
            <path d="M55.78 32.63H10.33M38.55 14.63l17.23 18.16-17.23 16.53"/>
        </svg>
    );

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
            <div className='services-card' ref={ref => focusRef.current[0] = ref}>
                <div className='services-card-img-container'>
                    <img src={img1}/>
                </div>
                <div className='services-card-content'>

                    <h3>Business Phone Systems</h3>
                    <p>Initek Solutions specializes in troubleshooting, programming, and installing state-of-the-art phone systems, tailored to meet the unique needs of your business.</p>

                    {/* <p>Initek Solutions is diversified in troubleshooting, programming and installing any of the following systems, to include voicemail and mail systems.</p> */}
                    {/* <ul>
                        <li>Nortel BCM</li>
                        <li>Nortel Norstar</li>
                        <li>Meridian Option 11c</li>
                        <li>Nortel Call Pilot</li>
                        <li>Avaya IP Office</li>
                        <li>VoIP phone sets</li>
                        <li>Desk phones, cordless, conference phones and headsets</li>
                    </ul>
                    <p>If you require assistance in choosing the best phone system to support your business, <a style={{color: '#144283', cursor: 'pointer'}}>contact us</a> at your earliest convenience.</p> */}
                    <button>See More {rightArrow}</button>
                </div>
            </div>
            <div className='services-card' ref={ref => focusRef.current[1] = ref}>
                {/* <img src={img2}/> */}
                <div className='services-card-content'>

                    <h3>Cable/Fiber Installation</h3>
                    <p>Initek Solutions provides meticulous installation, repair, and testing of copper and fiber-optic cabling for businesses of all sizes.</p>
                    {/* <p>Initek Solutions provides installation, repair and testing of all the following:</p> */}
                    {/* <ul>
                        <li>Voice/ Data runs: cat5e, cat6, cat6a or any voice/data cabling (FT6 or FT4 rated, plenum, indoor, or outdoor) as per regulations.</li>
                        <li>Fiber, small to large scale installation (multimode 50/125, 62.5/125, single mode, SC, LC, ST connectors, indoor or outdoor).</li>
                        <li>Coaxial cabling (rg6, rg59).</li>
                    </ul> */}
                    <button>See More {rightArrow}</button>
                </div>
            </div>
            <div className='services-card' ref={ref => focusRef.current[2] = ref}>
                {/* <img src={img3}/> */}
                <div className='services-card-content'>
                    <h3>Networking & Testing</h3>
                    <p>Our expert team offers end-to-end solutions, from network design and configuration to rigorous testing protocols that ensure reliability..</p>
                    {/* <ul>
                        <li>Wireless solutions (routers, access points, modems)</li>
                        <li>Patch panels and Switches</li>
                        <li>Extend and terminate network services</li>
                        <li>Network Racks</li>
                        <li>Testing for latency and multi-pair connectivity</li>
                        <li>Providing and installing UPS (Uninterrupted Power Supply)</li>
                    </ul> */}
                    
                    <button>See More {rightArrow}</button>
                </div>
            </div>
        </>
    );

    return (
        <section id='our-services'>
            <div className='section-container'>
                {/* <div>/ Our Services /</div> */}
                {/* {window.screen.width < 1000 || window.innerWidth < 1000 ? cardsMobile : cardsDekstop} */}
            </div>
        </section>
    )
}