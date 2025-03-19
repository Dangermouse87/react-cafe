import './App.css';
import Navbar from './components/Navbar';
import CafeList from './components/CafeList/CafeList';
import SideBar from './components/Sidebar/Sidebar';
import { useState } from 'react';

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
const [cafeData, setCafeData] = useState([
  {
      "picture": "https://laptopfriendly.co/images/places/tokyo/ddsk-saigon-kitchen/ddsk-saigon-kitchen--tokyo.jpg",
      "title": "DDSK SAIGON KITCHEN",
      "address": "ss, 135-0061, Tokyo",
      "criteria": []
  },
  {
      "picture": "https://laptopfriendly.co/images/places/tokyo/common/common--tokyo.jpg",
      "title": "COMMON",
      "address": "106-0032, Tokyo",
      "criteria": [
          "Stable Wi-Fi",
          "Power sockets",
          "Quiet",
          "Coffee",
          "Food"
      ]
  },
  {
      "picture": "https://laptopfriendly.co/images/places/tokyo/brooklyn-parlor-shinjuku/brooklyn-parlor-shinjuku%20shinjuku-city%20brooklyn-parlor-shinjuku-shinjuku-city%20.jpg",
      "title": "BROOKLYN PARLOR SHINJUKU",
      "address": "Shinjuku Marui Annex B1F, 3-1-26 Shinjuku, Shinjuku-ku, Tokyo, 160-0022, Tokyo",
      "criteria": [
          "Stable Wi-Fi",
          "Power sockets",
          "Quiet",
          "Coffee",
          "Food"
      ]
  }
]
);

  const getCafes = () => {
    const url = 'https://matcha-and-keyboard-f549965e60e7.herokuapp.com/api/v1/cafes';
    fetch(url)
      .then(response => response.json())
      .then((data) => {
        console.log(data);
        // set cafeData to the data from the API
        setCafeData(data);
        console.log(cafeData);
      })
      .catch(error => console.log(error));
  };

  return (
    <div className="app-frame">
      <Navbar />
      <button onClick={getCafes} >See All Cafes! ☕</button>
        <div className="app-body">
          <SideBar />
          <CafeList cafeData={cafeData}/>
        </div>
    </div>
  );
};

export default App;