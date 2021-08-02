import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });
  const handleSubmit = e => {
    e.preventDefault()
    console.log("hi")
  }
  return (
    <section className="section-center">
    <form className='grocery-form' onSubmit={handleSubmit}>
      {alert.show && <Alert />}
      <h3>grocery bud</h3>
      <div className='form-control'>
        <input type='texrt' />
        <button type='submit' className='submit-btn'>
          {isEditing? 'edit' : 'submit'}
        </button>
      </div>
    </form>
      <div className="grocery-container"></div>
      <List />
      <button className='clear-btn'>clear items</button>
     
    </section>
  );
}

export default App;
