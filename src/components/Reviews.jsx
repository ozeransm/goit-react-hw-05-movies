import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetData } from "./Api";

const Reviews = ()=>{
     const { movieId } = useParams();
     const [state, setState] = useState();
     const data = useCallback(()=>{
        try{
            GetData(`movie/${movieId}/reviews`).then(({data})=>{
                //  console.log(data)
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
            {!state?.results.length && <h3>no result</h3>}
            <ul>
                {
                    state?.results.map(({author, content},i)=><li key={i}><p>Author: {author}</p><p>{content}</p></li>)
                }
            </ul>
        </>
        
    )
}
export default Reviews;