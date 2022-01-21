import './App.css';
import FirstPage from './components/FirstPageContent/FirstPage';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ProjectsPage from './components/ProjectsPage/ProjectsPage';
import SkillsPage from './components/SkillsPage/SkillsPage';
import Particles from "react-tsparticles";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({duration:2000});


function App() {

  const particlesInit = (main) => {

  };

  const particlesLoaded = (container) => {

  };
  return (
    <div className="App">
      <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {

        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.1,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 1600,
            },
            value: 60,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}
    />
      <Header />
      <section className='home-page' id='home-page' data-aos="fade-right">
        <Home />
      </section>
      <section className="first-page" id="first-page" data-aos="fade-right">
        <FirstPage />
      </section>
      <section className="projects-page" id="projects" data-aos="fade-right">
        <ProjectsPage />
      </section>
      <section className="skills-page" id="skills" data-aos="fade-right">
        <SkillsPage />
      </section>
      <section className="footer-page" id="footer" data-aos="fade-right">
        <Footer />
      </section>
    </div>
  );
}

export default App;
