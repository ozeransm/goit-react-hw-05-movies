import { GetData } from "components/Api"
import { ListFilms } from "components/ListFilms";
import { useEffect, useState } from "react"
const Home = ()=>{
    const [state, setState] = useState(null);
    const data = ()=>{
        try{
            GetData('trending/all/day').then(({data})=>{
                setState(data.results);
            })
        }catch(error){
            console.log(error);
        }
        
    }

    useEffect(()=>{
        data();
        
    },[])
    return(
        <>
            <h2>Trending today</h2>
            <ListFilms data={state} from={{from: '/'}}/>
                        
        </>    
        
    )
}
export default Home;