import React from 'react'
import { desContainer, titleContainer, productContainer } from '../style'
const Destacados = ({children}) => {
  return (
    <>
    <div className={desContainer}>
        <div className={titleContainer}>
            <h1>productos destacados</h1>
        </div>
        <div className={productContainer}>
            {children}
          <h1>POR EL MOMENTO NO HAY PRODUCTOS PARA MOSTRAR </h1>
          


        </div>
    </div>
    </>
  )
}

export default Destacados