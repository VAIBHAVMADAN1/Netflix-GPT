import React, {useState, useRef} from 'react';

import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from "../utils/firebase";

import { checkValidData } from '../utils/validate';

import { USER_AVATAR} from "../utils/constants";
import {NETFLIX_BACKGROUND } from '../utils/constants';

import Header from './Header';

const Login = () => {
    const dispatch = useDispatch();

    const [isLoginForm, setIsLoginForm] = useState(true);
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const [errorMessage, setErrorMessage] = useState(null);

    function handleButtonClick() {
        const message = checkValidData(email.current.value, password.current.value)
        setErrorMessage(message);
        if (message) return;

        if (!isLoginForm) {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    // console.log("Signed up");
                    // console.log(user);

                    // auth.currentUser
                    updateProfile(auth.currentUser, {
                        displayName: name.current.value, photoURL: USER_AVATAR
                    }).then(() => {
                        // Profile updated!
                        dispatch(addUser({ uid: user.uid, displayName: user.displayName, email: user.email, photoURL: user.photoURL}));
                    }).catch((error) => {
                        setErrorMessage(error.code + '-' + error.message);
                    });
                    
                })
                .catch((error) => {
                    setErrorMessage(error.code + '-' + error.message);
                });
        }
        else{
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    // console.log("Logged in");
                    // console.log(user);
                    dispatch(addUser({ uid: user.uid, displayName: user.displayName, email: user.email, photoURL: user.photoURL}));
                })
                .catch((error) => {
                    setErrorMessage(error.code + '-' + error.message);
                });
        }
    }




    return (
        <div>
            <Header />
            <div className="relative">
                <img
                    src={NETFLIX_BACKGROUND}
                    alt="netflix background"
                    className="w-full h-screen object-cover"
                />
                <form onSubmit={e => e.preventDefault()}
                    className="w-3/5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black text-white bg-opacity-70 rounded-lg text-center md:w-1/4 p-6">

                    <h1 className="text-2xl mb-2">{isLoginForm ? "Sign In" : "Sign Up"}</h1>
                    {!isLoginForm && <input
                        ref={name}
                        defaultValue="Name"
                        type="text"
                        placeholder="Name"
                        className="block w-full mb-4 p-2 bg-gray-700"
                    />}
                    <input
                        ref={email}
                        type="text"
                        placeholder="Email address"
                        className="block w-full mb-4 p-2 bg-gray-700"
                    />
                    <input
                        ref={password}
                        type="password"
                        placeholder="Password"
                        className="block w-full mb-4 p-2 bg-gray-700"
                    />
                    <p className="text-red-500 max-w-fit text-justify"
                    >{errorMessage}</p>
                    <button 
                    className="bg-red-700 px-4 py-2 w-full"
                    onClick={handleButtonClick}>
                        {isLoginForm ? "Sign In" : "Sign Up"}
                    </button>
                    <p
                    className="cursor-pointer mt-4"
                        onClick={() => setIsLoginForm(!isLoginForm)}
                    >{isLoginForm ? "New to Netflix? Sign Up" : "Already have an account? Sign In"}</p>
                </form>
            </div>
        </div>
    );
};
export default Login;