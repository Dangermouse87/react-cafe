import './App.css';
import Navbar from './components/Navbar';
import CafeList from './components/CafeList/CafeList';
import SideBar from './components/Sidebar/Sidebar';
// Flow
// 1. Create a new component called App
// 2. Export the App component
// 3. Import the App component in main.jsx
// 4. Render the App component in the root element
// 5. The App component is rendered in the DOM

const App = () => {
  return (
    <div className="app-frame">
      Hello from the App!
      <Navbar />
        <div className="app-body">
          <SideBar />
          <CafeList />
        </div>
    </div>
  );
};

export default App;