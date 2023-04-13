import {useContext} from 'react'
import { context } from "../Context/PostContext";

export function HomePage() {
  const {setPosts} = useContext(context)
  return (
    <div>
      <h1>HomePage</h1>
      </div>
  )
}
