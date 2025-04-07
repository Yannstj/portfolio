import './App.css';
import About from './components/About';
import Credits from './components/Credits';
import Experience from './components/Experience';
import Intro from "./components/Intro";
import NavBar from "./components/NavBar";
import Projects from './components/Projets';
import "./styles/Colors.css";

function App() {


  return (
    <div className='App'>
 <NavBar />
      <div id='content'>
        <Intro />
        <About />
        <Experience />
        <Projects />
        <Credits />
      </div>
    </div>
  )
}

export default App
