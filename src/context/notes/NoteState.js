import noteContext from "./notecontext";
import { useState } from "react";
const NoteState=(props)=>{

    const s1={
        "name":"vignesh",
        "age":18
    }
    const [state, setstate] = useState(s1);


    const update =()=>{
    
     setTimeout(() => {
         setstate({
             "name":"boom",
             "age":1
         })
        
    }, 3000);
}
    return(
    <noteContext.Provider value={{state,update}}>
        {props.children}
    </noteContext.Provider>
    )
}

export default NoteState