import { useSearchParams } from "react-router-dom"
import { useCallback, useEffect, useState } from "react";
import { GetData } from "components/Api";
import { ListFilms } from "components/ListFilms";

const Movies = ()=>{
    
    const [inpVal, setInpVal] = useSearchParams();
    const searchQuery = inpVal.get('search_val');
    const [state, setState] = useState(null)
    const data = useCallback(()=>{
        try{
            searchQuery && GetData('search/movie', searchQuery).then(({data})=>{
                // console.log(data.results)
                setState(data.results);
            })
        }catch(error){
            console.log(error);
        }
        
    },[searchQuery])
    
    useEffect(()=>{
        data();
        
    // eslint-disable-next-line
    },[])
    
    const handlerSubmit = (e)=>{
        e.preventDefault();
        data();
    }

    return(
        <>
            <form action="submit" onSubmit={handlerSubmit}>
                <input type="text" value={inpVal.search_val} onChange={(e)=>{setInpVal({search_val: e.target.value})}}/>
                <button type="submit">Search</button>
            </form>                        
            
            <ListFilms data={state} from={{from: `/movies/?search_val=${searchQuery}`}}/>
            
        </>
        
    )
}
export default Movies;