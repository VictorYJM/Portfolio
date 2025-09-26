import { TypeAnimation } from "react-type-animation";

const Profile = () => {
    return(
        <section id="profile" className="min-h-screen flex items-center justify-center pt-20 background-change">
            <div className="text-center">
                {/* Title */}
                <h1 className="text-5xl md:text-6xl font-bold text-change font-pixelate">
                    Hi 👋, I am
                    <br className="md:hidden" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-activate to-secondary-hover dark:bg-gradient-to-r dark:from-primary-activate dark:to-primary-hover">
                        {" "}Victor Yuji Mimura
                    </span>
                </h1>

                {/* Subtitle */}
                <div className="mt-6 text-xl md:text-3xl font-bold text-change font-pixelate">
                    <TypeAnimation
                        sequence={[
                            "a disciplined and hard-working student",
                            2000,
                            "a Full Stack Developer",
                            2000,
                            "an AI Enthusiast",
                            2000
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                        cursor={true}
                    />
                </div>
            </div>
        </section>
    );
}

export default Profile;