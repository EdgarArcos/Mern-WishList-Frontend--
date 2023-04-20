import { createBrowserRouter } from 'react-router-dom';
import { ErrorPage, HomePage } from '../pages/barrel';
import { FormEdit } from '../components';


export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />
    },
    {
        path: "*",
        element: <ErrorPage />
    },
    {
        path: "/posts/:id",
        element: <HomePage />
    },
])