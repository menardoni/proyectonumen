import React from 'react'
import { promoContainer,promoContainerH, promoContainerP } from '../style'

const Promociones = () => {
  return (
    <>
    <div className={promoContainer}>
        <h1 className={promoContainerH}>Promociones</h1>
        <p className={promoContainerP}>En esta sección vas a encontrar las mejores ofertas por tiempo limitado en productos informaticos.
            Descuentos en insumos de todas las marcas.  </p>
    </div>
    </>
  )
}

export default Promociones