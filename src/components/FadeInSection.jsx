import React, { useEffect, useRef, useState } from 'react';

export default function FadeInSection({ children, delay = '0s' }) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target); // On arrête d'observer après apparition
        }
      },
      { threshold: 0.1 } // Apparition lorsque 10% de l’élément est visible
    );

    if (domRef.current) {
      observer.observe(domRef.current);
    }

    return () => observer.disconnect(); // Nettoyage correct
  }, []);

  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      style={{ transitionDelay: delay }}
      ref={domRef}
    >
      {children}
    </div>
  );
}
