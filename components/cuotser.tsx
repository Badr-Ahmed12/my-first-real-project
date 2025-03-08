import useCursor from "../hooks/useCursor";

export default function Cuotser() {
    const cursorRef = useCursor();
    
    return (
        <div
            ref={cursorRef}
            id="cursor"
            className="hidden lg:inline-block z-10 absolute -translate-x-1/2 -translate-y-1/2 bg-white w-2.5 h-2.5 rounded-full mix-blend-difference pointer-events-none transition-transform duration-100 ease-linear"
        ></div>
    );
}
