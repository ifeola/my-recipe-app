import { useContext } from "react";
import { RecipeContext } from "../hooks/RecipeContext";

const Home = () => {
  const context = useContext(RecipeContext);

  return (
    <div>
      <h1>{context}</h1>
      <p>Hello World</p>
    </div>
  );
};
export default Home;
