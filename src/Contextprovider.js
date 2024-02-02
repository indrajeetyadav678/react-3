import { createContext,useState } from "react";

const maincontex=createContext();

const Contextprovider=()=>{
    const [val,setVal]=useState({name:"",auth:false});
    const login=()=>{

    }
    const logout=()=>{
        
    }
    return(
        <>
        
        </>
    );

}
export default Contextprovider;