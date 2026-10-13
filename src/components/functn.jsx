import React, { useState } from 'react'


function Name(){
  
const [name,setName]=useState("angel");
  
    return (
      <div>
        <h1>Welcome {name}</h1>
        <button onClick={()=>setName("")}>clear</button>
      </div>
    )
  }

export default Name;
