import { createContext, useState } from "react";


const myConstext=createContext();


const Contextcontroller=({children})=>{
    const [user, setuser]=useState({name:"",auth:false});

    const login=(nm)=>{
        setuser({name:nm,auth:true})
    }
    const logout=()=>{
        setuser({name:"",auth:false})
    }
    return(
        <>
        <myConstext.Provider value={{user, login, logout}}>
          {children}
        </myConstext.Provider>
        
        </>
    );
}
export default Contextcontroller;

export {myConstext};