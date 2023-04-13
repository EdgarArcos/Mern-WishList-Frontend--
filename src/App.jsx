import { router } from "./routes/router";
import { RouterProvider } from "react-router";
import { PostContext } from "./Context/PostContext";

function App() {

  return (
    <div className="bg-neutral-900 min-h-screen flex items-center">
      <div className="px-10 bg-red-100 m-auto">
        <PostContext>
          <RouterProvider router={router}/>
        </PostContext>
        </div>
    </div>
  )
}

export default App