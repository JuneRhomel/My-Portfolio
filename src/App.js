
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Tools from './components/Tools';
import Project from "./components/Project"
import ListProject from './components/ListProject';
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container about-skills">
        <About />
        <Skills />
        <Tools />
      </div>
      <Project />
      <ListProject />
    </div>
  );
}

export default App;
