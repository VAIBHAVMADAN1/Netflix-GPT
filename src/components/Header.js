import React, {useEffect} from 'react'

import { useSelector } from 'react-redux';

import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";

import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { toggleGptState } from '../utils/gptSlice';

import { useNavigate } from 'react-router-dom';

import {LOGO} from "../utils/constants";

import { SUPPORTED_LANGUAGES } from '../utils/constants';
import { changeLanguage } from '../utils/languageSlice';


const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        dispatch(addUser({ uid: user.uid, displayName: user.displayName, email: user.email, photoURL: "https://occ-0-2590-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229" }));
        navigate("/browse");
        console.log("Observed called. signed in");

      } else {
        // User is signed out
        navigate("/");
        dispatch(removeUser());
        console.log('Observer called. signed out');
      }
    });
    return ()=> unsubscribe();
  }, [dispatch,navigate])



  function handleSignOut() {
    signOut(auth).then(() => {
      console.log("Sign out button clicked");      
    }).catch((error) => {
      // An error happened.
    });
  }
  const user = useSelector((state)=>state.user);

  const {gptState} = useSelector(state=>state.gpt);
  console.log(gptState);
  function toggleGptSearch() {
    dispatch(toggleGptState());
  }

  function handleLanguageChange(e) {
    dispatch(changeLanguage(e.target.value))
  }
  return (
    <div className="absolute top-0 left-0 w-full bg-gradient-to-b from-black to-transparent z-20 text-white flex flex-col justify-between items-center sm:flex-row px-4 py-4">
        <img src={LOGO}
          alt="netflix logo"
          className="w-40" />
        {user && (<div className="flex items-center">
          <img src={user?.photoURL}
            alt="user-logo"
            className="h-8 mr-2" />
        {gptState && (
          <select className="bg-black border-solid border-white"
            onChange={e => handleLanguageChange(e)}>
            {SUPPORTED_LANGUAGES.map(language => (
              <option key={language.identifier} value={language.identifier}>{language.name}</option>
            ))}
          </select>
        )}
        <div className="w-full">
          <button className="font-bold bg-purple-500 text-white px-4 py-2 m-2" onClick={toggleGptSearch}>{!gptState ? "GPT Search" : "Main page"}</button>
          <button className="font-bold" onClick={handleSignOut}>(Sign out)</button>
        </div>
        </div>)}
      </div>
  )
}
export default Header