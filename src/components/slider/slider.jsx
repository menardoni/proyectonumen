import React, { useState, useEffect } from 'react'
import images from '../../exports/images'
import '../styleComponent.css'
import { sliderContainer, slider, sliderButtons, sliderImage } from '../style'


const Slider = () => {


const imgSlider = images
const [selectedIndex, setSelectedIndex] = useState(0);
const [selectedImage, setSelectedImage] = useState(imgSlider[0]);

useEffect(() => {
  const interval = setInterval(() => {
    const next = ()=>{
    const condition = selectedIndex < images.length -1;
    const nextIndex = condition ? selectedIndex +1 : 0
    setSelectedImage(images[nextIndex])
    setSelectedIndex(nextIndex)
  }
  next()
  }, 3000);

  const Slider = document.getElementById(`slider`)
  //stop para autoplay de slider 
  Slider.addEventListener('mouseenter', ()=>{
    clearInterval(interval)
  });
  // play para reanudar slider
  Slider.addEventListener('mouseleave', ()=>{
    next()
  });

  

  return () => {

    clearInterval(interval)
    
  }
},)


const selectImage = (index = Number, images = [], next = true) =>{

  const condition = next ? selectedIndex < images.length - 1 : selectedIndex > 0;
  const nextIndex = next?(condition? selectedIndex + 1 : 0) : condition? selectedIndex - 1 : imgSlider.length -1;
  setSelectedImage(images[nextIndex])
  setSelectedIndex(nextIndex)

}
const prev = () =>{
  selectImage(selectedIndex, images, false)
}
const  next = () =>{
  selectImage(selectedIndex, images)
  
}



  return (
    
    <div  className={sliderContainer}>
        <div id='slider' className={slider}>
        <button className={sliderButtons} onClick={prev}></button>
        <img className={sliderImage} src={selectedImage} alt="lafrutamadre"/> 
        <button className={sliderButtons} onClick={next}></button>
        </div>

    </div>
  )
}

export default Slider