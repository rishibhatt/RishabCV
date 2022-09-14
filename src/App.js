import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Navbar from './components/NavBar/Navbar';
import Projects from './components/Projects/Projects';
import Study from './components/Study/Study';

function App() {

  return (
    
      <div className="App bg-white dark:bg-black">
        
        <Navbar />
        <Hero />
        <Study />
        <Experience />
        <Projects />
        <Footer />

      </div>
    

  );
}

export default App;
