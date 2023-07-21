import { Home } from "pages/Home";
import { Layout } from "pages/Layout";
import { Movies } from "pages/Movies";
import {  NavLink, Route, Routes } from "react-router-dom"

import { Cast } from "./Cast";
import { Reviews } from "./Reviews";
import { MovieDetails } from "components/MovieDetails";

export const App = () => {
  
  return (
    <div>
      <nav>
        <NavLink to="/"><h2>Home</h2></NavLink>
        <NavLink to="/movies"><h2>Movies</h2></NavLink>
      </nav>
      
      <Routes>
        <Route path="/" element={<Layout/>}> 
          <Route index element={<Home/>}/>
          <Route path="/:movieId" element={<MovieDetails/>}/>
          <Route path="movies" element={<Movies />}/>
          <Route path="movies/:movieId" element={<MovieDetails/>}>
            <Route path="cast" element={<Cast/>}/>
            <Route path="reviews" element={<Reviews/>}/>
          </Route>   
            
        </Route>

      </Routes>
    </div>

  );
};
