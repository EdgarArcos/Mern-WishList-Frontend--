import { usePosts } from "../Context/PostContext";
import { PostCard, FormPost } from "../components";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButtton from "../components/buttons/LoginButton";
import { useState } from "react";
import ProfileButton from "../components/buttons/ProfileButton";
import { ModalLogin } from "../components/ModalLogin";

export function HomePage() {

  const { posts } = usePosts()
  const [showModal, setShowModal] = useState(false)
  const { isAuthenticated } = useAuth0()


  if (posts.length === 0) return (
    <div>
      <h1 className="text-white">No existen ninguna tarea creala!!!</h1>
    </div>
  )

  const modalVerify = () => {
    isAuthenticated ? setShowModal(true) : ModalLogin()
  }

  return (
    <>
      <div className="text-white">
        <button onClick={() => modalVerify()}>New Post</button>
        {isAuthenticated ? <ProfileButton /> : <LoginButtton />}
        <div className=" grid grid-cols-4 gap-2">
          {posts && posts.map(post => (
            <PostCard post={post} key={post._id} />
          )
          )}
        </div>
      </div>
      <FormPost isvisible={showModal} onClose={() => setShowModal(false)} />
    </>
  )
}
