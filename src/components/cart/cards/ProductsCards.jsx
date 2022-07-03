import React, { useContext } from 'react'
import { CartShopContainer } from '../CartShop'
import ProductsItem from './ProductsItem'
import { cardsContainer } from '../../style'



const ProductsCards = () => {
  const {products, AddToCart} = useContext(CartShopContainer)
  const articles = products.filter(article => article.id < 20)

  return (
    <div className={cardsContainer}>
      {
      articles.map((item) =>(
        <ProductsItem key={item.id} data={item} AddToCart={AddToCart}/>
      ))
      }
    </div>

    
  )
}

export default ProductsCards
/* 
        <img className={cardImage} src={img} alt="" />
        <h1 className={descriptionS}>{description}</h1>
        <h2>$ {price}</h2>
        <h3>stock: {stock}</h3>
        <button onClick={()=> AddToCart(data)} className={btnAdd}>Agregar</button> */
