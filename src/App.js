import { useState,useEffect } from 'react';
import {Button,FormControl,Input,InputLabel} from '@material-ui/core';
import './App.css';
import Todo from "./Todo.js";
import db from './firebase.js';
import firebase from 'firebase';
function App() {

  const [todos,setTodos] = useState([]);
  const [input,setInput] = useState('');
  useEffect(()=>{
   db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot => {
     setTodos(snapshot.docs.map(doc => ({id:doc.id,todo:doc.data().todo})))

   })
  },[]);
  const addTodo = (event) => {
    event.preventDefault();
    db.collection('todos').add({
      todo : input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  }
  return (
    <div className="App">
    <h1>Add ToDo!!</h1>
    <FormControl>
  <InputLabel htmlFor="my-input">Add ToDo</InputLabel>
  <Input value={input} onChange={event => setInput(event.target.value)} />
  <Button disabled={!input} variant="contained" onClick={addTodo} color="primary">
  Add ToDo
</Button>
</FormControl>
  
    <ul>
      {todos.map(todo => (
        <Todo todo={todo} />
      ))}
    </ul>
    </div>
  );
}

export default App;
