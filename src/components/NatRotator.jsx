import React, { useEffect, useRef, useState } from 'react';

export default function NatRotator({ items = [], intervalVd = 28000, intervalImg = 8000 }) {
    const [index, setIndex] = useState(0);
    const [transitioning, setTransitioning] = useState(false);
    const timerRef = useRef(null);
    const transitionRef = useRef(null);
    const currentVideoRef = useRef(null);

    const current = items[index];
    const nextIndex = (index + 1) % items.length;
    const next = items[nextIndex];
    const interval = current?.type === "video" ? intervalVd : intervalImg;

    useEffect(() => {
        if (!items.length) return;
        clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => {
            setTransitioning(true);
            if (currentVideoRef.current) {
                currentVideoRef.current.pause();
            }
            transitionRef.current = setTimeout(() => {
                setIndex(nextIndex);
                setTransitioning(false);
            }, 1000); // Transition duration
        }, interval);
        return () => {
            clearTimeout(timerRef.current);
            clearTimeout(transitionRef.current);
        };
    }, [index, items, intervalVd, intervalImg, nextIndex]);

    useEffect(() => {
        if (currentVideoRef.current && !transitioning) {
            currentVideoRef.current.play().catch(() => {}); // Play current video when not transitioning
        }
    }, [index, transitioning]);

    if (!current) return null;

    const renderItem = (item, isCurrent) => {
        const className = `nat-item ${isCurrent ? (transitioning ? 'fading-out' : 'active') : (transitioning ? 'fading-in' : 'next')}`;
        if (item.type === 'video') {
            return (
                <video
                    key={item.src + (isCurrent ? index : nextIndex)}
                    className={className}
                    src={item.src}
                    ref={isCurrent ? currentVideoRef : null}
                    muted
                    playsInline
                    controls
                    onEnded={() => setIndex((i) => (i + 1) % items.length)}
                    onError={(e) => console.error('Video load error:', e)}
                />
            );
        } else {
            return (
                <img
                    key={item.src + (isCurrent ? index : nextIndex)}
                    className={className}
                    src={item.src}
                    alt=""
                />
            );
        }
    };

    return (
        <div className="nat-rotator" aria-hidden={false}>
            {renderItem(current, true)}
            {transitioning && next && renderItem(next, false)}
        </div>
    );
}
