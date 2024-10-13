import React from "react"
import UserContextProvider from "./context/userContextProvider"
import Login from "./components/Login"
import Profile from "./components/profile"

function App() {
  
  return (
    <>
      <UserContextProvider>
        <p>Basic overVeiw of context with chai our code</p>
        <Login/>
        <Profile/>
      </UserContextProvider>
    </>
  )
}

export default App
