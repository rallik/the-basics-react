import { Link } from "react-router-dom";
import './app.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to The Basics</h1>
      </header>
      <Link to="/form">Form</Link>
    </div>
  );
}

export default App;
