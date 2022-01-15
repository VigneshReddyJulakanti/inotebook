import React from 'react'
import { useContext,useEffect,useRef,useState } from 'react'
import noteContext from '../context/notes/notecontext'
import NoteItem from "./NoteItem"
import { useNavigate } from "react-router-dom";

export default function Notes() {
  const a=useContext(noteContext)
  const {fanotes,fetchallnotes} = a;
 
    const navigate=useNavigate();

    useEffect(() => {
      
      
      
    
      if(!localStorage.getItem("authtoken")){
        navigate("/signin")
  
      }else{  
   
        fetchallnotes();}

     
     
    },[])


    // let notes=fanotes;

    const [enote, setenote] = useState({etitle:"",edescription:"",etag:"",eid:""})

    const ref = useRef(null)
    const closeref = useRef(null)
    const handleclick=(note)=>{
        ref.current.click();
        setenote({etitle:note.title,edescription:note.description,etag:note.tag,eid:note._id})


    }

    const ehandleonchange =(e)=>{
        setenote({...enote,[e.target.name]: e.target.value})


    }

    const handdleupdateclick =()=>{
        
            a.editNote(enote.etitle,enote.edescription,enote.etag,enote.eid);
            closeref.current.click();
        
    }






    return (

        <>
        <button hidden ref={ref} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Launch demo modal
        </button>
        
     
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">


              <div className="mb-3">
            <label htmlFor="etitle" className="form-label">title</label>
            <input value={enote.etitle} type="text" name='etitle' minLength={2} className="form-control" id="etitle" onChange={ehandleonchange}/>
            
          </div>
          <div className="mb-3">
            <label htmlFor="edescription" className="form-label">description</label>
            <input value={enote.edescription} type="text"  minLength={5} name="edescription" className="form-control" id="edescription" onChange={ehandleonchange}/>
          </div>
          <div className="mb-3">
            <label htmlFor="etag" className="form-label">tag</label>
            <input value={enote.etag} type="text" name='etag' className="form-control" id="etag"  onChange={ehandleonchange} />
          </div>
                
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" ref={closeref}>Close</button>
                <button type="button" className="btn btn-primary"  disabled={enote.etitle.length<2 || enote.edescription.length<5} onClick={handdleupdateclick}>Update</button>
              </div>
            </div>
          </div>
        </div>




        <div>
             <div className='container my-3'>

<h2> Your Notes </h2>
{ fanotes.length === 0 && "No notes available to show , Create a note above"}

<div className='row my-3'>
{


    
    fanotes.map((note)=>{
       
       return  <NoteItem key={note._id} _id={note._id} title={note.title} note={note} description={note.description} handleclick={handleclick}/>
    })
     

}
</div>

</div>
            
        </div>
        </>
    )
}
