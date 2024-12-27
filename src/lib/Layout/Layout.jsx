import { Outlet } from "react-router"
import Navbar from "../../components/Navber/Navber"


const Layout = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default Layout