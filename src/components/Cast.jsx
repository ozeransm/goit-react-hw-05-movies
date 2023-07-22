import { useCallback, useEffect, useState } from "react";
import { GetData } from "components/Api";
import { useParams } from "react-router-dom";
import noImg from "../img/no-image.jpg";
import { nanoid } from 'nanoid';
const Cast = ()=>{
    const { movieId } = useParams();
    const [state, setState] = useState();
    const data = useCallback(()=>{
        try{
            GetData(`movie/${movieId}/credits`).then(({data})=>{
                // console.log(data)
                setState(data);
            })
        }catch(error){
            console.log(error);
        }
        
    },[movieId]);

    useEffect(()=>{
        data();
     },[data])
    
    return(
        <>
            {!state?.cast.length && <h3>no result</h3>}
            <ul>
            {
                state?.cast.map(({character, name, profile_path, id})=>
                    <li key={nanoid()}>
                        <img src={ !profile_path ? noImg :`https://image.tmdb.org/t/p/w500${profile_path}`} alt={name} width="200"/>
                        <p>{name || 'no name'}</p>
                        <p>{character || 'no character'}</p>
                        </li>)
                
            }

            </ul>
        </>
        

    )
}
export default Cast;