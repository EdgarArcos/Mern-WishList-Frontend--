import { createBrowserRouter } from 'react-router-dom';
import { ErrorPage, HomePage } from '../pages/barrel';
import { FormEdit } from '../components';
import Profile from '../components/Profile';


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
    {
        path: "/Profile",
        element: <Profile />
    },
])