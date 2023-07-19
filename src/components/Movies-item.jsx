import { useParams } from "react-router-dom"
import { useState, useCallback, useEffect } from "react";
import { GetData } from "./Api";
export const MoviesItem = ()=>{
    const { movieId } = useParams();
    console.log(movieId);
    const [state, setState] = useState(null);
    const data = useCallback(()=>{
        GetData(`movie/${movieId}`).then(({data})=>{
            // console.log(data)
            setState(data);
        })
    },[])

    useEffect(()=>{
        data();
    },[data])
    return(
        <>
            <img src={`https://image.tmdb.org/t/p/w500${state?.backdrop_path}`} alt={state?.title} width="400"/>
            <h3>{state?.title}</h3>
            <p>User Score</p>
            <p>Overview:</p>
            <span>{state?.overview}</span>
            <p>Genres:</p>
            <span>{state?.genres.map(({name})=>name).join(' ')}</span>
            
        </>
    )
}