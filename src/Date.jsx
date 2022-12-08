import React from "react";

let curDate = new Date(2022, 11, 30, 21);
curDate = curDate.getHours();
let greetings = "";

if (curDate >= 0  && curDate < 12){
    greetings = "Good Morning";
} else if (curDate >= 12 && curDate <18) {
    greetings = "Good Afternoon";
} else if (curDate >= 18 && curDate <20) {
    greetings = "Good Evening";
} else {
    greetings = "Good Night";
}

export {curDate, greetings};