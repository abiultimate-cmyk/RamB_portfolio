import { useState, useEffect, useRef } from 'react';

const useTitleAnimation = (title) => {
    const [letterColors, setLetterColors] = useState(Array(title.length).fill('#FFFFFF'));
    const blue = '#0000FF';
    const white = '#FFFFFF';
    const currentIndexRef = useRef(0);
    const intervalRef = useRef(null);
    const timeoutRef = useRef(null);

    useEffect(() => {
        const startAnimation = () => {
            // Reset all colors to white first
            setLetterColors(Array(title.length).fill('#FFFFFF'));
            currentIndexRef.current = -1;

            intervalRef.current = setInterval(() => {
                setLetterColors(currentColors => {
                    const newColors = [...currentColors];
                    newColors[currentIndexRef.current] = blue;
                    return newColors;
                });

                currentIndexRef.current++;

                if (currentIndexRef.current >= title.length) {
                    clearInterval(intervalRef.current);
                    timeoutRef.current = setTimeout(startAnimation, 10000);
                }
            }, 2000);

            // Faster: 200ms instead of 2000ms
        };

        startAnimation();

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, [title, blue]);

    return letterColors;
};

export default useTitleAnimation;
