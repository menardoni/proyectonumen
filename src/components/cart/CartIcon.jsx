import '../styleComponent.css'
import { divCart, btnClose } from '../style'
import { useState } from 'react'
import Cart from './Cart'


const CartIcon = () => {
  const [modal, setModal] = useState(false)

  return (
    <>
      <div>
        {modal &&
        <div className='ovelay'>

          <div className='modalContainer'> 
          <div onClick={()=>setModal(false)} className={btnClose}>X</div>  
            <Cart/>
          </div>
        
        </div>
        
        }

      </div>

      <div onClick={()=> setModal(true)} className={divCart}>
        <button className=''>
          <ion-icon name="cart-outline"></ion-icon>
        </button>   
      </div>
    </>
  )
}

export default CartIcon

