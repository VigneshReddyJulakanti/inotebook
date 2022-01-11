import React ,{useContext} from 'react'
import noteContext from '../context/notes/notecontext'
export default function Home() {

    const a=useContext(noteContext);
    a.update();
    return (
        <div>
this is {a.state.name} age {a.state.age}




            
            
        </div>
    )
}
