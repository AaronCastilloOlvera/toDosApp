import React from 'react';
import { AppUI } from './AppUI';
/*
const defaultitem = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el cursso de intro a React', completed: true },
  { text: 'Llorar con la llorona', completed: false },
  { text: 'LALALALAA', completed: false },
];
*/

function useLocalStorage( itemName, initialValue ){
  
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;
  
  if ( !localStorageItem ){
    localStorageItem.setItem( itemName, JSON.stringify(initialValue));
    parsedItem = [];
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }
  
  const [item, setItem] = React.useState(parsedItem);

  const saveItem = (newItem) => {
    const stringlyfiedItem = JSON.stringify(newItem);
    localStorage.setItem( itemName, stringlyfiedItem );
    setItem(newItem);
  };

  return [
    item,
    saveItem
  ];
}


function App() {
 
  const [todos, saveTodos] = useLocalStorage('TODOS_V1',[]);

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