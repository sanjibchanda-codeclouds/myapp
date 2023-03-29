import "./App.css";
import Demo from "./components/Demo";
import User from "./components/User";
function App() {
  return (
    <div className="App">
      <Demo name="Sanjib" lname="Chanda" />
      <User />
    </div>
  );
}

export default App;
