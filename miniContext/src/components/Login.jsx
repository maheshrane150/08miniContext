import React from "react";
import { useContext, useState } from "react";
import userContext from "../context/userContext";

function Login(){
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(userContext)

    const submit = (e) => {
        setUser({userName, password})
    }

    return(
        <>
        <div>
            <input 
            type="text" 
            value={userName}
            onChange={(e)=>setUserName(e.target.value)}
            placeholder="username"
            />

            <input 
            type="text" 
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            placeholder="password"
            />
        </div>
        <div>
            <button onClick={submit}>submit</button>
        </div>
        </>
    )
}

export default Login;