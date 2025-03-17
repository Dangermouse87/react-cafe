import './index.css';

// createRoot = function that creates a root for rendering React components into the DOM
import { createRoot } from 'react-dom/client';

console.log("connected");

const root = createRoot(document.getElementById('root'));


// Basic React component
function Hello() {
  return <h1>Hello, world!</h1>;
}

// Render the component as a HTML element
root.render(<Hello />);