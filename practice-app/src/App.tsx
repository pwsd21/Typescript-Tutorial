import './App.css';
import MyButton from './components/MyButton';

function App() {
  return (
    <div className="App">
      <MyButton onClick={() => alert("Ram Ram Bhai Sareya Ne")} text="Click Me" />
      <MyButton text="Click Me2" />
    </div>
  );
}

export default App;
