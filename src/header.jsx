import './header.css';
import logo from './assets/initek.png';
import { useEffect, useState } from 'react';


export default function Header() {
    const [render, setRender] = useState(null);
    const [expanded, setExpanded] = useState(false);

    const sections = ['home', 'about-us', 'our-services', 'contact-us'];

    const anchors = sections.map((anchor, i) => (
        <a
            key={`a-${anchor}`}
            target='_blank'
            onClick={() => {document.getElementById(anchor)?.scrollIntoView({behavior: 'smooth'})}}
        >
            {anchor.replace('-', ' ').toUpperCase()}
        </a>
    ));

    useEffect(() => {console.log(expanded)}, [expanded]);

    const hamIcon = (
        <>
            <div className='ham-ico-container' onClick={() => setExpanded(expanded => !expanded)}>
                <div className='ham-ico'/>
            </div>

            <div className='sidemenu' style={{right: expanded ? '0' : '-200px'}}>
                <div className='sidemenu-item' style={{height: '18vh'}}>
                    <div className='sidemenu-close-container' onClick={() => setExpanded(expanded => !expanded)}>
                        <div className='sidemenu-close'/>
                    </div>
                </div>

                <div className='sidemenu-item'>Home</div>
                <div className='sidemenu-item'>About Us</div>
                <div className='sidemenu-item'>Our Services</div>
                <div className='sidemenu-item'>Contact Us</div>
            </div>
        </>
    );

    const renderDOM = () => {
        console.log(window.screen.width, window.screen.width < 2000)

        return setRender(
            <header>
                <img src={logo} alt="logo"/>
                <nav>{window.screen.width < 1000 || window.innerWidth < 1000 ? hamIcon : anchors}</nav>
            </header>
        );
    };

    useEffect(() => {
        renderDOM();

        window.addEventListener('resize', renderDOM);

        return () => window.removeEventListener('resize', renderDOM);
    }, [expanded]);

    return render;
};