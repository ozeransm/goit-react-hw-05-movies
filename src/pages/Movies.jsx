import { useSearchParams } from "react-router-dom"
import { useState } from "react";
import { GetData } from "components/Api";
import { ListFilms } from "components/ListFilms";

export const Movies = ()=>{
    const [inpVal, setInpVal] = useSearchParams();
    const [state, setState] = useState(null)
    const data = ()=>{
        GetData('trending/all/day').then(({data})=>{
            console.log(data.results)
            setState(data.results);
        })
    }
    

    const handlerBtn = ()=>{
        console.log("kjdfvnskljdflkgdfkl");
        data();
    }

    return(
        <>
            <h2>Movies</h2>
            
            <input type="text" value={inpVal.search_val} onChange={(e)=>{setInpVal({search_val: e.target.value})}}/>
            <button type="button" onClick={handlerBtn}>Search</button>
            <ListFilms data={state}/>
        </>
        
    )
}