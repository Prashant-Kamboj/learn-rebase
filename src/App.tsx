import { useState } from "react";
import { Button } from "./components/Button";
import { Checkbox } from "./components/Combobox";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>main changes</div>
      <div>second change</div>
      <Button onClick={() => setCount((prevCount) => prevCount + 1)}>
        increment btn
      </Button>
      {count}
      <div>Next change</div>
      <Checkbox />
    </div>
  );
}

export default App;
