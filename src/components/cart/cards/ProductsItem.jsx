import {cardImage,card,btnAdd, descriptionS} from '../../style'

const ProductsItem = ({AddToCart, data}) => {

    const {id, description, price, stock, img} = data

    
  return (
    <>
    <div className={card}>
        <img className={cardImage} src={img} alt={description} />
        <h1 className={descriptionS}>{description}</h1>
        <h2>Precio: $ {price}.00</h2>
        <h3>stock: {stock}</h3>
        <button className={btnAdd} onClick={()=> AddToCart(data)}>Agregar</button>
    </div>

    </>
  )
}

export default ProductsItem