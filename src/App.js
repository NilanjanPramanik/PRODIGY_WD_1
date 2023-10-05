import React from 'react'
import "./App.css"
import HomeScreen from "./screen/HomeScreen";
// import { useDispatch, useSelector } from 'react-redux'
// import { auth } from './firebase';
// import { loginUser, setLoading } from "./features/counter/userSlice"


function App() {

  return (
    <div className='app'>
      {/* { !user ? (<SignUpScreen />) : (<HomeScreen />)} */}
      <HomeScreen />
    </div>
  )
}

export default App