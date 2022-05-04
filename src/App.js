import logo from "./logo.svg";
import "./App.css";
import Button from "./lib/components/Button/Button";

function App() {
  const handleOnClick = () => {
    alert("Hello");
  };
  return (
    <div>
      <Button text="test" onClick={handleOnClick} className="test" />
    </div>
  );
}

export default App;
