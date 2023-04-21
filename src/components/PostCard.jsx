import toast from "react-hot-toast";
import { usePosts } from "../Context/PostContext";
import { useState } from "react";
import { FormEdit } from "./FormEdit";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { ModalLogin } from "./ModalLogin";

export default function PostCard({ post }) {
    const navigate = useNavigate()
    const { deletePost } = usePosts()
    const [showEdit, setShowEdit] = useState(false)
    const { isAuthenticated } = useAuth0()

    const handleEdit = (_id) => {
        navigate(`/posts/${post._id}`)
        setShowEdit(true)
    }

    const verifyHandleEdit = () => {
        isAuthenticated ? handleEdit() : ModalLogin()
    }

    const verifyHandleDelete = (_id) => {
        isAuthenticated ? handleDelete(_id) : ModalLogin()
    }

    const handleDelete = (_id, title) => {
        toast((t) => (
            <div className="text-center">
                <p>Do you want to delete? <strong>{post.title}</strong></p>
                <div>
                    <button onClick={() => { toast.dismiss(t.id); deletePost(_id) }} className="bg-red-600 hover:bg-red-400 px-3 py-2 text-sm text-white rounded-sm mx-2">Delete</button>
                    <button onClick={() => toast.dismiss(t.id)} className="text-white rounded-sm mx-2 bg-slate-600 hover:bg-slate-400 px-3 py-2">cancel</button>
                </div>
            </div>
        ))
    }
    return (
        <div className="bg-zinc-800 text-white rounded-sm shadow-md shadow-black hover:bg-zinc-700 hover:cursor-pointer">
            <div className=" px-12 py-7">
                <div className="flex justify-between">
                    <h3>{post.title}</h3>
                    <button onClick={() => verifyHandleEdit()}>Edit </button>
                    <button onClick={() => verifyHandleDelete(post._id, post.title)} className="bg-red-600 text-sm px-2 ml-12 py-1 rounded-sm hover:  ">Delete</button>
                </div>
                <p>{post.description}</p>
                {post.image && <img src={post.image.url} />}
            </div>
            <FormEdit isvisible={showEdit} onClose={() => setShowEdit(false)} />
        </div>
    )
}
