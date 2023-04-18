import { usePosts } from "../Context/PostContext";
export function HomePage() {

  const { posts } = usePosts()

  if (posts.length === 0) return (
    <div>
      <h1 className="text-white">No existen ninguna tarea creala!!!</h1>
    </div>
  )

  return (
    <div className="text-white">
      {posts && posts.map(post => (
        <div key={post._id}>
          {post.title}
        </div>
      )
      )}
    </div>
  )
}
