import './header.css';
import logo from './assets/initek2.png';
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

    const hamIcon = (
        <div className='ham-ico-container' onClick={() => setExpanded(expanded => !expanded)}>
            <div className='ham-ico'/>
            <div className='ham-ico'/>
            <div className='ham-ico'/>
        </div>
    );

    const sidebar = (
        <aside className='sidemenu' style={{left: expanded ? "calc(100% - 200px)" : '100%', width: expanded ? '200px' : '0'}}>
            <div className='sidemenu-item' style={{height: '8rem'}}>
                <div className='sidemenu-close-container' onClick={() => setExpanded(expanded => !expanded)}>
                    <div className='sidemenu-close'/>
                </div>
            </div>
            <div className='sidemenu-item'>Home</div>
            <div className='sidemenu-item'>About Us</div>
            <div className='sidemenu-item'>Our Services</div>
            <div className='sidemenu-item'>Contact Us</div>
        </aside>
    )

    const renderDOM = () => {
        return setRender(
            <header>
                <div className='img-container'>
                    <img src={logo} alt="logo"/>
                </div>
                <nav>{window.screen.width < 1000 || window.innerWidth < 1000 ? hamIcon : anchors}</nav>
                {(window.screen.width < 1000 || window.innerWidth < 1000) && sidebar}
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