import useSearchFilter from "./useSearshFilter"
import { useState } from "react"
function BookList(){
const[items, setItems] =useState(['Abay zholy', 'Gaukhar Tas', 'Suiekshi'])

    const{search, setSearch, filteredItems} = useSearchFilter(items)

    return(
        <div>
            <input type="text" onChange={(e)=> setSearch(e.target.value)} />
            {filteredItems.map(item=>{
                return(<p>{item}</p>)
            })}
        </div>
    )
}

export default BookList