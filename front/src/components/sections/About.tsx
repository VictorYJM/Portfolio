import profilePhoto from "../../assets/images/me.jpg"

const About = () => {
    return (
        <section id="about" className="py-20 background-change">
            <div className="container mx-auto px-4">

                {/* Title */}
                <h2 className="text-4xl font-bold text-center mb-12 text-change font-pixelate">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-tertiary-sub to-tertiary-main">
                        About me
                    </span>
                </h2>

                <div className="flex flex-col md:flex-row items-center justify-center gap-12">
                    {/* Image column */}
                    <div className="w-64 h-64 md:w-80 md:h-80 relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-tertiary-main to-tertiary-sub rounded-full blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <img
                            src={profilePhoto}
                            alt="Victor Yuji Mimura"
                            className="relative w-full h-full object-cover rounded-full border-4 border-background-white dark:border-background-black"
                        />
                    </div>

                    {/* Text column */}
                    <div className="md:w-1/2 text-center md:text-left">
                        <p className="text-lg text-change mb-6 leading-relaxed font-pixelate">
                            Hi! I am a student in the final semester of the Technical Programming course at the Colégio Técnico de Campinas - UNICAMP. I am organized, focused, and constantly developing both technically and personally.
                        </p>

                        <p className="text-lg text-change mb-8 leading-relaxed font-pixelate">
                            I believe in the potential of technology to positively contribute to areas such as security, accessibility, education, and healthcare.
                        </p>

                        <p className="text-lg text-change mb-8 leading-relaxed font-pixelate">
                            I am seeking opportunities in the IT field, aiming to apply the knowledge I have gained in a professional environment, learn from experienced professionals, and contribute responsibly to projects and teams. I am interested in software development with a focus on creating well-structured, easy-to-understand solutions that have a positive social impact on society as a whole.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default About;