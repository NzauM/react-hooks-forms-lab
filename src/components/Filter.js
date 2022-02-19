import React, {useState} from "react";

function Filter({searchTerm, onSearchChange, onCategoryChange }) {
  // const[filterWord, setFilterword] = useState(" ");
  function handleSearchChange(event){
    onSearchChange(event.target.value)
  }
  // console.log(searchTerm)

  return (
    <div className="Filter">
      <input onChange={handleSearchChange} value={searchTerm} type="text" name="search" placeholder="Search..." />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
