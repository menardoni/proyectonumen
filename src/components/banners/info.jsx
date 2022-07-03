import '../styleComponent.css'
import { infoContainer, textContainer, textContainerH, logoContainer, logoImage  } from '../style'
import rog from '../../assets/images/logogamerepublic.png'
const Info =() => {  
  return (
  <>
    <div className={infoContainer}>
        <div className={textContainer}>
            <h1 className={textContainerH }>Tienda de informática en Arroyo Seco </h1>
            <p>Todo lo que necesitas encontralo acá.</p>
            <p>Las principales marcas en componentes para pc, celulares y tablets.</p>
            <p>¡Visitanos!</p>           
        </div>
        <div className={logoContainer}>
            <img className={logoImage} src={rog} alt="game-republic" />
        </div>
    </div>
 </>
  )
}

export default Info