import { usePosts } from "../Context/PostContext";
import { useState } from "react";
import { FormPost } from "./FormPost";
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
        <button onClick={() => setShowModal(true)}>Nuevo Post</button>
        {posts && posts.map(post => (
          <div key={post._id}>
            {post.title}
          </div>
        )
        )}
      </div>
      <FormPost isvisible={showModal} onClose={() => setShowModal(false)} />
    </>
  )
}
