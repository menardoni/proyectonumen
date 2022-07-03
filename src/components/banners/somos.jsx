import React from 'react'
import { somosContainer, columna, SomosContainerDiv } from '../style'
import '../styleComponent.css'

const Somos = () => {
  return ( 
    <div className={somosContainer}>
        <div className={SomosContainerDiv}>
            <p>
            Somos una tienda de tecnología especializada en el armado e instalación de PC. Nos dedicamos además a la venta de insumos informáticos y de celulares, ¡ofreciendo una amplia variedad de marcas y gamas!
            Ya sean artículos de las primeras marcas u opciones alternativas, ¡te aseguramos que tenemos el producto indicado para vos!
            </p>
        </div>
        <div className={columna}>
        </div>
        <div className={SomosContainerDiv}>
            <p>
            Te ofrecemos una cálida atención personalizada para que el armado e instalación de PC sea a tu medida, y te asesoramos para que encuentres los insumos informáticos que estás necesitando.
            ¡No dejes de visitar nuestra tienda online!
            Para más información sobre nuestro servicio de armado e instalación de PC, ¡contactanos!
            </p>
        </div>
    </div>
  )
}

export default Somos