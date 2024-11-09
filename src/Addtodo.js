import React, { useState } from 'react';

export const Addtodo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e)=>{
         e.preventdefault();
         if (!title || !desc){
            alert("Title or Description cannot be blank")
         }
         props.addtodo(title,desc);
    }

  return (
    <div classNameName="container my-3 ">
        <h3>Add a todo</h3>
      <htmlForm onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="htmlForm-label">
           Todo Title
          </label>
          <input
            type="text" value={title} onChange={(e) => setTitle(e.target.value)}
            className="htmlForm-control"
            id="title"
            aria-describedby="emailHelp"/>
           </div>
          
       
        <div className="mb-3">
          <label htmlFor="desc" className="htmlForm-label">
            Todo Description
          </label>
          <input
            type="text" value={desc} onChange={(e) => setDesc(e.target.value)}
            className="htmlForm-control"
            id="desc"/>
          
        </div>
      
        <button type="submit" className="btn btn-sm btn-success">
          Add Todo
        </button>
      </htmlForm>
    </div>
  );
};

export default Addtodo;
