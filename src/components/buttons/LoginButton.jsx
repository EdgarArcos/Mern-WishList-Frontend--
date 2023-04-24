import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

export default function LoginButton() {

    const { loginWithRedirect } = useAuth0()
    return (
        <button className='bg-green-600 text-white px-2 py-1 rounded-sm hover:bg-green-500 my-5' onClick={() => loginWithRedirect()}>Login</button>
    )
}
