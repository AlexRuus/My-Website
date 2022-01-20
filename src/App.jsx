import './App.css';
import FirstPage from './components/FirstPageContent/FirstPage';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ProjectsPage from './components/ProjectsPage/ProjectsPage';
import SkillsPage from './components/SkillsPage/SkillsPage';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({duration:2000});


function App() {
  return (
    <div className="App">
      <Header />
      <section className='home-page' id='home-page'>
        <Home />
      </section>
      <section className="first-page" id="first-page">
        <FirstPage />
      </section>
      <section className="projects-page" id="projects">
        <ProjectsPage />
      </section>
      <section className="skills-page" id="skills">
        <SkillsPage />
      </section>
      <section className="footer-page" id="footer">
        <Footer />
      </section>
    </div>
  );
}

export default App;
