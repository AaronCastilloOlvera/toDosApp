import React from 'react';
import { AppUI } from './AppUI';
/*
const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el cursso de intro a React', completed: true },
  { text: 'Llorar con la llorona', completed: false },
  { text: 'LALALALAA', completed: false },
];
*/

function App() {
 
  const localStorageTodos = localStorage.getItem('TODOS_V1');
  let paredTodos;

  if ( !localStorageTodos ){
    localStorage.setItem('TODOS_V1', JSON.s([]));
    paredTodos = [];
  } else {
    paredTodos = JSON.parse(localStorageTodos);
  }

  const [todos, setTodos] = React.useState(paredTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter( todo => todo.completed ).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if ( !searchValue.length >= 1 ) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter( todo => {  
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    })
  }

  const saveTodos = (newTodos) => {
    const stringlyfiedTodos = JSON.stringify(newTodos);
    localStorage.setItem('TODOS_V1', stringlyfiedTodos);
    setTodos(newTodos);
  };

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex( todo => todo.text == text);
    const newTodos = [...todos]; //Copied to newest array
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex( todo => todo.text == text);
    const newTodos = [...todos]; //Copied to newest array
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };
  return (
    <AppUI
      totalTodos = {totalTodos}
      completedTodos = {completedTodos}
      searchValue = {searchValue}
      setSearchValue = {setSearchValue}
      searchedTodos = {searchedTodos}
      completeTodo = {completeTodo}
      deleteTodo = {deleteTodo}
    />
  );
}

export default App;