import { useState, createContext, useContext, useEffect } from 'react'
import { getPostsRequests, createPostRequest, deletePostRequest, getPostRequest, updatePostRequest } from "../api/post";

export const postContext = createContext()

export const usePosts = () => {
  const context = useContext(postContext)
  return context
}

export function PostProvider({ children }) {
  const [posts, setPosts] = useState([])

  const getPosts = async (user) => {
    const resultado = await getPostsRequests()
    let posts = []
    if (user?.email) {
      resultado.data.map((post) => { if (post.user === user.email) posts.push(post) })
    }
    return posts
  }

  const createPost = async (post) => {
    const res = await createPostRequest(post)
    setPosts([...posts, res.data])
  }

  const deletePost = async (_id) => {
    const res = await deletePostRequest(_id)
    setPosts(posts.filter(post => post._id !== _id))
  }

  const getPost = async (_id) => {
    const res = await getPostRequest(_id)
    return res.data
  }

  const updatePost = async (id, newPost) => {
    const res = await updatePostRequest(id, newPost)
    setPosts(posts.map((post) => (post._id === id ? newPost : post)))

  }


  return (
    <postContext.Provider value={{ setPosts, getPosts, createPost, deletePost, getPost, updatePost }}>
      {children}
    </postContext.Provider>
  )
}
