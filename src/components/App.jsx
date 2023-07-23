import { lazy } from "react";
import {  Route, Routes } from "react-router-dom"
import { Layout } from "pages/Layout";

const Home = lazy(()=>import("../pages/Home"));
const Movies = lazy(()=>import("../pages/Movies"));
const Cast = lazy(()=>import("../components/Cast"));
const Reviews = lazy(()=>import("../components/Reviews"));
const MovieDetails = lazy(()=>import("../components/MovieDetails"));

export const App = () => {
  
  return (
    <div className='container'>
      <Routes>
        <Route path="/" element={<Layout/>}> 
          <Route index element={<Home/>}/>
          <Route path="movies" element={<Movies />}/>
          <Route path="/search/:movieId" element={<MovieDetails/>}>
            <Route path="cast" element={<Cast/>}/>
            <Route path="reviews" element={<Reviews/>}/>
          </Route>   
        </Route>

      </Routes>
    </div>

  );
};
