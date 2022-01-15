import React from 'react'
import { useContext } from 'react';
import noteContext from '../context/notes/notecontext';

export default function NoteItem(props) {
    const context = useContext(noteContext)
    const {deleteNote}=context;
    const {title,description,_id,handleclick,note}=props;


    return (
       
<div className='col-md-4'>
<div className="card my-3">
  
  <div className="card-body">
      <div className='d-flex align-items-center'>
    <h5 className="card-title">{title}</h5>
    <i className="fas fa-edit mx-3 " onClick={()=>{handleclick(note)}}></i>
    <i className="fas fa-trash " onClick={()=>{deleteNote(_id)}}></i>
    </div>
    <p className="card-text">{description}</p> 
    </div>
   
  </div>
</div>
            
 
    )
}
