
// Page Section Components
import Header from './assets/pageSections/Header/Header.tsx';
import About from './assets/pageSections/About/About.tsx';
import Portfolio from './assets/pageSections/Portfolio/Portfolio.tsx';

// MUI Components
import Container from '@mui/material/Container';

import './assets/style/style.css';

function App() {

  return (

    <div>
      <Container>
        <Header />
        <main>
          <section className="hero">Hero</section>
          <section className="portfolio"><Portfolio /></section>
          <section className="contact">Contact</section>
          <section className="about"><About /></section>
        </main>
        <footer>
          <div className="footer-content">Footer</div>
        </footer>
      </Container>
    </div >

  )
}

export default App
