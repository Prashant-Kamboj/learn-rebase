import { useState } from "react";
import { Button } from "./components/Button";
import { Checkbox } from "./components/Checkbox";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>main changes</div>
      <div>second change</div>
      <Button onClick={() => setCount((prevCount) => prevCount + 1)}>
        increment
      </Button>
      {count}
      <div>Next change</div>
      <Checkbox />
      <div>sub branch change</div>
      <button>Click here </button>
      <span>this is the new button update</span>
    </div>
  );
}

export default App;
