import React from 'react';
import '../styles/About.css';
import FadeInSection from './FadeInSection';

export default function About() {
  const one = (
    <p>
      Après avoir suivi la formation de{' '}
      <b>
        <a href="https://openclassrooms.com/fr/paths/899-developpeur-web">Développeur Web</a>
      </b>{' '}
      chez <b>OpenClassrooms</b>, je me spécialise désormais dans le{' '}
      <b>développement d'applications React</b> à travers leur formation{' '}
      <b>
        <a href="https://openclassrooms.com/fr/paths/877-developpeur-dapplication-javascript-react#overview">
          Développeur React
        </a>
      </b>
      .
    </p>
  );

  const two = (
    <p>
      J’aime profiter de mon temps libre pour explorer des styles musicaux variés, bouquiner et
      m’initier à la photographie argentique.
    </p>
  );

  const tech_stack = ['HTML/CSS', 'Javascript ES6+', 'React.js', 'SASS', 'Node.js', 'MongoDB'];

  return (
    <div id="about">
      <FadeInSection>
        <div className="section-header">
          <span className="section-title">/ about me</span>
        </div>

        <div className="about-content">
          <div className="about-description">
            {one}

            <p>Voici quelques technologies avec lesquelles j’ai travaillé:</p>

            <ul className="tech-stack">
              {tech_stack.map((tech, i) => (
                <FadeInSection key={tech} delay={`${i + 1}00ms`}>
                  <li>{tech}</li>
                </FadeInSection>
              ))}
            </ul>

            {two}
          </div>

          <div className="about-image">
            <img alt="Colored Sekai" src="./assets/me.jpg" />
          </div>
        </div>
      </FadeInSection>
    </div>
  );
}
