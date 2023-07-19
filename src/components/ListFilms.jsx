import { Link } from "react-router-dom";
export const ListFilms = ({data})=>{
    return(
        <>
            <ul>
                {data?.map(({name, title, original_title, id})=><li key={id}><Link to={`${id}`}>{name || title || original_title}</Link></li>)}
            </ul>
        </>
    )
}