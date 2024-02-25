import { useState } from "react";

const INITIAL_VALUE = ["A", "B", "C"];

function App() {
  const [array, setArray] = useState(INITIAL_VALUE);
  return (
    <div>
      <h1>Helloooo</h1>
    </div>
  );
}

export default App;
