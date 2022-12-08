import React from "react";
import { useState } from "react";


// function MyForm(){
//     const [name, setName] = useState("");

//     function handleSubmit(e){
//         e.preventDefault();
//         alert(`The name you entered was: ${name}`);
//     }

//     return (
        
//         <form onSubmit={handleSubmit}>
//         <input type = "text" value={name} onChange={(e)=>setName(e.target.value)}></input>
//         <button type="submit">Click here </button>
        
//         </form>
        
//     )
// }



// function MyForm(){

//     const [name, setName] = useState() ; 
//     const [fullName, setFullName] = useState();


//     function onSubmit(e){
//         setFullName(name);
//         e.preventDefault();
//     }

//     function inputEvent(e){
//         setName(e.target.value)
//     }
    
//     return(
//         <>
//         <form onSubmit={onSubmit}>
//         <div style={{textAlign : "center"}}>
//         <h1>Hello, {fullName}</h1>
//         <input type="text" placeholder="Enter your Name" onChange={inputEvent} value={name}></input>
//         <br />
//         <br />
//         <button onClick={onSubmit}>Click Me</button>
//         <button type="Reset">Reset</button>
        
//         </div>
//         </form>
//         </>
//     )
// }



function MyForm(){

    const [name, setName] = useState("") ; 
    const [lastName, setLastName] = useState("");
    const [fullName, setFullName] = useState("");
    const [lastNameNew, setlastNameNew] = useState("");


    function onSubmit(e){
        setFullName(name);
        setlastNameNew(lastName);
        e.preventDefault();
    }

    function inputEvent(e){
        setName(e.target.value)
    }

    function inputEventTwo(e){
        setLastName(e.target.value)
    }
    
    return(
        <>
        <form onSubmit={onSubmit}>
        <div style={{textAlign : "center"}}>

        <h1>Hello, {fullName} {lastNameNew}</h1>
        <input type="text" placeholder="Enter your First Name" onChange={inputEvent} value={name}></input>
        <br />
        <br />
        <input type="text" placeholder="Enter your Last Name" onChange={inputEventTwo} value={lastName}></input>
        <br />
        <br />
        <button onClick={onSubmit}>Click Me</button>
        <button htmlType="reset" type="reset">Reset</button>
        
        </div>
        
        </form>
        </>
    )
}





export default MyForm;