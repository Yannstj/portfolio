import BorderColorIcon from '@mui/icons-material/BorderColor';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/Navbar.css';

export default function NavBar() {
  return (
    <Navbar fixed="top" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#">Yannick Saint-Just</Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        <Nav className="me-auto">
          <Nav.Link href="#intro">Home</Nav.Link>
          <Nav.Link href="#about">À propos</Nav.Link>
          <Nav.Link href="#experience">Expérience</Nav.Link>
          <Nav.Link href="#projects">Projets</Nav.Link>
        </Nav>
        <Nav className="">
          <Nav.Link href="mailto:yannick.saintjust@gmail.com" target="_blank">
            <EmailRoundedIcon style={{ fontSize: 20 }} />
          </Nav.Link>
          <Nav.Link href="https://github.com/Yannstj" target="_blank">
            <GitHubIcon style={{ fontSize: 19 }} />
          </Nav.Link>
          <Nav.Link href="test" target="_blank">
            <LinkedInIcon style={{ fontSize: 21 }} />
          </Nav.Link>
          <Nav.Link href="test">
            <BorderColorIcon style={{ fontSize: 20 }} />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
