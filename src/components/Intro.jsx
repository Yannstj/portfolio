import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import '../styles/Intro.css';
import FadeInSection from './FadeInSection';

export default function Intro() {
  const [text] = useTypewriter({
    words: ['Hi, Yannick here.'],
    typeSpeed: 120,
  });

  // Fonction pour colorer targetWord en temps réel et ajouter le curseur
  const formatText = text => {
    const targetWord = 'Yannick';
    let currentIndex = 0;

    return (
      <>
        {text.split('').map((char, index) => {
          if (currentIndex < targetWord.length && text[index] === targetWord[currentIndex]) {
            currentIndex++;
            return (
              <span key={index} style={{ color: 'var(--pine-green)', fontWeight: 'bold' }}>
                {char}
              </span>
            );
          }
          return <span key={index}>{char}</span>;
        })}
        <Cursor cursorColor="var(--pine-green)" />
      </>
    );
  };

  return (
    <div id="intro">
      <span className="intro-title">{formatText(text)}</span>
      <FadeInSection>
        <div className="intro-subtitle">Je crée, parfois.</div>
        <div className="intro-desc">
          Développeur junior, j’ai un grand intérêt pour le développement full-stack, l’intelligence
          artificielle, les interactions homme-machine, et tout ce qui se trouve entre les deux.
        </div>
        <a href="mailto:yannick.saintjust@gmail.com" className="intro-contact">
          <EmailRoundedIcon />
          {' Dire bonjour!'}
        </a>
      </FadeInSection>
    </div>
  );
}
