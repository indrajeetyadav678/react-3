import { useContext } from "react";
import { myConstext } from "./Contextcontroller";


const Authapp=()=>{
    const {user, logout} = useContext(myConstext);
  return(
    <>
   <h1>Welcome : {user.name}</h1> 
     <br/><br/>
    <button onClick={()=>{logout()}}>logout</button>
    </>
  );
}
export default Authapp;
