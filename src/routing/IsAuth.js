import { Navigate, Outlet } from "react-router-dom"

const ProtectRoute=()=>{
    const isAuthToken=window.localStorage.getItem("uid")
    console.log(isAuthToken)
    return isAuthToken ? <Outlet/> : <Navigate to="/login"/>
}
export default ProtectRoute