import React from 'react'
import image from '../../assets/images/mantenimiento.jpg'
import { divMant, imgMant } from '../style'

const Mantenimiento = () => {
  return (
    <>
    <div className={divMant}>
        <img className={imgMant} src={image} alt="nada que hacer por aquí" />
    </div>
    </>
  )
}

export default Mantenimiento