import { usePosts } from "../Context/PostContext";
import { useState } from "react";
import { PostCard, FormPost } from "../components";
export function HomePage() {

  const { posts } = usePosts()
  const [showModal, setShowModal] = useState(false)

  if (posts.length === 0) return (
    <div>
      <h1 className="text-white">No existen ninguna tarea creala!!!</h1>
    </div>
  )
  return (
    <>
      <div className="text-white">
        <button onClick={() => setShowModal(true)}>New Post</button>
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
