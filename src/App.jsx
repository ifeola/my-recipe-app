import { RecipeContainer } from "./hooks/RecipeContext";
import Home from "./components/Home";

function App() {
  return (
    <RecipeContainer>
      <Home />
    </RecipeContainer>
  );
}

export default App;
