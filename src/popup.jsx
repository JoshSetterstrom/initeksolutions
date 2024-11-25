import { useEffect, useRef } from 'react';
import './popup.css';

export default function Popup({close, message}) {
    const ref = useRef(null);

    const unMount = () => {
        if (!ref.current) return;

        ref.current.style.top = '-80px';

        setTimeout(() => close(), 300);
    }

    useEffect(() => {
        if (!ref.current) return;

        setTimeout(() => ref.current.style.top = '40px', 100);

        setTimeout(() => unMount(), 5000);
    }, []);

    return (
        <div id='popup' ref={ref}>
            <span className="popup-content">{message}</span>
            <span className='close' onClick={unMount}>
                <svg 
                    className="close-ico"
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 64 64" 
                >
                    <path d="M8.06 8.06l47.35 47.88M55.94 8.06L8.59 55.94"/>
                </svg>
            </span>
        </div>
    );
};