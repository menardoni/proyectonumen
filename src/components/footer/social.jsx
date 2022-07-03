import React from 'react'
import { Link } from 'react-router-dom'
import '../styleComponent.css'
import fb from '../images/facebook.png'
import tw from '../images/gorjeo.png'
import insta from '../images/instagram.png'
import { image } from '../style'
import { socialClass, socialLi, socialLiA } from '../style'


const social = [
    {
        id:1,
        name:"instagram",
        url:'https://www.instagram.com/',
        image:insta
    },
    {
        id:2,
        name:"facebook",
        url:'https://www.facebook.com/',
        image:fb
    },
    {
        id:3,
        name:"twitter",
        url:'https://twitter.com/',
        image:tw
    }
]




const Social = () => {
  return (
    <ul className={socialClass}>
            {
                social.map(item=>
                    <li className={socialLi} key={item.id}>
                        
                        <Link className={socialLiA} to={item.url}>{item.name}<img className={image} src={item.image} alt={item.name} /></Link>
                        
                    </li>)
            }
    </ul>
  )
}

export default Social