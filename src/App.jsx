import { useState } from "react";

const INITIAL_VALUE = ["A", "B", "C", "D", "B", "E", "A", "F"];

function App() {
  const [array, setArray] = useState(INITIAL_VALUE);
  const [value, setValue] = useState("");

  function removeFirstElement() {
    setArray((currentArray) => {
      return currentArray.slice(1);
    });
  }

  function removeSpecificLetter(letter) {
    setArray((currentArray) => {
      return currentArray.filter((element) => element !== letter);
    });
  }

  function addLetterToStart(letter) {
    setArray((currentArray) => {
      return [letter, ...currentArray];
    });
  }

  function addLetterToEnd(letter) {
    setArray((currentArray) => {
      return [...currentArray, letter];
    });
  }

  function clear() {
    setArray([]);
  }

  function reset() {
    setArray(INITIAL_VALUE);
  }

  function updateAToH() {
    setArray((currentArray) => {
      return currentArray.map((element) => {
        if (element === "A") return "H";
        return element;
      });
    });
  }

  function addLetterAtIndex(letter, index) {
    setArray((currentArray) => {
      return [
        ...currentArray.slice(0, index),
        letter,
        ...currentArray.slice(index),
      ];
    });
  }

  return (
    <div>
      <div>{array.join(",")} </div>
      <br />
      <br />
      <button onClick={removeFirstElement}>Remove First Element</button>
      <br />
      <br />
      <button onClick={() => removeSpecificLetter("B")}>Remove All B's</button>
      <br />
      <br />
      <button onClick={() => addLetterToStart("M")}>Add To Start</button>
      <br />
      <br />
      <button onClick={() => addLetterToEnd("Z")}>Add To End</button>
      <br />
      <br />
      <button onClick={clear}>Clear</button>
      <br />
      <br />
      <button onClick={reset}>Reset</button>
      <br />
      <br />
      <button onClick={updateAToH}>Update A To H</button>
      <br />
      <br />
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <br />
      <br />
      <button onClick={() => addLetterToStart(value)}>
        Add Value To Array
      </button>
      <br />
      <br />
      <button onClick={() => addLetterAtIndex("Q", 3)}>
        Add Letter Q at Index 3
      </button>
    </div>
  );
}

export default App;
