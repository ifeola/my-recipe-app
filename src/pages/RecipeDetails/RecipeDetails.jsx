import { useParams } from "react-router-dom";
import styles from "./recipedetails.module.css";
import { useEffect, useState } from "react";

const RecipeDetails = () => {
  const [recipe, setRecipe] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const recipeId = useParams();

  useEffect(() => {
    const getRecipe = (recipeId) => {
      fetch("https://dummyjson.com/recipes/1")
        .then((res) => res.json())
        .then((data) => {
          setRecipe(data);
          setIsLoading(!isLoading);
        });
    };

    getRecipe(recipeId);
  }, [recipeId]);

  return (
    <section>
      {isLoading && (
        <>
          <div>
            <img src={recipe.image} alt="" />
          </div>
          <div>
            <h5>{recipe.name}</h5>
            <div>
              <p>{recipe.rating}</p>
              <p>{recipe.reviewCount}</p>
            </div>
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
