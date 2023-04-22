import { usePosts } from "../Context/PostContext";
import { PostCard, FormPost } from "../components";
import { LocalStorageCache, useAuth0 } from "@auth0/auth0-react";
import LoginButtton from "../components/buttons/LoginButton";
import { useEffect, useState } from "react";
import ProfileButton from "../components/buttons/ProfileButton";
import { ModalLogin } from "../components/ModalLogin";

export function HomePage() {

  const { getPosts } = usePosts()
  const [showModal, setShowModal] = useState(false)
  const [posts, setPosts] = useState([])
  const { isAuthenticated, user } = useAuth0()

  useEffect(() => {
    const getFilteredPosts = async () => {
      const filteredPosts = await getPosts(user)
      setPosts(filteredPosts)
    }
    getFilteredPosts()
  }, [user])


  if (posts.length === 0) return (
    <div>
      <h1 className="text-white">No existen ninguna tarea haz login y creala!!!</h1>
      <LoginButtton />
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
          {posts.length !== 0 && posts.map(post => (
            <PostCard post={post} key={post._id} />
          )
          )}
        </div>
      </div>
      <FormPost isvisible={showModal} onClose={() => setShowModal(false)} />
    </>
  )
}
