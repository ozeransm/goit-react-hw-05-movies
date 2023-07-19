import { GetData } from "components/Api"
import { ListFilms } from "components/ListFilms";
import { useCallback, useEffect, useState } from "react"

export const Home = ()=>{
    const [state, setState] = useState(null);
    const data = useCallback(()=>{
        GetData('trending/all/day').then(({data})=>{
            // console.log(data.results)
            setState(data.results);
        })
    },[])

    useEffect(()=>{
        data();
    },[data])
    return(
        <>
            <h2>Home</h2>
            <ListFilms data={state}/>
                        
        </>    
        
    )
}