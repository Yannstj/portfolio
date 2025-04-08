import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import useMediaQuery from '@mui/material/useMediaQuery';
import React, { useState } from 'react';
import FadeInSection from './FadeInSection';

const TabPanel = ({ children, value, index, ...other }) => {
  return (
    <div role="tabpanel" hidden={value !== index} id={`vertical-tabpanel`} {...other}>
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
};

const JobList = () => {
  const [value, setValue] = useState(0);
  const isHorizontal = useMediaQuery('(max-width:600px)');

  const experienceItems = {
    'Image&': {
      jobTitle: 'Alternance @',
      duration: '2022 - 2023',
      desc: [
        "Développement d'une application de formulaire de préconsultation médicale.",
        "Développement d'une application mobile visant à sécuriser les sorties nocturnes des étudiants (projet scolaire).",
      ],
    },
    Domeos: {
      jobTitle: 'Stage @',
      duration: 'MAI 2020',
      desc: ['Développement d’un site vitrine avec WordPress pour une agence.'],
    },
    'Aloa informatique': {
      jobTitle: 'Stage @',
      duration: 'JUIN 2019',
      desc: [
        "Refactorisation d'une application Angular visant à référencer l'état des panneaux de signalisation à travers une carte.",
        'Gestion de versions avec Git.',
      ],
    },
  };

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundColor: 'var(--main-beige)',
        display: 'flex',
        flexDirection: isHorizontal ? 'column' : 'row',
        width: '100%',
        height: isHorizontal ? 'auto' : 300,
      }}
    >
      <Tabs
        orientation="vertical"
        variant={isHorizontal ? 'fullWidth' : 'scrollable'}
        value={value}
        onChange={handleChange}
        sx={{
          borderRight: 1,
          borderColor: 'var(--forest-green)',
          width: isHorizontal ? '100%' : '180px',
          minWidth: isHorizontal ? '100%' : '180px',
          flexShrink: 0,
        }}
      >
        {Object.keys(experienceItems).map((key, i) => (
          <Tab
            key={key}
            label={key}
            id={`tab-${i}`}
            aria-controls={`tabpanel-${i}`}
            sx={{
              alignItems: 'flex-start',
              textTransform: 'none',
              fontSize: '16px',
              fontFamily: 'Quicksand, sans-serif',
              color: 'var(--forest-night)',
              '&.Mui-selected': {
                color: 'var(--green-bright)',
              },
              '&:focus': {
                outline: 'none',
                color: 'var(--pine-green)',
              },
              '.MuiTab-wrapper': {
                justifyContent: 'flex-start',
                flexDirection: 'row',
                width: '100%',
                textAlign: 'left',
                alignItems: 'flex-start !important',
              },
            }}
          />
        ))}
      </Tabs>
      {Object.keys(experienceItems).map((key, i) => (
        <TabPanel key={key} value={value} index={i}>
          <span className="joblist-job-title">{experienceItems[key].jobTitle} </span>
          <span className="joblist-job-company">{key}</span>
          <div className="joblist-duration">{experienceItems[key].duration}</div>
          <ul className="job-description">
            {experienceItems[key].desc.map((descItem, j) => (
              <FadeInSection delay={`${j + 1}00ms`} key={j}>
                <li>{descItem}</li>
              </FadeInSection>
            ))}
          </ul>
        </TabPanel>
      ))}
    </Box>
  );
};

export default JobList;
