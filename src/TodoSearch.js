import React from "react";
import './TodoSearch.css';


function TodoSearch( { searchValue, setSearchValue } ){

    // Array to stone a variable + function 🤯🤯🤯
    // const [searchValue, setSearchValue] = React.useState('');

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