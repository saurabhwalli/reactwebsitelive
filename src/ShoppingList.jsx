import React, {useState} from "react";


let nextId = 0;

function ShoppingList(){
    const [name, setName] = useState("");
    const [artist, setArtist] = useState([]);

    function handleEvent(e){
        setName(e.target.value)
    }

    // function handleSubmit(){
    //     setName(""); 
    //     artist.push({id: nextId++, name: name})
    // }

    // OR handleSubmit with spread operator --  (Best use)

    function handleSubmit(){
        setName('');
        setArtist([
          ...artist,
          { id: nextId++, name: name }
        ]);
      }
    


    let Unlist = artist.map(artist =>
        (<li key= {artist.id}>  {artist.name}  </li>)  )


    return(
        <>
        <div style={{textAlign : "center"}}>
        <h1>Add Cities...</h1>

        <input value={name} onChange={handleEvent}/>

        <button onClick={handleSubmit}>Add</button>

        <ul style={{listStylePosition : "inside"}}>{Unlist}</ul>
        </div>
        </>
    )
}




export default ShoppingList;