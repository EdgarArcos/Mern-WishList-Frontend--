import { useNavigate } from "react-router-dom";

export default function ProfileButton() {
    const navigate = useNavigate()
    return (
        <button onClick={() => navigate('/Profile')}>Profile</button>
    )
}
