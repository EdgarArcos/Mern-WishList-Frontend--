import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

export default function Profile() {

    const navigate = useNavigate()

    const Logoutfunc = () => {
        navigate('/')
        logout()
    }

    const { user, logout } = useAuth0()

    return (
        <div>
            <img src={user.picture} alt={user.name} />
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <button onClick={() => Logoutfunc()}>Logout</button>
        </div>

    )
}
