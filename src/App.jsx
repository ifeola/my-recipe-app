import { RecipeContainer } from "./hooks/RecipeContext";
import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Favorite from "./pages/Favorite/Favorite";
import Cart from "./pages/Cart/Cart";
import RecipeDetails from "./pages/RecipeDetails/RecipeDetails";

function App() {
  return (
    <RecipeContainer>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="recipe/:recipeId" element={<RecipeDetails />} />
            <Route path="favorite" element={<Favorite />} />
            <Route path="cart" element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </RecipeContainer>
  );
}

export default App;
