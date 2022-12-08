import React, { useState } from "react";

function Clock(){
    let time = new Date().toLocaleTimeString();

    const [ctime, setCtime] = useState(time);
    

   function updateTime(){
    time = new Date().toLocaleTimeString();
    setCtime(time)
    }

    setInterval(updateTime, 1000);

   return (
    <>
    <div style= {{textAlign: "center"}}>
    <h1>Hello World...!</h1>
    <h2>The time is {ctime}</h2>
    </div>
    </>
   )

   
};




export default Clock;