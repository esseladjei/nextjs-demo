'use client';
import { useRef, useState } from 'react';
import Image from 'next/image';
import style from './css/image-picker.module.css';
export default function ImagePicker({label, name}){

  const [pickedImage, setPickedImage]=useState();
  const imageInputRef =  useRef();

  function handleImagePickClick(){
      imageInputRef.current.click();
  }

  function handleImageChange(event){
   const file = event.target.files[0];
   if(!file){
    setPickedImage(null)
    return;
   }
   // convert to dataURL by using the file Reader class built into javascript
   const fileReader = new FileReader();
   fileReader.onload = ()=>{
     setPickedImage(fileReader.result)
   }
   fileReader.readAsDataURL(file)
  
  }
  return (
    <>
    <div className={style.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={style.controls}>
        <div className={style.preview}>
          {!pickedImage && <p>No image selected</p>}
          { pickedImage && (<Image  src={pickedImage} alt='The image selected by user' fill/>)}
        </div>
        <input className={style.input}
          type='file'
          id={name}
          accept='image/png,image/jpeg' 
          name={name}
          ref={imageInputRef}
          onChange={handleImageChange}
          required
          />
        <button className={style.button} type='button' onClick={handleImagePickClick}>Pick an image</button>
      </div>
    </div>
    </>
  )
}