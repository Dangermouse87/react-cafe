// Backend API endpoint: https://matcha-and-keyboard-f549965e60e7.herokuapp.com/api/v1/cafes?title=

import React from 'react';
import './Searchbar.css';

function Searchbar({ setCafeData }) {

  const getCafes = (event) => {
    const query = event.target.value;
    const url = `https://matcha-and-keyboard-f549965e60e7.herokuapp.com/api/v1/cafes?title=${query}`;
    fetch(url)
      .then(response => response.json())
      .then((data) => {
        console.log(data);
        // set cafeData to the data from the API
        setCafeData(data);
      })
      .catch(error => console.log(error));
  };

  return (
    <div className="searchbar input-group">
      <span className="input-group-text"><i className="fa-solid fa-magnifying-glass"></i></span>
      <input onChange={getCafes} placeholder="Search for a cafe..." type="text" className="form-control" />
    </div>
  );
}

export default Searchbar;