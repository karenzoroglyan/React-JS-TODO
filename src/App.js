import  {useState} from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function App() {

  const [todos, setTodos] = useState([
    {
      id: Math.random(),
      text: "Learn JS",
      isCompleted: false
    },
    {
      id: Math.random(),
      text: "Learn CSS",
      isCompleted: false
    },
    {
      id: Math.random(),
      text: "Learn React", 
      isCompleted: false
    }
  ]);
  
  return (
    <div className="App">
      <TodoForm />
      <TodoList todos={todos}/>
    </div>
  );
}

export default App;
