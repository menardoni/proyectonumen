import ContactForm from '../components/forms/contactForm'
import Contact from '../components/banners/contact'
import { pages } from '../components/style'
const Contacto = () => {
  return (
    <>
    <div className={pages}>
      <Contact>
      <ContactForm/>
      </Contact>      
    </div>
    </>
  )
}

export default Contacto