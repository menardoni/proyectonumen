import React, { useReducer, useEffect, createContext } from 'react'
import { ShoppingReducer, ShoppingInitialState } from '../../exports/shoppingReducer'
import { TYPES } from '../../exports/shoppingControllers'
import axios from 'axios'

export const CartShopContainer = createContext();



const CartShop = ({children}) => {

    const [state, dispatch] = useReducer(ShoppingReducer, ShoppingInitialState)

    const {products, cart } = state 

    //conexion a bbdd
    const UpDate = async () => {
        const urlProducts = "http://localhost:4000/products", urlCart = "http://localhost:4000/cart"
        
        const resP = await axios.get(urlProducts), resC = await axios.get(urlCart)
        
        const newProduct = await resP.data, newCartItem = await resC.data

        dispatch({type: TYPES.InitState, payload:{newProduct, newCartItem}})
    }

    useEffect(() => {
        UpDate()
    }, [])
    
    

    const AddToCart = async (data) =>{  

        let NewItemCart = state.products.find((product) => product.id === data.id)
        let ItemInCart = state.cart.find(item => item.id === NewItemCart.id)

        if (ItemInCart) {
            const url =  `http://localhost:4000/cart/${data.id}`
            const options ={
                method:"PUT",
                headers: {"content-type": "application/json"},
                data: JSON.stringify({...data, quantity: ItemInCart.quantity + 1})
            },
                res = await axios(url, options),
                dataItem = await res.data
    
            dispatch({type: TYPES.AddToCart, payload: {dataItem}})
            
        } else {
            const options = {
                method: "POST",
                headers: {"content-type": "application/json"},
                data: JSON.stringify({...data, quantity:1})
               
            }
            let res = await axios("http://localhost:4000/cart", options),
                dataItem = await res.data
                
            dispatch({type: TYPES.AddToCart, payload: {dataItem}})
            
        }

    }

    const DeleteToCart = async (data, all=false) =>{
        if (all) {
            const url = `http://localhost:4000/cart/${data.id}`
            
            const options ={
                method: "DELETE",
                headers: {"content-type":"application/json"}
            },
                res = await axios(url, options)



            dispatch({type: TYPES.DeleteAll, payload: data.id})
                        
        } else{

            let itemCart = state.cart.find((item) => item.id === data.id)

            if (itemCart.quantity > 1) {
                const url = `http://localhost:4000/cart/${data.id}`
                const options ={
                    method: "PUT",
                    headers: {"content-type":"application/json"},
                    data: JSON.stringify({...data, quantity: itemCart.quantity - 1})
                },
                    res = await axios(url, options),
                    itemData= await res.data
                dispatch({type: TYPES.DeleteToCart, payload: data.id})
                
            } else {
                const url = `http://localhost:4000/cart/${data.id}`
            
                const options ={
                    method: "DELETE",
                    headers: {"content-type":"application/json"}
                },
                    res = await axios(url, options)
                dispatch({type: TYPES.DeleteToCart, payload: data.id})
            }
                
        }

    }

    const ClearCart = () =>{

    
            dispatch({type: TYPES.ClearCart})
    }

  


  return (
    <>
    <CartShopContainer.Provider value={{cart, products, AddToCart, DeleteToCart, ClearCart}}>
        {children}
    </CartShopContainer.Provider>             
    </>
  )
}

export default CartShop

