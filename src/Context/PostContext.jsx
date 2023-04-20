import { useState, createContext, useContext, useEffect } from 'react'
import { getPostsRequests, createPostRequest, deletePostRequest, getPostRequest } from "../api/post";

export const postContext = createContext()


export const usePosts = () => {
  const context = useContext(postContext)
  return context
}

export function PostProvider({ children }) {
  const [posts, setPosts] = useState([])
  const getPosts = async () => {
    const resultado = await getPostsRequests()
    setPosts(resultado.data)
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

  useEffect(() => {
    getPosts()
  }, [])
  return (
    <postContext.Provider value={{ posts, setPosts, getPosts, createPost, deletePost, getPost }}>
      {children}
    </postContext.Provider>
  )
}
