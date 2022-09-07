import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { Home } from "./pages";
import { defaultTheme } from "./styles/themes";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
}

export default App;
