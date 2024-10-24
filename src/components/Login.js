import React, {useState} from 'react';

import Header from "./Header";

const Login = () => {
    const [isLoginForm, setIsLoginForm] = useState(true);
    function handleIsLoginForm(){
        setIsLoginForm(!isLoginForm);
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
                <form className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black text-white bg-opacity-70 p-6 rounded-lg text-center">
                    <h1 className="text-2xl mb-2">{isLoginForm ? "Sign In" : "Sign Up"}</h1>
                    {!isLoginForm && <input
                        type="text"
                        placeholder="Name"
                        className="block w-full mb-4 p-2"
                    />}
                    <input
                        type="text"
                        placeholder="Email address"
                        className="block w-full mb-4 p-2"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="block w-full mb-4 p-2"
                    />
                    <button className="bg-red-700 px-4 py-2 w-full">
                        {isLoginForm ? "Sign In" : "Sign Up"}
                    </button>
                    <p
                    className="cursor-pointer mt-2"
                    onClick={handleIsLoginForm}
                    >{isLoginForm ? "New to Netflix? Sign Up" : "Already have an account? Sign In"}</p>
                </form>
            </div>
        </div>
    );
};

export default Login;
