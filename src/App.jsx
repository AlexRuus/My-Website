import './App.css';
import FirstPage from './components/FirstPageContent/FirstPage';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ProjectsPage from './components/ProjectsPage/ProjectsPage';
import SkillsPage from './components/SkillsPage/SkillsPage';


function App() {
  return (
    <div className="App">
      <Header />
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
