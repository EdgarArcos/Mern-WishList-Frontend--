import { useState, createContext, useContext, useEffect } from 'react'
import { getPostsRequests, createPostRequest, deletePostRequest, getPostRequest, updatePostRequest } from "../api/post";
import { useAuth0 } from "@auth0/auth0-react";

export const postContext = createContext()


export const usePosts = () => {
  const context = useContext(postContext)
  return context
}

export function PostProvider({ children }) {
  const [posts, setPosts] = useState([])
  const { user } = useAuth0()
  console.log(user);
  const getPosts = async (user) => {
    const resultado = await getPostsRequests()
    resultado.data.map((post) => { post.user === user ? console.log(post) : post })
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
