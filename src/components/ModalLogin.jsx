import React from 'react'
import toast from "react-hot-toast";
import LoginButtton from "./buttons/LoginButton";

export const ModalLogin = () => {
    toast((t) => (
        <div className="text-center">
            <h3>To access this function you must first log in.</h3>
            <p><LoginButtton /></p>
        </div>
    ))

}
