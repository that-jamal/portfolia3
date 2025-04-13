import { useEffect, useRef, useState } from "react";

const projects = [
    "https://that-jamal.github.io/lotto-2.0/",
    "https://that-jamal.github.io/bingo-lap/",
    "https://that-jamal.github.io/frog-of-the-clicker/",
    "https://that-jamal.github.io/fighting-game/",
    "https://gambling-exe.vercel.app/",
    "https://that-jamal.github.io/hallon_clicker/",
    "https://that-jamal.github.io/jesus-go-wee-vo/",
    "https://that-jamal.github.io/mini-reknarn/",
    "https://that-jamal.github.io/c-chat/",
];

export default function FeaturedProjects() {
    const containerRef = useRef(null);
    const itemRefs = useRef([]);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const container = containerRef.current;
        let animationFrame;
        const speed = 0.3;

        const animate = () => {
            if (!isHovered) {
                itemRefs.current.forEach((item) => {
                    if (!item) return;
                    const left = parseFloat(item.style.left) || 0;
                    item.style.left = `${left - speed}px`;

                    const itemRect = item.getBoundingClientRect();
                    const containerRect = container.getBoundingClientRect();

                    if (itemRect.right < containerRect.left) {
                        const rightmost = Math.max(
                            ...itemRefs.current.map((el) => parseFloat(el.style.left) || 0)
                        );
                        item.style.left = `${rightmost + item.offsetWidth + 20}px`;
                    }
                });
            }
            animationFrame = requestAnimationFrame(animate);
        };

        animate();

        return () => cancelAnimationFrame(animationFrame);
    }, [isHovered]);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    return (
        <div
            ref={containerRef}
            className="relative w-full h-[320px] overflow-hidden border-y-2"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {projects.map((url, i) => (
                <div
                    key={i}
                    ref={(el) => (itemRefs.current[i] = el)}
                    className="absolute top-1/2 -translate-y-1/2 w-[480px] h-[320px] mx-2 overflow-hidden border-4 border-white shadow-lg bg-white"
                    style={{
                        left: `${i * 500}px`,
                    }}
                >
                    {/* Overlay clickable link */}
                    <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0 z-10"
                    ></a>

                    {/* Project preview */}
                    <iframe
                        src={url}
                        title={`project-${i}`}
                        className="w-full h-full border-none"
                        style={{
                            transform: "scale(0.625)",
                            transformOrigin: "top left",
                            width: "160%",
                            height: "160%",
                            pointerEvents: "none", // Prevent interaction with iframe
                        }}
                    />
                </div>
            ))}
        </div>
    );
}
