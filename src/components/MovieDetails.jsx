import { Link, Outlet, useLocation, useParams } from "react-router-dom"
import { useState, useEffect, useCallback, useRef } from "react";
import { GetData } from "./Api";
export const MovieDetails = ()=>{
    const { movieId } = useParams();
    const locationRef = useRef(useLocation());
    
    const [state, setState] = useState(null);
    const data = useCallback(()=>{
        GetData(`movie/${movieId}`).then(({data})=>{
            // console.log(data)
            setState(data);
        })
    },[movieId])

    useEffect(()=>{
       data();
    },[data])
    const imgPath = state ?  `https://image.tmdb.org/t/p/w500${state.poster_path}` : '';
    
    return(
        <>
            <Link to={locationRef.current.state.from}>Back</Link>
            <img src={imgPath} alt={state?.title} width="400"/>
            <h3>{state?.title}</h3>
            <p>User Score</p>
            <p>Overview:</p>
            <span>{state?.overview}</span>
            <p>Genres:</p>
            <span>{state?.genres.map(({name})=>name).join(' ')}</span>
            <Link to={`/movies/${movieId}/cast`}>Cast</Link>
            <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
            <Outlet/>
        </>
    )
}