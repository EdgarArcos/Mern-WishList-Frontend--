import { router } from "./routes/router";
import { RouterProvider } from "react-router";
import { PostProvider } from "./Context/PostContext";
import { Toaster } from "react-hot-toast";
import { Auth0Provider } from "@auth0/auth0-react";

const domain = import.meta.env.VITE_APP_AUTH0_DOMAIN
const clientId = import.meta.env.VITE_APP_AUTH0_CLIENT_ID

function App() {
  return (
    <div className="bg-neutral-900 min-h-screen grid place-items-center">
      <PostProvider>
        <Auth0Provider domain={domain} clientId={clientId} redirectUri={window.location.origin} >
          <RouterProvider router={router} />
          <Toaster />
        </Auth0Provider>
      </PostProvider></div>
  )
}

export default App