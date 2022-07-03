import {Link} from 'react-router-dom'
import '../styleComponent.css'
import { navContiner, nav, navLi, navLiA, btnMenu } from '../style'
import React from 'react'
import CartIcon from '../cart/CartIcon'
import Logo from './logo'


const navList = [
    {
        id: "001",
        name:"home",
        url:"home"
    },
    {
        id: "002",
        name:"productos"
    },
    {
        id: "003",
        name:"promociones"
    },
    {
        id: "004",
        name:"contacto"
    },
    {
        id: "005",
        name:"clientes"
    }
]



const buttonMenu = ()=>{
    const menuBtn = document.querySelector('#menuBtn')
    const menu = document.querySelector('#menu')
      if (menuBtn.getElementsByClassName.visibility ='hidden') {
        menu.classList.toggle('hidden')
                
    }


}


const Nav = () => {
 
       
  return (
    <>
        <nav className={navContiner}>
            <ul id='menu' className={nav}>
                <li>
                <Logo/>
                </li>
                {
                    navList.map(item=>
                        <li className={navLi} key={item.id}>
                            <Link className={navLiA} id={item.id} to={item.name}>{item.name}</Link>
                        </li>
                    )
                } 
                <li>
                    <CartIcon/>                    
                </li> 
    
            </ul>
            <ul>
            <li id='menuBtn' className={btnMenu} onClick={()=>buttonMenu()}>
                    <ion-icon name="menu-outline"></ion-icon>
            </li> 
            </ul>
  
        </nav>
    </>
  )
}

export default Nav



