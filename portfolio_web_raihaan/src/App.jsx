import About from './components/About';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Project from './components/Projects';
import Technologies from './components/Technologies';
import Chatbot from './components/Chatbot';

const App = () => {
  return (
    <div  className="overflow-x-hidden text-neutral-300 antialised relative min-h-screen">
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      <div className="container mx-auto px-8 pt-20">
        <Navbar />
        <Hero />
        <Chatbot />
        <About />
        <Experience />
        <Project />
        <Technologies />
      </div>
    </div>
  );
};

export default App;