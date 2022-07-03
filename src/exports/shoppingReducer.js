import { TYPES } from "./shoppingControllers";

export const ShoppingInitialState ={
    products:[],
    cart:[]
}


export function ShoppingReducer(state, action){
    switch (action.type) {
         case TYPES.InitState:{
            return{
              ...state,
              products: action.payload.newProduct,
              cart: action.payload.newCartItem

            }
          }
        case TYPES.AddToCart:{

          const NewItemCart = state.products.find(product =>product.id === action.payload.dataItem.id)
          const ItemInCart = state.cart.find(item => item.id === NewItemCart.id)

          return ItemInCart ?
          {
            ...state,
            cart: state.cart.map(item => item.id === NewItemCart.id ? {...item, stock:item.stock - 1, quantity: item.quantity +1 , sub: item.price + item.quantity * item.price }: item)
          }:{
            ...state,
            cart: [...state.cart, {...action.payload.dataItem, stock:NewItemCart.stock - 1,  quantity: 1, sub: NewItemCart.price }],
            
          }
         
        }
        case TYPES.DeleteToCart:{

          const DeleteItem = state.cart.find((item) => item.id === action.payload)
          
          return DeleteItem.quantity > 1 ?
          {
            ...state,
            cart: state.cart.map(item => item.id ===action.payload  ? { ...item, stock:item.stock +1, quantity: item.quantity - 1, sub: item.sub - item.price }: item)

          }:{
            ...state,
            cart: state.cart.filter(item => item.id !== action.payload)
          }

        }
        case TYPES.DeleteAll:{
          return{
            ...state,
            cart: state.cart.filter(item => item.id !== action.payload)
          }

        }
        /* case TYPES.ClearCart: {
          return{
            ShoppingInitialState
   
            
          }
    
      } */
                
        default:
            return state;
    }
}