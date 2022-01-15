import noteContext from "./notecontext";
import { useState } from "react";



const NoteState=(props)=>{
  
  
  const host ="http://localhost:5000";


    const fetchallnotes=async (id)=>{
      const auth_token=localStorage.getItem('authtoken');
      const response = await fetch(`${host}/api/notes/getNotes`, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json',
          'auth-token': auth_token
         
        },
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
       // body data type must match "Content-Type" header
      });
      let fetchednotes=await response.json(); // parses JSON response into native JavaScript objects
      setfanotes(fetchednotes);
    }

    let n1=
        [
        
          ]

        const [fanotes, setfanotes] = useState(n1)

        //add Note

  
      

        const addNote=async(title,description,tag)=>{
          const auth_token=localStorage.getItem('authtoken');
          //API CALL


          const response =  await fetch(`${host}/api/notes/addNotes`, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
              'Content-Type': 'application/json',
              'auth-token': auth_token
             
            },
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify({title,description,tag}) // body data type must match "Content-Type" header
          });
          const resp= await response.json(); // parses JSON response into native JavaScript objects
          console.log(resp)


        
            setfanotes(fanotes.concat(resp));
        }

        // delete Note
        const deleteNote=async(id)=>{
          const auth_token=localStorage.getItem('authtoken');

          
            await fetch(`${host}/api/notes/deleteNote/${id}`, {
            method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
              'Content-Type': 'application/json',
              'auth-token': auth_token
             
            },
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
             // body data type must match "Content-Type" header
          });

          // client side delete
          let newnote=fanotes.filter((note)=>{return note._id!==id})
          setfanotes(newnote);
        }
        
        // edit Note
        const editNote=async(title,description,tag,id)=>{
          const auth_token=localStorage.getItem('authtoken');

          // API call
          const response = await fetch(`${host}/api/notes/updateNote/${id}`, {
            method: 'PUT', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
              'Content-Type': 'application/json',
              'auth-token': auth_token
             
            },
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
             // body data type must match "Content-Type" header
             body: JSON.stringify({title,description,tag})
          });

          // logic in client

          let newnotes=fanotes.slice();
          console.log(id)
          for (let index = 0; index < newnotes.length; index++) {
            const element = newnotes[index];
            console.log(element._id)
            
            if(element._id===id){
              newnotes[index].title=title;
              newnotes[index].description=description;
              newnotes[index].tag=tag;
              
              
              break;
            }
          }
       
          setfanotes(newnotes);
      

          
          
        }


 
    return(
    <noteContext.Provider value={{fanotes,addNote,deleteNote,fetchallnotes,editNote,host}}>
        {props.children}
    </noteContext.Provider>
    )
}

export default NoteState