import React from "react"
import { Redirect } from "react-router-dom"

//Function to remove token from local storage and redirect the user back to the login component

function Logout() {
    localStorage.removeItem("token");
    return <Redirect to="/login" />
}
export default Logout