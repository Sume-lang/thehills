import { useState, useEffect } from 'react';

const useClickOutside = (ref: React.RefObject<HTMLElement>, handler: (event: Event) => void) => {
    const [isOutside, setIsOutside] = useState(false);

    const handleClickOutside = (event: Event) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
            setIsOutside(true);
            handler(event);
        } else {
            setIsOutside(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('touchstart', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('touchstart', handleClickOutside);
        };
    }, [ref, handler]);

    return isOutside;
};

export default useClickOutside;
