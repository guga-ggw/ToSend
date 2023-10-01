import { Outlet } from "react-router"
import Header from "../Components/Header"
import MainPgae from "../Pages/MainPgae"
import CreatePage from "../Pages/CreatePage"
import MyCardPage from "../Pages/MyCardPage"
import SeeMorePage from "../Pages/SeeMorePage"

const routes = [
    {
        element : 
        <>
            <Header/>
            <Outlet/>
        </>,
        path : '/',
        children : [
            {
                element : <MainPgae/>,
                index : true
            },
            {
                element : <CreatePage/>,
                path : '/create'
            },
            {
                element : <MyCardPage/>,
                path : '/my_card'
            },
            {
                element : <SeeMorePage/>,
                path : '/see_more'
            }
        ]
    }
]

export default routes