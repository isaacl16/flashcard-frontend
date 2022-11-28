import { useState } from "react";
import { createDeck, deleteDeck, getDeck, getDecks, updateDeck } from "./api";
import "./App.css";
import reactLogo from "./assets/react.svg";
import Main from "./pages/main";

function App() {
  const [count, setCount] = useState(0);

  const onClick = () => {
    createDeck();
    // deleteDeck(1)
    // updateDeck(1)
    // getDeck()
    // getDecks()
  };

  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
