import './index.css';

// createRoot = function that creates a root for rendering React components into the DOM
import { createRoot } from 'react-dom/client';
import App from './App';

console.log("connected");

const root = createRoot(document.getElementById('root'));


// Basic React component
// props = object that contains the properties passed to the component, essentually argument/params
// function Hello(props) {
// can also destructure the props in the function parameters
function Hello({ name, age }) {
  // console.log(props);

  // Destructuring props to get the name and age properties
  // const { name, age } = props // instead of props.????
  // Interpolation doesn't need ${} in JSX
  return <h1>Hello, I'm {name} and I am {age} years old!</h1>;
}

// Render the component as a HTML element
// props = { name: "Cal", age: "21" }
root.render(<App />);