import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {

  const [inputText, setInputText] = useState('');
  const [todos,setTodos]= useState([])
  const [status, setStatus] = useState('all')
  const [filteredTodos, setFilteredTodos] = useState([]);
  
  //useEffect runs one when the app starts
  useEffect(()=>{
    getTodos();
  }, []);
  //useEffect
  useEffect(()=>{

      const filterHandler =()=>{
    switch(status){

      case "completed":
        setFilteredTodos(todos.filter((todo)=> todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo)=> todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
        
  } 
      filterHandler();

       //Save to local storage 
 const saveTodos = ()=>{

     if (todos.length > 0) { 
      localStorage.setItem('todos',JSON.stringify(todos)) 
    };
}
      saveTodos();
  }, [todos, status]);


 const getTodos = ()=>{
  
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]))
    }else{
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal)
    }
}

  return (
    <div className="App">
    <header>
      <h1>Todo List</h1>
    </header>
      <Form  todos={todos} 
        setTodos={setTodos} 
        inputText= {inputText} 
        setInputText = {setInputText} 
        setStatus={setStatus} 
          
        />
      <TodoList todos={todos} setTodos={setTodos} filteredTodos ={filteredTodos}/>
    </div>
  );
}

export default App;
