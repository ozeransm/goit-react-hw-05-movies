import { Link } from "react-router-dom";
export const ListFilms = ({data,from})=>{
    
    return(
        <>
            <ul>
                {data?.map(({name, title, original_title, id})=><li key={id}><Link to={`/search/${id}`} state={from}>{name || title || original_title}</Link></li>)}
            </ul>
        </>
    )
}