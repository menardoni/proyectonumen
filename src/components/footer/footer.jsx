import React from 'react'
import Social from './social'
import '../styleComponent.css'
import Logo from '../navbar/logo'
import { footer, footContact } from '../style'


const Footer = () => {
  return (
    <div className={footer}>
        <Social/>
        <div className={footContact}>
            <p>E-mail - ventas@nardosys.com.ar</p>
            <p>Belgrano 1181 - Arroyo Seco </p>
            <p>WhatApp +5493402449646</p>
        </div>
        <Logo/>
    </div>
  )
}

export default Footer