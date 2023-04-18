import { router } from "./routes/router";
import { RouterProvider } from "react-router";
import { PostProvider } from "./Context/PostContext";

function App() {

  return (
    <div className="bg-neutral-900 min-h-screen flex items-center">
      <PostProvider>
        <RouterProvider router={router} />
      </PostProvider>
    </div>
  )
}

export default App