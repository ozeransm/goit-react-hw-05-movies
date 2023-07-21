import { Home } from "pages/Home";
import { Layout } from "pages/Layout";
import { Movies } from "pages/Movies";
import {  NavLink, Route, Routes } from "react-router-dom"
import { MoviesItem } from "./Movies-item";
import { useRef } from "react";
export const App = () => {
  const firstLoadSearch = useRef(true);
  return (
    <div>
      <nav>
        <NavLink to="/"><h2>Home</h2></NavLink>
        <NavLink to="/movies"><h2>Movies</h2></NavLink>
      </nav>
      
      <Routes>
        <Route path="/" element={<Layout/>}> 
          <Route index element={<Home/>}/>
          <Route path="/:movieId" element={<MoviesItem/>}/>
          <Route path="movies" element={<Movies firstLoadSearch={firstLoadSearch}/>}/>
          <Route path="movies/:movieId" element={<MoviesItem/>}/>
            
        </Route>

      </Routes>
    </div>

  );
};
