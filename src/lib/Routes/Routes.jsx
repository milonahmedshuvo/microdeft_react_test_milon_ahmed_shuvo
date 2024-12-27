import { createBrowserRouter } from "react-router";
import Login from "../../components/Login/Login";
// import Navber from "../../components/Navber/Navber";
import CardData from "../../components/CardData/CardData";
import Layout from "../Layout/Layout";
import Register from "../../components/Register/Register";

export const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Login/>
    },
    {
        path: '/register',
        element: <Register/>
    },
    {
        path:'/home',
        element:<Layout/> ,
        children: [
            {
                path: '/home',
                element: <CardData/>
            },
            
        ]
    }
])