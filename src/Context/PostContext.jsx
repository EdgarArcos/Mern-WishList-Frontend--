import { useState, createContext, useContext, useEffect } from 'react'
import { getPostsRequests } from "../api/post";

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
  useEffect(() => {
    getPosts()
  }, [])
  return (
    <postContext.Provider value={{ posts, setPosts, getPosts }}>
      {children}
    </postContext.Provider>
  )
}
