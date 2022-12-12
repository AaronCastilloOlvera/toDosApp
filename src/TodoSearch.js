import React from "react";
import './TodoSearch.css';


function TodoSearch(){

    // Array to stone a variable + funcion 🤯🤯🤯
    const [searchValue, setSearchValue] = React.useState('');

    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);
    };


    return [
        <input 
            className="TodoSearch" 
            placeholder='Cebolla'
            value={ searchValue }
            onChange={ onSearchValueChange }/>,
        <p>{searchValue}</p>
    ];
}

export { TodoSearch };