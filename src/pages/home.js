import { pages } from "../components/style"
import Destacados from '../components/banners/destacados'
import Info from '../components/banners/info'
import Promociones from "../components/banners/promociones"
import Somos from "../components/banners/somos"
import Slider from "../components/slider/slider"
const Home = () => {

  
  return (
    <div className={pages}>
      <Slider/>
      <Info/>
      <Somos/>
      <Promociones/>
      <Destacados/>
      
      
    </div>
  )
}

export default Home