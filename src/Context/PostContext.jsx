import {useState, createContext} from 'react'

export const context = createContext()

export function PostContext({children}) {
    const [posts, setPosts] = useState()
    console.log(posts);
  return (
    <context.Provider value={{posts,setPosts}}>
        {children}
    </context.Provider>
  )
}
