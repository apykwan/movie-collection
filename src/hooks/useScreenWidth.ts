import { useState, useEffect } from 'react';

export const useScreenWidth = () => {
    const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', () => {
            setScreenWidth(window.innerWidth);
        });

        return () => window.removeEventListener('resize', () => {
            setScreenWidth(window.innerWidth);
        });
    }, [screenWidth]);

    return [screenWidth];
};