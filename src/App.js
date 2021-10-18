import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Review from "./components/Reviews";
import Contact from "./components/Contact";

function App() {
  return (
    <main className=" bg-gray-300 body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Contact />

    </main>
  );
}

export default App;
