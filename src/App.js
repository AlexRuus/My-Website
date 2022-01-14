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
      <FirstPage />
      <ProjectsPage />
      <SkillsPage />
      <Footer />
    </div>
  );
}

export default App;
