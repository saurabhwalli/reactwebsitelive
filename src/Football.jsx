import React from "react";


//Creating simple function ---- 

// function Football(){
//     const shot = () =>{
//         alert("Great Shot!!!")
//     }

//     return(
//        <button onClick = {shot}> Take the shot</button>
//     )
// }

// By passing arguments in function ----
 
function Football(){
    const shot = (a) =>{
        alert(a)
    }

    return(
       <button onClick= {() => shot("Goal..!")}> Take the shot</button>
    )
}

// ------------------------------------------------------------------------------------------







export default Football;
