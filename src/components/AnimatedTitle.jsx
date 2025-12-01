import React from 'react';
import useTitleAnimation from '../hooks/useTitleAnimation';

const AnimatedTitle = () => {
    const title = "Ramkumar Balakrishnan";
    const letterColors = useTitleAnimation(title);

    return (
        <h1>
            {title.split('').map((letter, index) => (
                <span key={index} style={{ color: letterColors[index] }}>
                    {letter}
                </span>
            ))}
        </h1>
    );
};

export default AnimatedTitle;
