import FolderOpenRoundedIcon from '@mui/icons-material/FolderOpenRounded';
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import '../styles/Projets.css';
import ExternalLinks from './ExternalLinks';
import FadeInSection from './FadeInSection';

const Projects = () => {
  const [activeKey, setActiveKey] = useState(0);

  const spotlightProjects = {
    'Portfolio Sophie Bluel': {
      title: 'portfolio sophie bluel',
      desc: "Conception d'un portfolio dynamique pour une architecte d'intérieur, avec un compte administrateur.",
      techStack: 'JAVASCRIPT',
      link: 'https://github.com/Yannstj/portfolio-architect-sophie-bluel',
      open: 'https://sophie-bluel-architect.vercel.app/',
      image: './assets/sophie_bluel.png',
    },
    Kasa: {
      title: 'kasa website',
      desc: 'Application web de consultation de logements mis en location.',
      techStack: 'REACT.JS',
      link: 'https://github.com/Yannstj/kasa-website',
      open: 'https://yannstj.github.io/kasa-website/',
      image: './assets/kasa.png',
    },
    'Mon Vieux Grimoire': {
      title: 'mon vieux grimoire',
      desc: 'Back-end d’un site de partage et d’archivage d’avis pour les lecteurs.',
      techStack: 'NODE.JS (EXPRESS.JS), MONGODB',
      link: 'https://github.com/Yannstj/mvg-backend',
      open: 'https://mon-vieux-grimoire-livres.vercel.app/',
      image: './assets/api_livres.png',
    },
    Optimisation: {
      title: 'Optimisation',
      desc: 'Refactorisation et optimisation des performances d’un portfolio, dans le but d’améliorer le SEO.',
      techStack: 'JAVASCRIPT',
      link: 'https://github.com/Yannstj/Nina-Carducci-Dev',
      open: 'https://github.com/Yannstj/Nina-Carducci-Dev',
      image: './assets/seo_projet.png',
    },
  };

  const projects = {
    'Maquette Booki hébergements': {
      desc: "Création d'une page d'accueil responsive pour une agence de voyage.",
      techStack: 'HTML / CSS',
      link: 'https://github.com/Yannstj/booki-starter-code',
      open: 'https://yannstj.github.io/booki-starter-code/',
    },
    'Site de location Kasa': {
      desc: 'Implémentation de l’interface front-end d’une application stylisée avec SASS et navigation assurée par React Router.',
      techStack: 'React.js, SASS',
      link: 'https://github.com/Yannstj/kasa-website',
      open: 'https://yannstj.github.io/kasa-website/',
    },
    'Mon vieux grimoire': {
      desc: 'Mise en place d’une API REST connectant un serveur à une base de données MongoDB, avec authentification sécurisée et implémentation des opérations CRUD.',
      techStack: 'Node.js (Express.js), MongoDB',
      link: 'https://github.com/Yannstj/mvg-backend',
    },
    "Goin'out": {
      desc: 'Création d’une application mobile avec géolocalisation.',
      techStack: 'React Native, Firebase',
      link: 'https://github.com/Yannstj/goinout',
      open: '',
    },
    'Vue course': {
      desc: 'Playground de test des fonctionnalités et de la syntaxe du framework Vue.',
      techStack: 'Vue.js',
      link: 'https://github.com/Yannstj/VueCourse',
      open: '',
    },
    Portfolio: {
      desc: 'Développement du portfolio avec le bundler Vite et un framework CSS.',
      techStack: 'React.js, Bootstrap',
      link: 'https://github.com/Yannstj/portfolio',
      open: '',
    },
  };

  return (
    <div id="projects">
      <div className="section-header">
        <span className="section-title">/ projets</span>
      </div>

      <Carousel activeIndex={activeKey} onSelect={selectedIndex => setActiveKey(selectedIndex)}>
        {Object.keys(spotlightProjects).map(key => (
          <Carousel.Item key={key}>
            <img className="d-block w-100" src={spotlightProjects[key].image} alt={key} />
            <div className="caption-bg">
              <Carousel.Caption>
                <h3>{spotlightProjects[key].title}</h3>
                <>
                  <p>{spotlightProjects[key].desc}</p>
                  <p className="techStack">{spotlightProjects[key].techStack}</p>
                </>
                <ExternalLinks
                  githubLink={spotlightProjects[key].link}
                  openLink={spotlightProjects[key].open}
                />
              </Carousel.Caption>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      <div className="project-container">
        <ul className="projects-grid">
          {Object.keys(projects).map((key, i) => (
            <FadeInSection delay={`${i + 1}00ms`} key={key}>
              <li className="projects-card">
                <div className="card-header">
                  <div className="folder-icon">
                    <FolderOpenRoundedIcon style={{ fontSize: 35 }} />
                  </div>
                  <ExternalLinks githubLink={projects[key].link} openLink={projects[key].open} />
                </div>

                <div className="card-title">{key}</div>
                <div className="card-desc">{projects[key].desc}</div>
                <div className="card-tech">{projects[key].techStack}</div>
              </li>
            </FadeInSection>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Projects;
