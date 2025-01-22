import React, { useEffect } from 'react';
import gsap from 'gsap';
import StarSVG from './Animations/starsSVG';

const BackgroundComp = () => {
    useEffect(() => {
        const tl = gsap.timeline({ repeat: -1 });
        gsap.utils.toArray("circle").forEach((circle, index) => {
            tl.fromTo(
                circle,
                { y: 900 }, // Start position
                {
                    y: -900, // End position
                    duration: 3 + index, // Staggered duration for each circle
                },
                index * 0.2 
            );
        });
    }, []);

    return (
        <div className="bg-[#0a0908] w-full h-full absolute top-0 left-0 overflow-hidden">
            <StarSVG className="w-full h-full" />
        </div>
    );
}

export default BackgroundComp;
