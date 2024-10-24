import { useEffect } from "react";

import { createBrowserRouter, RouterProvider} from "react-router-dom";

import { Provider, useDispatch } from "react-redux";
import appStore from "../utils/appStore";

import Login from "./Login";
import Browse from "./Browse"
import { onAuthStateChanged } from "firebase/auth";

import { addUser, removeUser } from "../utils/userSlice";

import {auth} from "../utils/firebase";

function Body() {
  const dispatch = useDispatch();
  const appRouter = createBrowserRouter([
    {
      path:'/',
      element: <Login/>
    },
    {
      path:'/browse',
      element: <Browse/>,
    }
  ])

  useEffect(()=>{
    onAuthStateChanged(auth, (user)=>{
      if (user) {
        const {uid, email, displayName} = user;
        dispatch(addUser({uid: uid, email: email, displayName: displayName}))
        
      }
      else{
        dispatch(removeUser());
        // navigate("/");
      }
    })
  },[]);

  return (
      <RouterProvider router={appRouter}>
        {/* <Provider store={appStore}></Provider> */}
      </RouterProvider>
    );
}

export default Body;