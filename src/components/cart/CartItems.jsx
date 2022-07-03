import React from 'react' 
import { btnAdd, descriptionS, btnContainer, btnCart, cardModal, imageModal} from '../style'


const CartItems = ({data, DeleteToCart, AddToCart}) => {
 const { description, stock, sub, quantity, img} = data
  return (
    <div>
         
        <div className={cardModal} >
            <img className={imageModal} src={img} alt="" />
            <h1 className={descriptionS}>{description}</h1>
            <div className='w-2/4 dataResp'>
            <h2>total: $ {sub}</h2>
            <h2>stock: {stock}</h2>
            </div>

          <div className={btnContainer}>

            <button onClick={()=> DeleteToCart(data)} className={btnCart}>-</button>
            <h2>{quantity}</h2>
            <button onClick={()=> AddToCart(data)} className={btnCart}>+</button>
            <button onClick={()=>DeleteToCart(data, true)} className={btnAdd}>Eliminar</button>
          </div>
          

        </div>

    </div>

  )
}

export default CartItems





