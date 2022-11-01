import './App.css';
import './PC.js';
import { NavLink } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          This is my Website!
        </p>
      <ul>
      <li><NavLink to="PC.js">Check out my PC!</NavLink></li>
      </ul>
      </header>
    </div>
  );
}

export default App;
