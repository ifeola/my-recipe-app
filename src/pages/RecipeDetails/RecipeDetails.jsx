import { useParams } from "react-router-dom";
import styles from "./recipedetails.module.css";
import data from "../../../src/data.json";
import { useEffect, useState } from "react";

const RecipeDetails = () => {
  const [recipes, setRecipes] = useState(data);
  const [recipe, setRecipe] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const recipeId = useParams();

  useEffect(() => {
    const getRecipe = (recipeId) => {
      const recipe = recipes.find(
        (item) => item.id === Number(recipeId.recipeId)
      );
      setRecipe(recipe);
      setIsLoading(!isLoading);
    };

    getRecipe(recipeId);
  }, [recipeId]);

  console.log(recipe.ingredients);

  return (
    <section>
      {isLoading && (
        <>
          <div>
            <img src={`../src/assets/recipe${recipe.image}`} alt="" />
          </div>
          <div>
            <h5>{recipe.name}</h5>
            <div>
              <p>{recipe.rating}</p>
              <p>{recipe.reviewCount}</p>
            </div>
          </div>
          <div>
            <img src={`src/assets/recipe${recipe.image}`} alt="" />
          </div>
          <div>
            <ol>
              <h5>Ingredients:</h5>
              {recipe.ingredients.map((ingredient) => {
                return <li>{ingredient}</li>;
              })}
            </ol>
            <ol>
              <h5>instructions:</h5>
              {recipe.instructions.map((instruction) => {
                return <li>{instruction}</li>;
              })}
            </ol>
          </div>
        </>
      )}
    </section>
  );
};
export default RecipeDetails;
