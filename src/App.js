import './App.css';
import Header from './components/Header/Header'
import Form from './components/FormTodo/Form'
import Item from './components/Item/Item'
import { useState } from 'react';

let idTodo = 0

function App() {
  const [todos, setTodos] = useState([])
  const [searchResult, setSearchResult] = useState(null);

  const handleSubmit = (value) => {
    setTodos([
      ...todos,
      {
        title: value,
        key: idTodo++,
        done: false
      }
    ])
  }

  const handleDelete = (delitedID) => {
    setTodos(todos.filter((todo) => todo.key !== delitedID))
  }

  const handleChange = (changedTodo, value) => {
    setTodos(todos.map(todo => {
      if (todo.key !== changedTodo.key) {
        return todo;
      } else {
        return {...todo, title: value}
      }
    }))
  }

  const handleComplited = (complitedTodo, value) => {
    setTodos(todos.map(todo => {
      if (todo.key !== complitedTodo.key) {
        return todo;
      } else {
        return {...todo, done: !value}
      }
    }))
  }

  const handleSearch = (value) => {
    if (value.trim() !== '') {
      const foundTodo = todos.find(todo => todo.key === Number(value.trim()));
      if (foundTodo) {
        setSearchResult([foundTodo]);
      } else {
        setSearchResult(null);
      }
    } else {
      setSearchResult(null)
    }
  }

  return (
    <div className="App">
      <Header />
      <Form onSubmit={handleSubmit}/>
      <div className='search-container'>
        <input 
          type="text"
          placeholder='Seacrch ID'
          onChange={e => {handleSearch(e.target.value)}}
        />
      </div>
      <div className='todos-container'>
        {searchResult ? (
          searchResult.map(todo => {
            return <Item 
              todo={todo}
              key={todo.key}
              onDelete={handleDelete}
              onChange={handleChange}
              onComplited={handleComplited}
            />
          })
        ) : (
          todos.map(todo => {
            return <Item 
              todo={todo}
              key={todo.key}
              onDelete={handleDelete}
              onChange={handleChange}
              onComplited={handleComplited}
            />
          }))
          
        }
      </div>
    </div>
  );
}

export default App;
