// import useSearchFilter from "./useSearshFilter"
// import { useState } from "react"
// function ClothesList(){
// const[items, setItems] =useState([
//     {name: "Suit", brand: "GUCCI", price: 1340000},
//     {name: "Skirt", brand: "CHANEL", price: 267000},
//     {name: "Jeans", brand: "CALVIN KLEIN", price: 45700},
//     {name: "Bluse", brand: "CELINE", price: 89000},
//     {name: "Jacket", brand: "BALENSIAGA", price: 67000},
//     {name: "Shirt", brand: "POLO", price: 63400},
//     {name: "Cap", brand: "NIKE", price: 55000},
// ])

//     const{search, setSearch, filteredItems} = useSearchFilter(items)

//     return(
//         <div>
//             <input type="text" onChange={(e)=> setSearch(e.target.value)} />
//             {filteredItems.map(item=>{
//                 return(
//                     <div><p>{item.name}</p>
//                     <p>{item.brand}</p>
//                          <p>{item.price}</p>   </div>
               
//             )
//             })}
//         </div>
//     )
// }

// export default ClothesList