// import './header.css';
// import { useEffect, useRef, useState } from 'react';


// export default function Header({img}) {
//     const [render, setRender] = useState(null);
//     const [expanded, setExpanded] = useState(false);
//     const headerRef = useRef(null);

//     const sections = ['home', 'about-us', 'our-services', 'contact-us'];

//     const anchors = sections.map(section => (
//         <a
//             key={`a-${section}`}
//             target='_blank'
//             onClick={() => {document.getElementById(section)?.scrollIntoView({behavior: 'smooth', block: 'center'})}}
//         >
//             {section.replace('-', ' ').toUpperCase()}
//         </a>
//     ));

//     const hamIcon = (
//         <div className='ham-ico-container' onClick={() => setExpanded(expanded => !expanded)}>
//             <div className='ham-ico'/>
//             <div className='ham-ico'/>
//             <div className='ham-ico'/>
//         </div>
//     );

//     const sidebar = (
//         <aside className='sidemenu' style={{left: expanded ? "calc(100% - 200px)" : '100%', width: expanded ? '200px' : '0'}}>
//             <div className='sidemenu-item' style={{height: '8rem'}}>
//                 <div className='sidemenu-close-container' onClick={() => setExpanded(expanded => !expanded)}>
//                     <div className='sidemenu-close'/>
//                 </div>
//             </div>
//             {sections.map(section => (
//                 <div 
//                     key={`sa-${section}`} 
//                     className='sidemenu-item'
//                     onClick={() => {
//                         document.getElementById(section)?.scrollIntoView({behavior: 'smooth', block: 'center'});
//                         setExpanded(false)
//                     }}
//                 >
//                     {section.replace('-', ' ')}
//                 </div>
//             ))}
//         </aside>
//     )

//     const renderDOM = () => {
//         return setRender(
//             <header ref={headerRef}>
//                 <div className='header-img-container'>
//                     <img src={img} alt="logo"/>
//                 </div>
//                 <nav>{window.screen.width < 1000 || window.innerWidth < 1000 ? hamIcon : anchors}</nav>
//                 {(window.screen.width < 1000 || window.innerWidth < 1000) && sidebar}
//             </header>
//         );
//     };

//     useEffect(() => {
//         renderDOM();

//         window.addEventListener('resize', renderDOM);

//         return () => window.removeEventListener('resize', renderDOM);
//     }, [expanded]);

//     return render;
// };



import './header.css';
import { useEffect, useState } from 'react';

export default function Header({ img }) {
    const [isMobile, setIsMobile] = useState(false);
    const [expanded, setExpanded] = useState(false);

    const sections = ['home', 'about-us', 'our-services', 'contact-us'];

    // Update isMobile state based on window width
    useEffect(() => {
        const handleResize = () => {
            window && setIsMobile(window.innerWidth < 1000);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleScroll = section => {
        document.getElementById(section).scrollIntoView({ behavior: 'smooth', block: isMobile ? 'start' : 'center' });
        setExpanded(false);
    }

    // Navigation links for desktop view
    const anchors = sections.map(section => (
        <a
            key={`a-${section}`}
            onClick={() => handleScroll(section)}
        >
            {section.replace('-', ' ').toUpperCase()}
        </a>
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
            {sections.map(section => (
                <div
                    key={`sa-${section}`}
                    className="sidemenu-item"
                    onClick={() => handleScroll(section)}
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

            <nav>{isMobile ? hamIcon : anchors}</nav>

            {isMobile && sidebar}
        </header>
    );
}
