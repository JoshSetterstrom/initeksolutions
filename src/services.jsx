import { useEffect, useRef } from 'react';
import './services.css';

export default function Services({imgs}) {
    const focusRef = useRef([]);

    const [img1, img2, img3] = [...imgs];

    useEffect(() => {
        let triggered = false;

        const handleAnimations = () => {
            console.log('here')

            const anchor = document.getElementById('our-services');

            if (triggered) return document.removeEventListener('scroll', handleAnimations);

            if (window.innerHeight - anchor.getBoundingClientRect().y > window.innerHeight / 10) {
                triggered = true;

                
                focusRef.current.forEach(ref => {
                    ref.style.top = 0;
                    ref.style.opacity = 1;
                })

                document.removeEventListener('scroll', handleAnimations);
            };
        };

        document.addEventListener('scroll', handleAnimations);

        return () => document.removeEventListener('scroll', handleAnimations);
    }, []);

    const rightArrow = (
        <svg className='right-arrow' viewBox="0 0 64 64" strokeWidth="5" fill="none" stroke="#CACBD2">
            <path d="M55.78 32.63H10.33M38.55 14.63l17.23 18.16-17.23 16.53"/>
        </svg>
    );

    const cards = [
        {
            img: img1,
            title: <h4>Business Phone Systems</h4>,
            content: [
                (<p>Initek Solutions specializes in troubleshooting, programming, and installing state-of-the-art phone systems, tailored to meet the unique needs of your business.</p>),
                (
                    <>
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
                    </>
                )
            ]
        },
        {
            img: img2,
            title: <h4>Cable/Fiber Installation</h4>,
            content: [
                (<p>Initek Solutions provides meticulous installation, repair, and testing of copper and fiber-optic cabling for businesses of all sizes.</p>),
                (
                    <ul>
                        <li>Voice/ Data runs: cat5e, cat6, cat6a or any voice/data cabling (FT6 or FT4 rated, plenum, indoor, or outdoor) as per regulations.</li>
                        <li>Fiber, small to large scale installation (multimode 50/125, 62.5/125, single mode, SC, LC, ST connectors, indoor or outdoor).</li>
                        <li>Coaxial cabling (rg6, rg59).</li>
                    </ul>
                )
            ]
        },
        {
            img: img3,
            title: <h4>Network & testing</h4>,
            content: [
                (<p>Our expert team offers end-to-end solutions, from network design and configuration to rigorous testing protocols that ensure reliability.</p>),
                (
                    <ul>
                        <li>Wireless solutions (routers, access points, modems)</li>
                        <li>Patch panels and Switches</li>
                        <li>Extend and terminate network services</li>
                        <li>Network Racks</li>
                        <li>Testing for latency and multi-pair connectivity</li>
                        <li>Providing and installing UPS (Uninterrupted Power Supply)</li>
                    </ul>
                )
            ]
        },
        // null
    ];

    const renderCards = cards.map((card, i) => {
        if (!card) return <div className='services-card' style={{height: 0}}/>;

        return (
            <div 
                className='services-card' 
                style={{top: i%2 ? 24 : -24}} 
                ref={ref => focusRef.current[i] = ref}
                onClick={() => expandCard(i)}
            >
                <div className='services-card-content-container'>
                    <div className='services-card-img-container'>
                        <img src={card.img}/>
                        <div className='services-card-img-overlay'/>
                    </div>

                    <div className='services-card-content'>
                        {card.title}
                        {card.content[0]}
                    </div>
                </div>
                <div className='services-cta'>
                    <div style={{display: 'flex'}}>See More {rightArrow}</div>
                </div>
            </div>
        );
    });

    const expandCard = i => {
        const ref = focusRef.current[i];

        ref.classList.toggle('expand');
    }

    return (
        <section id='our-services'>
            <div style={{marginBottom: 20}}>/ Our Services /</div>
            <div className='cards-container'>
                {renderCards}
            </div>
        </section>
    )
}