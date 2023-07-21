import { GetData } from "components/Api"
import { ListFilms } from "components/ListFilms";
import { useEffect, useState } from "react"
export const Home = ()=>{
    const [state, setState] = useState(null);
    const data = ()=>{
        GetData('trending/all/day').then(({data})=>{
            setState(data.results);
        })
    }

    useEffect(()=>{
        data();
        
    },[])
    return(
        <>
            <h2>Home</h2>
            <ListFilms data={state} from={{from: '/'}}/>
                        
        </>    
        
    )
}