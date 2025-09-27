import Navbar from "../components/common/Navbar"
import Profile from "../components/sections/Profile";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import Projects from "../components/sections/Projects";
import Footer from "../components/common/Footer";

function App() {
  return(
    <div className="background-change text-change transition-colors duration-300 flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Profile />
        <About />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App