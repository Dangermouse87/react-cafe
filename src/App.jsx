import './App.css';
import Navbar from './components/Navbar';
import CafeList from './components/CafeList/CafeList';
import SideBar from './components/Sidebar/Sidebar';
import { useState } from 'react';
import { useEffect } from 'react';

// Flow
// 1. Create a new component called App
// 2. Export the App component
// 3. Import the App component in main.jsx
// 4. Render the App component in the root element
// 5. The App component is rendered in the DOM

const App = () => {
// state to store the cafe data
// cafeData = array of objects
// setCafeData = function to update the cafeData state
// useState = hook to create a state variable
const [cafeData, setCafeData] = useState([]);

const getCafes = () => {
  const url = `https://matcha-and-keyboard-f549965e60e7.herokuapp.com/api/v1/cafes`;
  fetch(url)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      // set cafeData to the data from the API
      setCafeData(data);
    });
};

// useEffect = hook to run code when the component is rendered
// getCafes = function to fetch the cafe data from the API
// [] = empty array to run the code only once
useEffect(() => {
  getCafes();
}, []);

  return (
    <div className="app-frame">
      <Navbar setCafeData={setCafeData} />
        <div className="app-body">
          <SideBar />
          <CafeList cafeData={cafeData}/>
        </div>
    </div>
  );
};

export default App;