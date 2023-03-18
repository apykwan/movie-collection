import { useState, useEffect } from 'react';

export const useScreenWidth = () => {
    const [screenWidth, setScreenWidth] = useState<Number>(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', () => {
            setScreenWidth(window.innerWidth);
        });
    }, [screenWidth]);

    return [screenWidth];
};