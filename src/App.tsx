import { useState } from "react";
import { Button } from "./components/Button";

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
      <div>New change</div>
    </div>
  );
}

export default App;
