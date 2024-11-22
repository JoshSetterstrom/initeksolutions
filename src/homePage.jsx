import { useEffect, useRef } from 'react';
import './homePage.css';

export default function HomePage() {
    const ref = useRef(null);

    // Remove button opacity when user scrolls
    useEffect(() => {
        let timeout = null;

        const handleOpacity = () => {
            clearTimeout(timeout);

            if (window.scrollY <= 0) return ref.current.style.opacity = 0;

            ref.current.style.opacity = 0;
            ref.current.style.pointerEvents = 'all';

            timeout = setTimeout(() => ref.current.style.opacity = 1, 400);
        }

        handleOpacity();

        setTimeout(() => clearTimeout(timeout), 1000);

        window.addEventListener('scroll', handleOpacity);

        return () => {
            window.removeEventListener('scroll', handleOpacity);
            clearTimeout(timeout);
        };
    }, []);

    return (
        <div ref={ref} className='back-home' onClick={() => window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}>
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 64 64" 
                strokeWidth="3" 
                stroke="#fff" 
                fill="none" 
                style={{width: 34, height: 34, marginTop: -5}}
            >
                <path d="M51.61 25.21L33.2 11.4a2 2 0 00-2.4 0L12.39 25.21a2 2 0 00-.8 1.6v26.64a2 2 0 002 2H25a2 2 0 002-2V45a2 2 0 012-2h7a2 2 0 012 2v8.45a2 2 0 002 2h10.41a2 2 0 002-2V26.81a2 2 0 00-.8-1.6z"/>
            </svg>
        </div>
    )

    // return <div ref={ref} className='next-page' onClick={handlePageChange}/>;
};