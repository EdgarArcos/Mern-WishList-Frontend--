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
                <p>¿Do you want to delete? <strong className="break-all">{post.title}</strong></p>
                <div className=" my-1 text-center">
                    <button onClick={() => { toast.dismiss(t.id); deletePost(_id) }} className="bg-red-600 text-white px-2 py-1 ml-5 rounded-sm hover:bg-red-500">Delete</button>
                    <button onClick={() => toast.dismiss(t.id)} className="bg-slate-600 text-white px-2 py-1 ml-5 rounded-sm hover:bg-slate-500">Cancel</button>
                </div>
            </div>
        ))
    }
    return (
        <div className="text-white">
            <div className=" rounded-2xl bg-zinc-800 hover:bg-zinc-700 hover:cursor-pointer ">
                <div className=" px-12 py-5">
                    <div className=" my-1 text-end">
                        <button className="ml-5 bg-orange-600 text-sm px-2 py-1 rounded-sm hover:bg-orange-500" onClick={() => verifyHandleEdit()}>Edit </button>
                        <button onClick={() => verifyHandleDelete(post._id, post.title)} className="bg-red-600 text-sm px-2 py-1 ml-5 rounded-sm hover:bg-red-500">Delete</button>
                    </div>
                    <div className="text-center">
                        <h2 className=" break-all text-xl uppercase">{post.title}</h2>
                    </div>
                    <div className="inline ">
                        <p className="m-1 break-all">{post.description}</p>
                    </div>
                    <div className="mt-6">
                        {post.image && <img className="rounded-xl h-auto max-w-full" src={post.image.url} />}
                    </div>
                </div>
            </div>
            <FormEdit isvisible={showEdit} onClose={() => setShowEdit(false)} />
        </div>
    )
}
