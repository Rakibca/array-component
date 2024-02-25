import { useState } from "react";

const INITIAL_VALUE = ["A", "B", "C", "D", "B", "E", "F"];

function App() {
  const [array, setArray] = useState(INITIAL_VALUE);

  function removeFirstElement() {
    setArray((currentArray) => {
      return currentArray.slice(1);
    });
  }

  function removeSpecificLetter(letter) {
    setArray((currentArray) => {
      return currentArray.filter(element => element !== letter);
    });
  }

  return (
    <div>
      <button onClick={removeFirstElement}>Remove First Element</button>
      <br />
      <br />
      <button onClick={() => removeSpecificLetter("B")}>Remove All B's</button>
      <br />
      <br />
      <div>{array.join(",")}</div>
    </div>
  );
}

export default App;
