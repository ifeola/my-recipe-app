import styles from "./recipes.module.css";
import { useEffect, useState } from "react";
import data from "../../../src/data.json";
import Recipe from "../Recipe/Recipe";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    function getRecipes(URL) {
      fetch(URL)
        .then((res) => res.json())
        .then((data) => {
          setRecipes(data);
          setIsLoading(!isLoading);
        });
    }

    getRecipes("https://dummyjson.com/recipes");
  }, [URL]);

  console.log(recipes);
  return (
    <ul className={styles.recipes}>
      {isLoading && (
        <>
          {recipes.recipes.map((recipe) => {
            return <Recipe recipe={recipe} key={recipe.id} />;
          })}
        </>
      )}
    </ul>
  );
};
export default Recipes;
