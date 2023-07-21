import { useSearchParams } from "react-router-dom"
import { useCallback, useEffect, useState } from "react";
import { GetData } from "components/Api";
import { ListFilms } from "components/ListFilms";

export const Movies = ({firstLoadSearch})=>{
    
    const [inpVal, setInpVal] = useSearchParams();
    const searchQuery = inpVal.get('search_val');
    const [state, setState] = useState(null)
    const data = useCallback(()=>{
        GetData('search/movie', searchQuery).then(({data})=>{
            // console.log(data.results)
            setState(data.results);
        })
    },[searchQuery])
    
    useEffect(()=>{
        console.log("asd",firstLoadSearch.current);
        if(!firstLoadSearch.current){console.log("qwe",firstLoadSearch.current);data()};
        firstLoadSearch.current = false;
        // return ()=>firstLoadSearch.current = true;
    // eslint-disable-next-line
    },[])
    
    const handlerBtn = ()=>{
        data();
    }

    return(
        <>
            <h2>Movies</h2>
            
            <input type="text" value={inpVal.search_val} onChange={(e)=>{setInpVal({search_val: e.target.value})}}/>
            <button type="button" onClick={handlerBtn}>Search</button>
            <ListFilms data={state} from={{from: `/movies/?search_val=${searchQuery}`}}/>
        </>
        
    )
}