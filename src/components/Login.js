// import React, {useState, useRef, useEffect} from 'react';

// import { useDispatch } from 'react-redux';
// import { addUser, removeUser } from '../utils/userSlice';

// import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
// import {auth} from "../utils/firebase";
// import { onAuthStateChanged } from "firebase/auth";

// import { useNavigate } from 'react-router-dom';

// import { checkValidData } from '../utils/validate';

// import Header from "./Header";

// const Login = () => {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const [isLoginForm, setIsLoginForm] = useState(true);
//     const name = useRef(null);
//     const email = useRef(null);
//     const password = useRef(null);
//     const [errorMessage, setErrorMessage] = useState(null);

//     useEffect(()=>{
//         console.log('useEffect called');
//         onAuthStateChanged(auth, (user) => {
//             if (user) {
//                 // User is signed in, see docs for a list of available properties
//                 // https://firebase.google.com/docs/reference/js/auth.user
//                 const {uid,displayName,email} = user;
//                 dispatch(addUser({uid, displayName, email}));
//                 navigate("/browse");
//                 console.log("observer called");
//             } else {
//                 // User is signed out
//                 dispatch(removeUser());
//                 console.log('signed out');
//             }
//         });
//     },[])

//     function handleButtonClick() {
//         const message = checkValidData(email.current.value, password.current.value)
//         setErrorMessage(message);
//         if (message) return;

//         if (!isLoginForm) {
//             createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
//                 .then((userCredential) => {
//                     // Signed up 
//                     const user = userCredential.user;
//                     console.log("Signed up");
//                     console.log(user);
                    
//                 })
//                 .catch((error) => {
//                     setErrorMessage(error.code + '-' + error.message);
//                 });
//         }
//         else{
//             signInWithEmailAndPassword(auth, email.current.value, password.current.value)
//                 .then((userCredential) => {
//                     // Signed in 
//                     const user = userCredential.user;
//                     console.log("Logged in");
//                     console.log(user);
//                 })
//                 .catch((error) => {
//                     setErrorMessage(error.code + '-' + error.message);
//                 });
//         }
//     }


//     return (
//         <div>
//             <Header />
//             <div className="relative">
//                 <img
//                     src="https://assets.nflxext.com/ffe/siteui/vlv3/74d734ca-0eab-4cd9-871f-bca01823d872/web/IN-en-20241021-TRIFECTA-perspective_2277eb50-9da3-4fdf-adbe-74db0e9ee2cf_large.jpg"
//                     alt="netflix background"
//                     className="w-full h-screen object-cover"
//                 />
//                 <form onSubmit={e => e.preventDefault()}
//                 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/4 bg-black text-white bg-opacity-70 p-6 rounded-lg text-center">

//                     <h1 className="text-2xl mb-2">{isLoginForm ? "Sign In" : "Sign Up"}</h1>
//                     {!isLoginForm && <input
//                         ref={name}
//                         defaultValue="Name"
//                         type="text"
//                         placeholder="Name"
//                         className="block w-full mb-4 p-2 bg-gray-700"
//                     />}
//                     <input
//                         ref={email}
//                         type="text"
//                         placeholder="Email address"
//                         className="block w-full mb-4 p-2 bg-gray-700"
//                     />
//                     <input
//                         ref={password}
//                         type="password"
//                         placeholder="Password"
//                         className="block w-full mb-4 p-2 bg-gray-700"
//                     />
//                     <p className="text-red-500 max-w-fit text-justify"
//                     >{errorMessage}</p>
//                     <button 
//                     className="bg-red-700 px-4 py-2 w-full"
//                     onClick={handleButtonClick}>
//                         {isLoginForm ? "Sign In" : "Sign Up"}
//                     </button>
//                     <p
//                     className="cursor-pointer mt-4"
//                         onClick={() => setIsLoginForm(!isLoginForm)}
//                     >{isLoginForm ? "New to Netflix? Sign Up" : "Already have an account? Sign In"}</p>
//                 </form>
//             </div>
//         </div>
//     );
// };
// export default Login;
import React, {useState, useRef, useEffect} from 'react';

import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";

import { useNavigate } from 'react-router-dom';

import { checkValidData } from '../utils/validate';

import Header from "./Header";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [isLoginForm, setIsLoginForm] = useState(true);
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(()=>{
        console.log('useEffect called');
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                // navigate("/browse");
                console.log("observer called");
            } else {
                // User is signed out
                navigate("/");
                dispatch(removeUser());
                console.log('signed out');
            }
        });
    },[])

    function handleButtonClick() {
        const message = checkValidData(email.current.value, password.current.value)
        setErrorMessage(message);
        if (message) return;

        if (!isLoginForm) {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    console.log("Signed up");
                    console.log(user);

                    // auth.currentUser
                    updateProfile(user, {
                        displayName: name.current.value, photoURL: "https://occ-0-2590-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
                    }).then(() => {
                        // Profile updated!
                        dispatch(addUser({ uid: user.uid, displayName: name.current.value, email: user.email, photoURL: "https://occ-0-2590-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229" }));
                        navigate("/browse");
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
                    console.log("Logged in");
                    console.log(user);
                    dispatch(addUser({ uid: user.uid, displayName: user.displayName, email: user.email, photoURL: user.photoURL}));
                    navigate("/browse");
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
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/74d734ca-0eab-4cd9-871f-bca01823d872/web/IN-en-20241021-TRIFECTA-perspective_2277eb50-9da3-4fdf-adbe-74db0e9ee2cf_large.jpg"
                    alt="netflix background"
                    className="w-full h-screen object-cover"
                />
                <form onSubmit={e => e.preventDefault()}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/4 bg-black text-white bg-opacity-70 p-6 rounded-lg text-center">

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