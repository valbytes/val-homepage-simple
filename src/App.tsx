
// Page Section Components
import Header from './assets/pageSections/Header/Header.tsx';
import About from './assets/pageSections/About/About.tsx';
import Portfolio from './assets/pageSections/Portfolio/Portfolio.tsx';
import Contact from './assets/pageSections/Contact/Contact.tsx';
import Hero from './assets/pageSections/Hero/Hero.tsx';

// MUI Components
import Container from '@mui/material/Container';

import './assets/style/style.css';

function App() {

  return (

    <div>
      <title>Val.bytes</title>
      <Container>
        <Header />
        <main>
          <section className="hero"><Hero /></section>
          <section className="portfolio">
            <div id="portfolio-anchor"></div>
            <h2>Portfolio</h2>
            <Portfolio /></section>
          <section className="contact">
            <div id="contact-anchor"></div>
            <h2>Contact</h2>
            <Contact />
          </section>
          <section className="about">
            <div id="about-anchor"></div>
            <h2>About</h2>
            <About />
          </section>
        </main>
        <footer>
          <div className="footer-content">Footer</div>
        </footer>
      </Container>
    </div >

  )
}

export default App
