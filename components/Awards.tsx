import { awardsData } from "../data";

const classNames = {
    sectionContainer: "container max-w-[1320px] mx-auto px-5 md:px-10 xl:px-5 pt-24 xl:pt-28",
    titleContainer: "w-full lg:w-1/3",
    titleText: "font-outfit font-medium text-4xl md:text-5xl lg:text-6xl text-white mt-2",
    highlightText: "bg-themeGradient bg-clip-text text-transparent",
    subtitle: "pl-[20px] relative font-outfit font-medium text-sm uppercase tracking-wider text-white/40 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[12px] before:h-[12px] before:rounded-full before:border-2 before:border-white/30",
    awardsGrid: "w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6",
    cardContainer: "z-[1] p-8 space-y-1.5 bg-darkBg rounded-lg relative overflow-hidden " +
        "before:content-[''] before:absolute before:-z-[1] before:left-0 before:top-0 " +
        "before:w-full before:h-full before:bg-themeGradient before:opacity-0 hover:before:opacity-10 " +
        "before:transition-all before:ease-linear before:duration-100 " +
        "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-themeGradient",
    cardTitle: "font-outfit font-medium text-white text-2xl",
    cardYear: "block font-outfit font-medium uppercase text-sm tracking-wider text-white/40",
    cardDescription: "text-white/70",
};

export default function Awards() {
    return (
        <div id="awards" className={classNames.sectionContainer}>
            <div className="w-full lg:flex space-y-6 lg:space-y-0">
                <div className={classNames.titleContainer}>
                    <h6 className={classNames.subtitle}>Achievements</h6>
                    <h2 className={classNames.titleText}>
                        Awa<span className={classNames.highlightText}>rds</span>
                    </h2>
                </div>
                <div className={classNames.awardsGrid}>
                    {awardsData.map((award, index) => (
                        <div key={index} className={classNames.cardContainer}>
                            <h4 className={classNames.cardTitle}>{award.title}</h4>
                            <span className={classNames.cardYear}>{award.year}</span>
                            <p className={classNames.cardDescription}>{award.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

