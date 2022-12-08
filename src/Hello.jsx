import React from "react";
import { useState } from "react";

// function Hello(){
//     const [to, setTo] = useState("");
//     const [message, setMessage] = useState("Hello ");

//     function handleEvent(e){
//         e.preventDefault();

//         setTimeout((e)=>{
//             alert(`You said ${message} to ${to}`)
//         },1000)
//     }



//     return(
//         <>
//         <form onSubmit={handleEvent}>
//         <h3>To : <select value={to} onChange={(e)=>setTo(e.target.value)}>
//             <option>Alice</option>
//             <option>Bob</option>
//         </select>
//         </h3>
//         <br />
//         {/* <textarea value={message} placeholder="Message" onChange={(e)=>setMessage(e.target.value)}>{message} </textarea> */}
//         <input type="text" value={message} placeholder="Message" onChange={(e)=>setMessage(e.target.value)} />
//         <br />
//         <br />
//         <button type="submit">Send</button>
//         </form>
//         </>
//     )
// }

//export default Hello;