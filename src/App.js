import { useContext } from "react";
import Authapp from "./Authapp";
import { myConstext } from "./Contextcontroller";
import Unauthapp from "./Unauthapp";


const App=()=>{
    const {user}=useContext(myConstext);

    return(
        <>
        {user.auth?<Authapp/>:<Unauthapp/>}
        
        </>
    );
}
export default App;
