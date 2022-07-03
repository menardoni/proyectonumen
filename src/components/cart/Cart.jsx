import React from 'react'
import { useContext } from 'react'
import { CartShopContainer } from './CartShop'
import CartItems from './CartItems'
import { btnDel } from '../style'
import { data } from 'autoprefixer'



const Cart = () => {

    const {cart, AddToCart, DeleteToCart, ClearCart}= useContext(CartShopContainer)

    const total = cart.map(item => item.price * item.quantity).reduce((prev,cur)=> prev + cur, 0)
    const totalItem = cart.map(item => item.quantity).reduce((prev, cur) => prev + cur, 0)
    console.log(total)

    
  return (
    <>
    <div>
        <div>
            {cart.length === 0 ?
            (<div className='w-full h-20 rounded-2xl bg-slate-300'>
                <h1 className='font-extrabold text-center text-black '>no hay productos en el carrito</h1>
            </div>
            ):(
                <div>
                    {
                        cart.map((item, index)=>(
                            <CartItems key={index} data={item} DeleteToCart={DeleteToCart} AddToCart={AddToCart}/>
                        ))
                        
                    }
                    <div className='flex items-center justify-around h-20 respResp bg-fuchsia-700 rounded-xl'>
                        <button className='w-auto px-2 font-bold text-white rounded-full bg-cyan-700 hover:bg-cyan-900' onClick={()=>ClearCart()}>Eliminar Todo</button>
                        <div className='w-2/4 contResp'>
                        <div className='flex justify-around m-1 font-bold text-left text-white itemResp bg-slate-700 rounded-xl'>total de articulos: <h3>{totalItem}</h3></div>
                        <div className='flex justify-around m-1 font-bold text-left text-white totalResp bg-slate-700 rounded-xl'>Total a Pagar: <h3>$ {total}</h3> </div>  
                        </div>
                    </div>
                </div>
            )}
        </div>
{/*         <div className='flex items-center justify-around h-14 c bg-fuchsia-700 rounded-xl'>
            <button className='w-auto px-2 font-bold text-white rounded-full bg-cyan-700 hover:bg-cyan-900' onClick={()=>ClearCart()}>Eliminar Todo</button>
            <h2 className='font-bold text-black'>Total a Pagar: $ </h2>
        </div> */}

    </div>
    </>
  )
}

export default Cart