import { useState } from "react";
import { GlobalStyle } from "./global";
import { Home } from "./pages";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <GlobalStyle />
      <Home />
    </>
  );
}

export default App;
