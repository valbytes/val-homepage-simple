import { createLazyFileRoute } from '@tanstack/react-router'
import Hero from '../assets/pageSections/Hero/Hero'
import Portfolio from '../assets/pageSections/Portfolio/Portfolio'
import About from '../assets/pageSections/About/About'

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <>
      <section className="hero"><Hero /></section>
      <section className="portfolio">
        <div id="portfolio-anchor"></div>
        <h2>Portfolio</h2>
        <Portfolio />
      </section>
      <section className="about">
        <div id="about-anchor"></div>
        <h2>About</h2>
        <About />
      </section>
    </>
  )
}
