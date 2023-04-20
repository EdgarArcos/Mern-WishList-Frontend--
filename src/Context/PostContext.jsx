import { useState, createContext, useContext, useEffect } from 'react'
import { getPostsRequests, createPostRequest, deletePostRequest, getPostRequest, updatePostRequest } from "../api/post";

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

  const updatePost = async (id, newPost) => {
    const res = await updatePostRequest(id, newPost)
    console.log(id);
    setPosts(posts.map((post) => (post._id === id ? newPost : post)))

  }

  useEffect(() => {
    getPosts()
  }, [])
  return (
    <postContext.Provider value={{ posts, setPosts, getPosts, createPost, deletePost, getPost, updatePost }}>
      {children}
    </postContext.Provider>
  )
}
