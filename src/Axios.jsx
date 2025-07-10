import React, {useState} from "react";
// import axios from 'axios'
// import UseAlert from './UseAlert';
import UseForm from './UseForm';
// import UseFetch from '.UseFetch';
function Axios1(){
    const[email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    function validation(){
        const{error} = UseForm({email, password})
        console.log(error)
    } 
    return (
        <div>
            <input type="email" onChange={(e)=> setEmail(e.target.value)}/>
            <input type="password" onChange={(e)=> setPassword(e.target.value)}/>
            <button onClick={validation}></button>
            {error}
        </div>
        
    )
}
export default Axios1