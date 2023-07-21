import { Link, useLocation, useParams } from "react-router-dom"
import { useState, useEffect, useCallback } from "react";
import { GetData } from "./Api";
export const MoviesItem = ()=>{
    const { movieId } = useParams();
    const location = useLocation();
    
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
        {/* {`https://image.tmdb.org/t/p/w500${state?.poster_path}`} */}
        {/* poster_path backdrop_path*/}
            <Link to={location.state.from}>Back</Link>
            <img src={imgPath} alt={state?.title} width="400"/>
            <h3>{state?.title}</h3>
            <p>User Score</p>
            <p>Overview:</p>
            <span>{state?.overview}</span>
            <p>Genres:</p>
            <span>{state?.genres.map(({name})=>name).join(' ')}</span>
            
        </>
    )
}