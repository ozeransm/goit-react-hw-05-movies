import { Suspense } from "react"
import { NavLink, Outlet } from "react-router-dom"
import css from "../pages/Layout.module.css";
export const Layout = ()=>{
    
    return(
        <>
        <nav className={css.nav}>
            <NavLink className={css.navLink} to="/"><h2>Home</h2></NavLink>
            <NavLink className={css.navLink} to="/movies"><h2>Movies</h2></NavLink>
        </nav>
        <Suspense>
            <Outlet/>
        </Suspense>
        </>
        
    )
}