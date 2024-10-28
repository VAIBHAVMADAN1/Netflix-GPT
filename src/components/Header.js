import React from 'react'

import { useSelector } from 'react-redux';

import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";


const Header = () => {
  function handleSignOut() {
    signOut(auth).then(() => {
      console.log("sign out button");      
    }).catch((error) => {
      // An error happened.
    });
  }
  const user = useSelector((state)=>state.user);
  return (
      <div className="absolute w-full bg-gradient-to-b from-black z-10 text-white flex justify-between">
        <img src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="netflix logo"
          className="w-40" />
        
        {user && (<div className="flex items-center">
          <img src={user?.photoURL}
            alt="user-logo"
            className="h-8 mr-2" />
          <button className="font-bold" onClick={handleSignOut}>(Sign out)</button>
        </div>)}
      </div>
  )
}
export default Header