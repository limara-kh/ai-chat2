
// import { useEffect, useState } from "react";
// import axios from 'axios';

// function Child() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [response, setResponse] = useState('');
//     const [data, setData] = useState([]);
//     const [state, setState] = useState('');
//     const [loading, setLoading] = useState(false);

//     function send() {
//         axios.post(`https://683ffb195b39a8039a5658ce.mockapi.io/users`, {
//             email: email,
//             password: password
//         })
//         .then(res => setResponse('Өтінім жіберілді: ' + res.data.id));
//     }

//     function get_data() {
//         setLoading(true);
//         setState('Loading...');

//         axios.get(`https://683ffb195b39a8039a5658ce.mockapi.io/users`)
//             .then(res => setData(res.data));

//         setTimeout(() => {
//             setState('Деректер алынды');
//             setLoading(false);
//         }, 2000); 
//     }

//     useEffect(() => {
//         if (response) {
//             alert(response);
//         }
//     }, [response]);

//     // Жаңа useEffect: деректер алынды кезде alert
//     useEffect(() => {
//         if (state === 'Деректер алынды') {
//             alert(state);
//         }
//     }, [state]);

//     return (
//         <div>
//             <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
//             <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
//             <button onClick={send}>submit</button>
//             <div>{response}</div>

//             <button onClick={get_data}>Деректерді алу</button>
//             <div>{state}</div>

//             {!loading && data.map((n) => (
//                 <div key={n.id}>
//                     <p>{n.name}</p>
//                     <p>{n.email}</p>
//                     <p>{n.username}</p>
//                     <p>{n.phone}</p>
//                     <p>{n.password}</p>
//                     <p>{n.confirm_password}</p>
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default Child;
