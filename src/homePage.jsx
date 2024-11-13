import { useEffect, useRef } from 'react';
import './homePage.css';

export default function HomePage() {
    const ref = useRef(null);

    const handlePageChange = () => {
        const home = document.getElementById('home');

        home.scrollIntoView({behavior: 'smooth'});
    }

    // Remove button opacity when user scrolls
    useEffect(() => {
        let timeout = null;

        const handleOpacity = () => {
            clearTimeout(timeout);

            if (window.scrollY <= 0) return ref.current.style.opacity = 0;

            ref.current.style.opacity = 0;

            timeout = setTimeout(() => ref.current.style.opacity = 1, 200);
        }

        handleOpacity();

        setTimeout(() => clearTimeout(timeout), 1000);

        window.addEventListener('scroll', handleOpacity);

        return () => {
            window.removeEventListener('scroll', handleOpacity);
            clearTimeout(timeout);
        };
    }, []);

    return <div ref={ref} className='next-page' onClick={handlePageChange}/>;
};