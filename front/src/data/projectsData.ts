import portfolioImage from "../assets/images/portfolio.png";
import nimImage from "../assets/images/nim.png";
import tsmpImage from "../assets/images/tsmp.png";
import paintImage from "../assets/images/paint.png";
import marsImage from "../assets/images/mars.png";

export interface Project {
    title: string;
    description: string;
    image: string;
    tags: string[];
    repoUrl: string;
}

export const projectsData: Project[] = [
    {
        title: "Portfolio",
        description: "Portfolio for showcasing skills, projects, and contact information.",
        image: portfolioImage,
        tags: ["React", "TypeScript", "Vite", "Tailwind CSS"],
        repoUrl: "https://github.com/VictorYJM/Portfolio",
    },
    {
        title: "Nim Game AI",
        description: "An artificial intelligence implemented using the Minimax algorithm with Alpha-Beta pruning optimization to play Nim (misère variant).",
        image: nimImage,
        tags: ["Python", "Minimax", "Alpha-beta Pruning"],
        repoUrl: "https://github.com/VictorYJM/Nim_Game_AI",
    },
    {
        title: "Traveling Salesman Problem",
        description: "A comparison system to calculate the optimal delivery route for a salesman using Simulated Annealing and BRKGA.",
        image: tsmpImage,
        tags: ["Python", "BRKGA", "Simulated Annealing"],
        repoUrl: "https://github.com/VictorYJM/Travelling_Salesman_Problem",
    },
    {
        title: "Simple Paint",
        description: "SimplePaint is a drawing application in C# that allows users to create and manipulate basic shapes.",
        image: paintImage,
        tags: ["C#", "Data Structure"],
        repoUrl: "https://github.com/VictorYJM/Simple_Paint",
    },
    {
        title: "Cities on Mars",
        description: "Paths on Mars is a desktop application written in C# that allows users to manage cities and their paths on a map.",
        image: marsImage,
        tags: ["C#", "Data Structure"],
        repoUrl: "https://github.com/VictorYJM/Cities_on_Mars",
    }
];