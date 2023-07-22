import { Link, Outlet, useLocation, useParams } from "react-router-dom"
import { useState, useEffect, useCallback, useRef } from "react";
import { GetData } from "./Api";
import noImg from "../img/no-image.jpg";
import css from "./MovieDetails.module.css";
const MovieDetails = ()=>{
    const { movieId } = useParams();
    const locationRef = useRef(useLocation());
    
    const [state, setState] = useState(null);
    const data = useCallback(()=>{
        try{
            GetData(`movie/${movieId}`).then(({data})=>{
                // console.log(data)
                setState(data);
            })
        }catch(error){
            console.log(error);
        }
        
    },[movieId])

    useEffect(()=>{
       data();
    },[data])

    const imgPath = state && state.poster_path ?  `https://image.tmdb.org/t/p/w500${state.poster_path}` : noImg;
    
    return(
        <>
            
            <Link className={css.link} to={locationRef.current.state.from}>Go back</Link>
            <div className={css.movdet}>
                <div>
                    <img src={imgPath} alt={state?.title} width="400px"/>
                </div>
                <div>
                    <h3>{state?.title}</h3>
                    <p>User Score: <span>{Math.floor(state?.vote_average * 10) || 'no user score '}%</span></p>
                    <h4>Overview: </h4>
                    <span>{state?.overview || 'no overview'}</span>
                    <h4>Genres: </h4>
                    <span>{!state?.genres.length ? 'no genres' :state?.genres.map(({name})=>name).join(' ')}</span>
                </div>
            </div>
            <h4>Additional informaton</h4>
            <ul className={css.list}>
                <li><Link to={`/movies/${movieId}/cast`}>Cast</Link></li>
                <li><Link to={`/movies/${movieId}/reviews`}>Reviews</Link></li>
            </ul>
            <Outlet/>
        </>
    )
}
export default MovieDetails;