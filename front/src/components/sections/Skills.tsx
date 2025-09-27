import { useState, useRef, useEffect } from "react";
import { skillsData } from "../../data/skillsData";
import SkillBadge from "../common/SkillBadge";

const Skills = () => {
  const [activeTab, setActiveTab] = useState(skillsData[0].title);
  const activeCategory = skillsData.find((category) => category.title === activeTab);
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const buttonsContainerRef = useRef<HTMLDivElement | null>(null);
  const [glowStyle, setGlowStyle] = useState({});
  const [underlineStyle, setUnderlineStyle] = useState({});

  useEffect(() => {
    const activeTabIndex = skillsData.findIndex((category) => category.title === activeTab);
    const activeButton = tabsRef.current[activeTabIndex];

    if (activeButton) {
      setGlowStyle({
        left: activeButton.offsetLeft,
        width: activeButton.offsetWidth,
      });
    }

    const container = buttonsContainerRef.current;
    if (container) { setUnderlineStyle({ width: container.offsetWidth, }); }
  }, [activeTab]);

  return (
    <section id="skills" className="py-20 background-change">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center mb-12 text-change font-pixelate">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-quaternary-sub to-quaternary-main">
            {" "}Skills
          </span>
        </h2>

        <div className="relative mb-10 flex justify-center">
          <div className="inline-block">
            {/* Categories */}
            <div ref={buttonsContainerRef} className="flex justify-center flex-wrap gap-4 text-change">
              {skillsData.map((category, index) => (
                <button
                  key={category.title}
                  ref={(el) => { tabsRef.current[index] = el; }}
                  onClick={() => setActiveTab(category.title)}
                  className={`tab-button ${activeTab === category.title ? "tab-button-active" : ""
                    }`}
                >
                  {category.title}
                </button>
              ))}
            </div>

            {/* Bar */}
            <div className="tab-underline mt-1" style={underlineStyle}></div>

            {/* Glow */}
            <div className="tab-glow" style={glowStyle}></div>
          </div>
        </div>

        {/* Badges */}
        <div className="max-w-4xl min-h-[150px] mx-auto flex flex-wrap justify-center items-center gap-4">
          {activeCategory && activeCategory.skills.map((skill) => (
            <SkillBadge
              key={skill.name}
              name={skill.name}
              icon={skill.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;