import { Toaster } from 'react-hot-toast';
import SnowEffect from './layout/SnowEffect';
import Animate from './layout/Animate';
import NavBar from './components/NavBar';
import About from './pages/About';
import Skills from './pages/Skills';
import Education from './pages/Education';
import Certi from './pages/Certi';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import Project from './pages/Project';

function App() {

  return (
    <>
      <SnowEffect />
      <NavBar />
      <Animate>
        <Toaster position="bottom-center" reverseOrder={false} />
        <div id="about" data-aos="fade-up">
          <About />
        </div>
        <div id="skill" data-aos="fade-right">
          <Skills />
        </div>
        <div>
          < Project />
        </div>
        <div id="education" data-aos="fade-up">
          <Education />
        </div>
        <div id="certi" data-aos="fade-up">
          <Certi />
        </div>
        <div id="contact" data-aos="fade-right">
          <Contact />
        </div>
        <div id="footer" data-aos="fade-up">
          <Footer />
        </div>
      </Animate>
    </>
  );
}

export default App;
