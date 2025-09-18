import Navbar from '@components/Navbar';
import Hero from '@components/Hero';
import About from '@components/About';
import Projects from '@components/Projects';
import Resume from '@components/Resume';
import Contact from '@components/Contact';
import Footer from '@components/Footer';
import './index.css';

import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </>
  );
}

export default App;