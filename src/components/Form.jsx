import {useState} from'react'
function Form(){
    const [name, setName]= useState(" ")
    const handleSubmit = (e)=> {e.preventDefault();
        alert(`The name is :${name}`)};

    return(
        <form onSubmit={handleSubmit}>
            <label>Enter the name:
                <input type ="text" value={name} 
                onChange={(e)=>setName(e.target.value)}/>
                
            </label>
            <button type="submit">submit</button>

        </form>
    )
}
export default Form;
