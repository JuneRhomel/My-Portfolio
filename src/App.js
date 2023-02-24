
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Project from "./components/Project"
import ListProject from './components/ListProject';
import Contact from "./components/Contact"
import Footer from './components/Footer';
import Sticky from './components/Sticky';
import Add from './components/Add';
import Allproject from './components/Allproject';
import Tools from './components/Tools';
import GithubContextApi from './Context/GithubContext';
import { useContext } from 'react';

function App() {

  const data = useContext(GithubContextApi);
  console.log(data)
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container about-skills">
        <About />
      </div>
      <Project />
      <Allproject/>
      <Tools/>
      <ListProject/>
      <Contact/>
      <Footer />
      <Sticky />
      <Add/>
    </div>
  );
}

export default App;
