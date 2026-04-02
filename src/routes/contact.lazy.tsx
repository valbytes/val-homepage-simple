import { createLazyFileRoute } from '@tanstack/react-router'
import ContactForm from '../assets/pageSections/Contact/Contact'

export const Route = createLazyFileRoute('/contact')({
  component: Contact,
})

function Contact() {
  return (
    <section className="contact">
      <div id="contact-anchor"></div>
      <h2>Contact</h2>
      <p>Want to get in touch? Send me a message! I'll get back to you when I can!</p>
      <ContactForm />
    </section>
  )
}
