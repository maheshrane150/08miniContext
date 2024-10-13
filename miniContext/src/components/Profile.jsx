import React from "react";
import { useContext } from "react";
import userContext from "../context/userContext";

function Profile(){
    const {user} = useContext(userContext)

    return(
        <p>{user.userName}</p>
    )

}

export default Profile;