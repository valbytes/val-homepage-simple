import './App.css'
import Header from './assets/pageSections/Header/Header.tsx';
import './assets/style/style.css';

function App() {

  return (

    <div>
      <Header />
      <main>
        <section className="hero">Hero</section>
        <section className="services">Services</section>
        <section className="contact">Contact</section>
        <section className="about">About</section>
      </main>
      <footer>
        <div className="footer-content">Footer</div>
      </footer>

    </div >

  )
}

export default App
