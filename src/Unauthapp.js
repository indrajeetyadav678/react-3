
import { useContext, useState } from "react";
import { myConstext } from "./Contextcontroller";


const Unauthapp=()=>{
    const [use,setUser]=useState("")
    const {login} = useContext(myConstext);
  return(
    <>
        <h1>Welcome</h1>

    <input type="text" value={use} onChange={(e)=>{setUser(e.target.value)}}></input>
<br/><br/>
    <button onClick={()=>{login(use)}}>login</button>
    </>
  );
}
export default Unauthapp;