import {app} from './components/style'
import './App.css';
import CartShop from './components/cart/CartShop';
import Ruter from './Router';




function App() {
  return (
    <div className={app}>
      <CartShop>
        <Ruter/>
      </CartShop>

    </div>
  );
}

export default App;
