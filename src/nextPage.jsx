import { useEffect, useRef } from 'react';
import './nextPage.css';

export default function NextPage({sections}) {
    const ref = useRef(null);

    const handlePageChange = (scroll=true) => {
        const nextPage = getNextPage();
        const nextIndex = sections.findIndex(x => x === nextPage.id);

        scroll && nextPage.scrollIntoView({behavior: 'smooth'});

        console.log(nextIndex, sections.length - 1)

        ref.current.style.transform = nextIndex === sections.length - 1 ? 'rotate(180deg)' : 'none';
    }

    const getNextPage = () => {
        const anchors = sections.map(section => document.getElementById(section));

        const nextPage = anchors.find(anchor => {
            const posY = anchor?.getBoundingClientRect().y;

            return posY > 0 && posY <= window.innerHeight;
        });

        return nextPage || anchors[0];
    }

    // Remove button opacity when user scrolls
    useEffect(() => {
        let timeout = null;

        const handleOpacity = () => {
            clearTimeout(timeout);

            ref.current.style.opacity = 0;

            timeout = setTimeout(() => ref.current.style.opacity = 1, 200);
        }

        window.addEventListener('scroll', handleOpacity);
        
        handlePageChange(false);

        return () => {
            window.removeEventListener('scroll', handleOpacity);
            clearTimeout(timeout);
        };
    }, []);

    return <div ref={ref} className='next-page' onClick={handlePageChange}/>;
};