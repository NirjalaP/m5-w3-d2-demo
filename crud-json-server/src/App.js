import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="Container">
      <span className = "title-bar">
        <button
        type= "button"
        className = "btn btn-primary"
        onCLick = {this.getLists}>
Get Lists
        </button>
      </span>
    </div>
  );
}

export default App;
