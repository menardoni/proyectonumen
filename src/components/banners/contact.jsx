import React from 'react'
import { contactContainer,descContainer, cLine,headerContactH,headerContactH3,cFooterContact,contactImgContainer, image, formContainer, descContact} from '../style'

import fb from '../images/facebook.png'
import tw from '../images/gorjeo.png'
import inst from '../images/instagram.png'

const Contact = ({children}) => {
  return (
    <>
     <div className={contactContainer}>

         <div className={descContainer}>
          <div>
              <h1 className={headerContactH}>medios de contacto</h1>
              <h3 className={headerContactH3}>ventas de parte de PC e insumos.</h3>
          </div>
          <div className={cLine}></div>
          <div className={descContact}>
              <p>Ya sea que busques partes de PC, insumos, celulares de alta gama o celulares de gama media, ¡NARDOSYS INFORMÁTICA tiene lo que necesitás!
  Porque nuestra tienda de informática se encarga de escuchar tus necesidades y atenderlas personalmente.
  Así que, si estás buscando alguna parte de PC en particular o requerís de asesoramiento, ¡no dudes en contactarnos!
              </p>
              <div className={cFooterContact}>
              <p>Teléfono de contacto: 03402 449646</p>
                <div className={contactImgContainer}>
                  <a href="">
                    <img className={image} src={tw} alt="tw" />
                  </a>
                  <a href="">
                    <img className={image} src={inst} alt="instagram" />
                  </a>
                  <a href="">
                    <img className={image} src={fb} alt="facebook" />
                  </a>    

            
                </div>
              </div>
          </div>       
        </div>
        <div className={formContainer}>
              {children}
        </div>
  
     </div>
    </>
  )
}

export default Contact