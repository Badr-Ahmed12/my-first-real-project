import { skills, socialLinks, stats } from "../data";


const classNames = {
	sectionTitle: "font-outfit font-medium tracking-wider uppercase text-sm text-white mb-2",
	skillItem: "list-none inline-block relative pl-[14px] pr-[4px] before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[5px] before:h-[5px] before:rounded-md before:bg-white/80",
	socialIcon: "inline-block group w-[44px] h-[44px] rounded-full bg-white/15 text-white relative z-[1] overflow-hidden before:content-[''] before:absolute before:-z-[1] before:left-0 before:top-0 before:w-full before:h-full before:bg-themeGradient before:opacity-0 hover:before:opacity-20 before:transition-all before:ease-linear before:duration-100",
	socialIconMain: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all ease-out duration-200 group-hover:top-0 group-hover:invisible group-hover:opacity-0",
	socialIconHover: "absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all ease-out duration-200 invisible opacity-0 group-hover:top-1/2 group-hover:visible group-hover:opacity-100",
	statValue: "text-4xl lg:text-5xl xl:text-6xl font-outfit font-light text-white",
  };
  

export default function About() {
  return (
    <div className="lg:flex space-y-8 lg:space-y-0">
      {/* صورة البروفايل */}
      <div className="w-full lg:w-1/3 lg:order-2 text-center">
        <img
          className="inline-block w-[240px] h-[240px] md:w-[270px] md:h-[270px] xl:w-[320px] xl:h-[320px] rounded-full"
          src="assets/images/hero-avatar.jpg"
          alt="Profile Avatar"
        />
      </div>

      {/* القسم الأول */}
      <div className="w-full lg:w-1/3 lg:order-1 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-6 lg:gap-8">
        {/* السيرة الذاتية */}
        <div>
          <h6 className={classNames.sectionTitle}>Biography</h6>
          <p className="text-white/70 leading-[1.75]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* المهارات */}
        <div>
          <h6 className={classNames.sectionTitle}>Skills</h6>
          <ul className="text-white/70">
            {skills.map((skill, index) => (
              <li key={index} className={classNames.skillItem}>
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* روابط التواصل */}
        <div>
          <h6 className={classNames.sectionTitle}>Connect</h6>
          <ul className="space-x-1">
            {socialLinks.map((link, index) => (
              <li key={index} className="list-none inline-block">
                <a className={classNames.socialIcon} href={link.url}>
                  <i className={`bi ${link.icon} ${classNames.socialIconMain}`}></i>
                  <i className={`bi ${link.icon} ${classNames.socialIconHover}`}></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* الإحصائيات */}
      <div className="w-full lg:w-1/3 order-3 grid grid-cols-3 lg:grid-cols-1 gap-6 lg:gap-7 lg:text-right">
        {stats.map((stat, index) => (
          <div key={index}>
            <h6 className={classNames.sectionTitle}>{stat.label}</h6>
            <span className={classNames.statValue}>{stat.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

