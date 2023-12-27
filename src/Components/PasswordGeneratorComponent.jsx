import React from "react";
import { useCallback, useEffect, useState,useRef } from "react";

  const PasswordGeneratorComponent = () => {
    const [size,setSize]=useState(15);
    const [numbersAllowed,setNumbersAllowed]=useState(false);
    const [specialCharAllowed,setSpecialCharAllowed]=useState(false);
    const initialRender = useRef(true);
    const [password,setPasseord]=useState('')
    const [change,setChange]=useState(false)
   
        const generatePassword = useCallback(() => {
         const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
         const upperCaseLetters = lowerCaseLetters.toUpperCase();
       
         let str = lowerCaseLetters + upperCaseLetters;
         if (numbersAllowed) {
           str += '0123456789';
         }
         if (specialCharAllowed) {
           str += '!@#$%^&*()_+-=';
         }
       
         let password = '';
         for (let i = 0; i < size; i++) {
           let index = Math.floor(Math.random() * str.length);
           password += str.charAt(index);
         }
         console.log(password);
         setPasseord(password)
       }, [numbersAllowed, specialCharAllowed, size]);
       
        useEffect(()=>{
         if (initialRender.current) {
           initialRender.current = false;
           return;
         }
         generatePassword()
        },[specialCharAllowed,numbersAllowed,size,change])
     
     
        const handleSpecialCharChange = () => {
         setSpecialCharAllowed(prevState => !prevState);
       };
     
       const handleSpecialnumChange = () => {
         setNumbersAllowed(prevState => !prevState);
       };

  return (
    <div>
      <div className="bg-black">
      <h1 className="text-center text-4xl text-white">Password Generator</h1>
      </div>
      <div className="flex flex-col items-center justify-center my-4 px-4">
      <div className="flex flex-col md:flex-row items-center justify-between w-full md:w-auto">
        <label htmlFor="userInput" className="mr-2 mb-2 text-xl">Enter text:</label>
        <input type="text" id="userInput" className="border border-gray-300 px-3 py-1 rounded mb-2 w-full md:w-96 h-10 md:mr-2" placeholder="Generating password" value={password} />
        <button onClick={() => setChange(prevState => !prevState)} type="button" className="bg-blue-500 text-white px-4 py-2 rounded w-full md:w-auto mb-2">Generate</button>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center mt-4">
        <div className="flex items-center mb-2 md:mb-0 mr-4 cursor-pointer">
          <input type="checkbox" id="numbersAllowed" value={numbersAllowed} checked={numbersAllowed} onChange={handleSpecialnumChange} className="appearance-none border border-gray-300 rounded-md checked:bg-blue-500 checked:border-transparent mr-2 h-5 w-5" />
          <label htmlFor="numbersAllowed">Numbers Allowed {numbersAllowed}</label>
        </div>
        <div className="flex items-center mb-2 md:mb-0 mr-4 cursor-pointer">
          <input type="checkbox" id="specialCharAllowed" checked={specialCharAllowed} value={specialCharAllowed} onChange={handleSpecialCharChange} className="appearance-none border border-gray-300 rounded-md checked:bg-blue-500 checked:border-transparent mr-2 h-5 w-5" />
          <label htmlFor="specialCharAllowed">Special Characters Allowed {specialCharAllowed}</label>
        </div>
        <div className="flex items-center cursor-pointer">
          <label htmlFor="sliderValue" className="mr-2">Slider Value: {size}</label>
          <input type="range" value={size} onChange={(e)=>setSize(e.target.value)} id="sliderValue" name="sliderValue" min="0" max="100" className="w-32 appearance-none bg-gray-200 h-3 rounded-full outline-none focus:outline-none" />
        </div>
        
      </div>
    </div>
    </div>
  )
}
  

  export default PasswordGeneratorComponent;


