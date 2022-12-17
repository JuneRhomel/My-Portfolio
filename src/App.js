
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Tools from './components/Tools';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
      <About />
      <Skills/>
      <Tools />
      </div>
    </div>
  );
}

export default App;
  