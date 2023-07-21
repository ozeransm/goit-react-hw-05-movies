import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetData } from "./Api";

export const Reviews = ()=>{
     const { movieId } = useParams();
     const [state, setState] = useState();
     const data = useCallback(()=>{
         GetData(`movie/${movieId}/reviews`).then(({data})=>{
            //  console.log(data)
             setState(data);
         })
     },[movieId]);
 
     useEffect(()=>{
         data();
      },[data])

    return(
        <>
            <h2>Reviews</h2>
            <ul>
                {
                    state?.results.map(({author, content},i)=><li key={i}><p>Author: {author}</p><p>{content}</p></li>)
                }
            </ul>
        </>
        
    )
}