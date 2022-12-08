import React from "react";
import { useState } from "react";

// By using Functional component -------------

// function Count() {
//     const [count, setCount] = useState(0)
//     return (
//         <>
//         <h1>Count {count}</h1>
//         <button onClick={()=> setCount(count +1)}>Update</button>
//         <button onClick={()=>setCount(0)}>Reset</button>
//         </>
//     )
// }


//By using Class Component -------

// class Count extends React.Component{
//     constructor(){
//     super();
//     this.state={
//       count:0
//     }
    
//     }

// render(){
//     return(
//       <>
//       <div>
//         <h1>Count : {this.state.count}</h1>
//         <button onClick={()=>this.setState({count: this.state.count+1})}>Click to change</button>
//         <button onClick ={()=>this.setState({count: this.state.count=0})}>Reset All</button>
//       </div>
//       </>
//     )
//   }
// }  



// e.g.2 ---

function Count(){
    const [count, setCount] = useState(0)

    return(
        <>
        <h1>Score : {count}</h1>
        <button onClick={()=>setCount(count +1)}>+1</button>
        <button onClick={()=>setCount(count +3)}>+3</button>
        <button onClick={()=>setCount(count +5)}>+5</button>
        <button onClick={()=>setCount(0)}>Reset</button>
        </>
    )
}





export default Count;