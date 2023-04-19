import { router } from "./routes/router";
import { RouterProvider } from "react-router";
import { PostProvider } from "./Context/PostContext";
import { Toaster } from "react-hot-toast";

function App() {

  return (
    <div className="bg-neutral-900 min-h-screen grid place-items-center">
      <PostProvider>
        <RouterProvider router={router} />
        <Toaster />
      </PostProvider></div>
  )
}

export default App