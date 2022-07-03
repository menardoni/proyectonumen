import React, { useState } from 'react'
import {formLabel } from '../style'

const Log = () => {
  const [ registro, setRegistro] = useState(false)
  return (
    <div className='flex flex-col items-center h-screen'>
      <h1 className='text-4xl font-bold text-white uppercase'>acceso para clientes</h1>

    <div className='flex flex-col items-center'>
        <label className={formLabel}>E-mail/Usuario</label>
        <input type="email" name="email" id="" />
        <label className={formLabel}>Contraseña</label>
        <input type="password" name="pass" id="" />
    </div>
        <button className='self-center w-auto mt-2 btn-primary' type="submit">Iniciar sesión</button>
    <div className='flex flex-col p-1 m-2 text-center border-2 border-zinc-500 rounded-xl'>
      <h2 className='font-bold text-white uppercase text-l' >¿eres nuevo?</h2>
      <div className='font-bold cursor-pointer text-fuchsia-700' onClick={()=>setRegistro(true)} href="">¡Crea tu cuenta gratis!</div>
      {
        registro &&
        <div className='ovelay'>
          <div className='modalContainer'>
            <h2 className='text-2xl font-black text-center uppercase text-fuchsia-800'>algo malio sal, maldita internet</h2>
            <div onClick={()=>setRegistro(false)} className='fixed w-10 h-10 text-3xl uppercase rounded-full cursor-pointer top-10 right-20 bg-cyan-700'>X</div>
          </div>
        </div>
      }
    </div>
    </div>
      
  )
}

export default Log