import { router } from "./routes/router";
import { RouterProvider } from "react-router";

function App() {

  return (
    <div className="bg-neutral-900 min-h-screen flex items-center">
      <div className="px-10 bg-red-100 m-auto">
        <RouterProvider router={router}/>
        </div>
    
    </div>
  )
}

export default App