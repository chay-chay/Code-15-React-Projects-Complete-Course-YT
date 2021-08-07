import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "hello", type: "success" });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      // display alert
      // instead of usiing  setAlert({show:true, msg:'Please enter value', type: 'danger'})
      // set to function and pass arg
      showAlert(true, 'danger', 'Please enter value')
    } else if (name && isEditing) {
      // deal with edit

    } else {
      // show alert (if  everything is correct)
      showAlert(true, 'success','item added to the list')
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName("");
    }
  };
  // set show = false by default
  const showAlert = (show=false, type='', msg='') => {
    setAlert({show, type, msg})
  }

  const clearList = () => {
showAlert(true, 'danger', 'empty list')
setList([])
  }
  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} />}
        <h3>grocery bud</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.g. eggs"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            {isEditing ? "edit" : "submit"}
          </button>
         
        </div>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
        <List items={list} />
          <button className="clear-btn" onClick={clearList}>clear items</button>
        </div>
      )}
    </section>
  );
}

export default App;
