import './header.css';
import { useLayoutEffect, useState } from 'react';

export default function Header({ img }) {
    const [isMobile, setIsMobile] = useState(false);
    const [expanded, setExpanded] = useState(false);

    const sections = ['home', 'about-us', 'our-services', 'contact-us'];
    const anchors = ['home', 'about-us-text-container', 'our-services', 'contact-us']

    // Update isMobile state based on window width
    useLayoutEffect(() => {
        const handleResize = () => {
            window && setIsMobile(window.innerWidth < 1000);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleScroll = section => {
        if (section === 'home') {
            window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
        } else {
            document.getElementById(section).scrollIntoView({ behavior: 'smooth', block: isMobile ? 'start' : 'center' });
        }

        setExpanded(false);
    }

    // Navigation links for desktop view
    const sectionElements = sections.map((section, i) => (
        <div
            className='nav-item'
            key={`a-${section}`}
            onClick={() => handleScroll(anchors[i])}
        >
            {section.replace('-', ' ').toUpperCase()}
        </div>
    ));

    // Hamburger icon for mobile view
    const hamIcon = (
        <div
            className="ham-ico-container"
            onClick={() => setExpanded(!expanded)}
        >
            <div className="ham-ico" />
            <div className="ham-ico" />
            <div className="ham-ico" />
        </div>
    );

    // Sidebar menu for mobile view
    const sidebar = (
        <aside
            className="sidemenu"
            style={{
                left: expanded ? 'calc(100% - 200px)' : '100%',
                width: expanded ? '200px' : '0',
            }}
        >
            <div className="sidemenu-item" style={{ height: '8rem' }}>
                <div
                    className="sidemenu-close-container"
                    onClick={() => setExpanded(false)}
                >
                    <div className="sidemenu-close" />
                </div>
            </div>
            {sections.map((section, i) => (
                <div
                    key={`sa-${section}`}
                    className="sidemenu-item"
                    onClick={() => handleScroll(anchors[i])}
                    aria-label={section}
                >
                    {section.replace('-', ' ')}
                </div>
            ))}
        </aside>
    );

    return (
        <header>
            <div className="header-img-container">
                <img src={img} alt="logo" />
            </div>

            <nav>{isMobile ? hamIcon : sectionElements}</nav>

            {isMobile && sidebar}
        </header>
    );
}
