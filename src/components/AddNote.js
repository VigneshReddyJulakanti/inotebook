import React from 'react'
import { useContext ,useState} from 'react'
import noteContext from '../context/notes/notecontext'


export default function AddNote() {
    const context = useContext(noteContext)
    const [note, setnote] = useState({title:"",description:"",tag:""})
    const clickhandle=(e)=>{
        e.preventDefault()
        context.addNote(note.title,note.description,note.tag);
        setnote({title:"",description:"",tag:""})

    }
    const handleonchange=(e)=>{
        setnote({...note,[e.target.name]:e.target.value})
    }

    return (
        <div className='container'>

        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">title</label>
            <input type="text" name='title' value={note.title} minLength={2} className="form-control" id="title" onChange={handleonchange} placeholder='title of min length 2'/>
            
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">description</label>
            <input type="text"   minLength={5} value={note.description} name="description" className="form-control" id="description" onChange={handleonchange} placeholder='description of min length 5'/>
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">tag</label>
            <input type="text" name='id' className="form-control" id="tag"  onChange={handleonchange} />
          </div>
          {/* <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
          </div> */}
          <button disabled={note.title.length<2 || note.description.length<5} type="submit" className="btn btn-primary" onClick={clickhandle}>Add Note</button>
        </form>
         
                </div>
    )
}
