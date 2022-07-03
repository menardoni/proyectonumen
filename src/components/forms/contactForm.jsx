import React from 'react'
import { form,formDatos,formH,formLabel, formText,} from '../style'

const ContactForm = () => {
  return (
    <>
    <form className={form} action="">
      <h1 className={formH}>formulario de consulta</h1>
      <div className={formDatos}>
        <label className={formLabel}>nombre</label>
        <input type="text" name='nombre' />
        <label className={formLabel}>apellido</label>
        <input type="text" name="apellido" id="" />
        <label className={formLabel}>email</label>
        <input type="email" name="email" id="" />
      </div>
      <div className={formText}>
        <label className={formLabel}> consulta</label>
        <textarea className='none' name="" id="" cols="50" rows="10"></textarea>
      </div>
      <button className='self-center mt-3 btn-primary' type="submit">enviar</button>
    </form>
    </>
  )
}

export default ContactForm
{/* <th colSpan={2} className={formTh}>datos personales</th>
<tr className={formTr}>nombre
  <input type="text" />
</tr>
<tr className={formTr}>apellido
  <input type="text" />
</tr>
<tr className={formTr}>email
  <input type="email" name="" id="" />
</tr>
<th className={formTh} colSpan={2}>consulta</th>
  <tr className={formTr}>
    <textarea name="" id="" cols="50" rows="10"></textarea>
  </tr>
  <input className='button' type="submit" value="enviar" /> */}