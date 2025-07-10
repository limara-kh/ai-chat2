import { useState } from "react";
import './UST.css'
// function UST(){
//     const [count, setCount] = useState(0);
//     return(
//         <div>
//             <p>San: {count}</p>
//             <button onClick={() => setCount(count + 1)}>+</button>
//             <button onClick={() => setCount(count - 1)}>-</button>
//         </div>   
//         )
// }

// function UST() {
//     const [users, setUsers] = useState(['Alice', 'Bob', 'Charlie'])
//     return(
//         <ul>
//             {users.map((user,index)=>{
//                 return <li key={index}>
//                 {user}
//                 </li>
//             })}
//         </ul>
//     )
// }
// function UST() {
//     const [text, setText] = useState('')
//     function Change(e){
//         setText(e.target.value)
//     }
//     return(
//         <div>
//             <input onChange={Change} type="text" />
//             <p>Terilgen text:{text}</p>
//         </div>
//     )
// }



// function UST() {
//     const [task, setTask] = useState('');
//     const [tasks, setTasks] = useState([]);
  
//     const handleAddTask = () => {
//       if (task.trim() === '') return;
//       setTasks([...tasks, task]);
//       setTask('');
//     };
  
//     const handleClearTasks = () => {
//       setTasks([]);
//     };
  
//     return (
//       <div className="todo-container">
//         <div className="input-row">
//           <input
//             type="text"
//             value={task}
//             onChange={(e) => setTask(e.target.value)}
//             className="input-box"
//             placeholder="Жаңа тапсырма"
//           />
//           <button onClick={handleAddTask} className="add-button">Қосу</button>
//           <button onClick={handleClearTasks} className="clear-button">Тазалау</button>
//         </div>
  
//         <ul className="task-list">
//           {tasks.map((item, index) => (
//             <li key={index} className="task-item">{item}</li>
//           ))}
//         </ul>
//       </div>
//     );
// }
// function UST(){
    // const isLoggetIN = true;
    // const isAdmin = true;
    // const isSubscribed = false;
    // return <div>
    //     {isLoggetIN && <p>Қош келдіңіз, пайдаланушы!</p>}
    //     {isAdmin && <p>Сіз әкімшісіз!</p>}
    //     {isSubscribed && <p>Сіз Premium қолданушысыз!</p> || <p>Қарапайым қолданушы!</p>}
    // </div>
//     const isDarkmood = false;
//     return(
//         <div>
//            <p>{isDarkmood ? "Қараңғы режим қосу" :  "Жарық режим қосу"}</p>
//         </div>
//     );
// }
// const isOnline = true;
//     return(
//         <div>
//            <p>{isOnline? "Қолданушы онлайн" :  "Қолданушы офлайн"}</p>
//         </div>
//     );
// }
// const isTemperature = 50;
//     return(
//         <div>
//            <p>{isTemperature > 60? "Жылы" :  "Суық"}</p>
//         </div>
//     );
// }

// function UST(){
//     const[show, setShow] = useState(false)
//     return(
//         <div>
//             <button onClick={() => setShow(!show)}>
//                 {show ? "Жасыру" : "Көрсету"}
//             </button>
//             {show && <p>Бұл қосымша ақпарат!</p>}
//         </div>
//     )
// }

export default UST
