import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export default function ProfileButton() {
    const { user, logout } = useAuth0()
    return (
        <div className="text-center">
            <button onClick={() => logout()} ><img className="rounded-3xl border-neutral-900 border-4 border-dashed hover:rounded-full hover:border-red-700" src={user.picture} alt={user.name} /></button>
            <p className="text-white">{user.name}</p>
        </div>
    )
}
