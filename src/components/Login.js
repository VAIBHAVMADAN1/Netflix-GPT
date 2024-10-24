import React, {useState, useRef} from 'react';

import { checkValidData } from '../utils/validate';

import Header from "./Header";

const Login = () => {
    const [isLoginForm, setIsLoginForm] = useState(true);

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const [errorMessage, setErrorMessage] = useState(null);

    function handleButtonClick() {
        const message = checkValidData((!isLoginForm ? name.current.value : "name"), email.current.value, password.current.value)
        setErrorMessage(message);
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
