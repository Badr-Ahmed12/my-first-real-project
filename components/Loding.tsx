export default function Loading() {
    return (
        <div className="preloader z-30 fixed top-0 left-0 visible opacity-100 bg-black w-full h-full text-center transition-all ease-out duration-500">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex space-x-4 font-outfit font-normal uppercase text-white">
                {'LOADING'.split('').map((char, index) => (
                    <span
                        key={index}
                        className={`opacity-100 inline-block transition ease-linear duration-100 animate-loader animation-delay-${index * 100}`}
                    >
                        {char}
                    </span>
                ))}
            </div>
        </div>
    );
}
