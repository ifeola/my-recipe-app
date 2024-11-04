import styles from "./recipes.module.css";
import { useState } from "react";
import data from "../../../src/data.json";
import Recipe from "../Recipe/Recipe";

const Recipes = () => {
  const [recipes, setRecipes] = useState(data);

  return (
    <ul className={styles.recipes}>
      {recipes.map((recipe) => {
        return <Recipe recipe={recipe} key={recipe.id} />;
      })}
    </ul>
  );
};
export default Recipes;
