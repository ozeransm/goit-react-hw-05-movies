import { useCallback, useEffect, useState } from "react";
import { GetData } from "components/Api";
import { useParams } from "react-router-dom";
export const Cast = ()=>{
    const { movieId } = useParams();
    const [state, setState] = useState();
    const data = useCallback(()=>{
        GetData(`movie/${movieId}/credits`).then(({data})=>{
            // console.log(data)
            setState(data);
        })
    },[movieId]);

    useEffect(()=>{
        data();
     },[data])
    
    return(
        <>
            <h2>Cast</h2>
            <ul>
            {
                state?.cast.map(({character, name, profile_path, id})=>
                    <li key={id}>
                        <img src={state ?  `https://image.tmdb.org/t/p/w500${profile_path}` : ''} alt={name} width="200"/>
                        <p>{name}</p>
                        <p>{character}</p>
                        </li>)
            }
            </ul>
        </>
        

    )
}