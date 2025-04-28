


import React, { useState } from 'react'
import '../App.css'
import {  signInWithPopup } from "firebase/auth";
import GoogleButton from 'react-google-button'
import { auth, provider } from '../Services/Firebase-auth';

const SignIn = () => {

    

      const handleGoogleLogin = async ()=>{


        try {
    
          const res = await signInWithPopup(auth,provider)
          console.log(res)
          
        } catch (error) {
            console.log(error)
        }
      }
  


  return (
    <div className="signin" style={{display:"flex",flexDirection:"column"}}>

      <hr />
      <GoogleButton
  onClick={handleGoogleLogin}
/>
    </div>
  );
};

export default SignIn;
