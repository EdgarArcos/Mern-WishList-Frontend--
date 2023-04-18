import { createBrowserRouter } from 'react-router-dom';
import { ErrorPage, FormPost, HomePage } from '../pages/barrel';


export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />
    },
    {
        path: "new",
        element: <FormPost />
    },
    {
        path: "*",
        element: <ErrorPage />
    },
])