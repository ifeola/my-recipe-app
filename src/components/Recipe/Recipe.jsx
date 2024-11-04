import { Star } from "lucide-react";
import styles from "./recipe.module.css";
import { Heart, Minus, Plus } from "lucide-react";
import { context } from "../../hooks/RecipeContext";
import { useState } from "react";
import { Link } from "react-router-dom";

const Recipe = ({ recipe }) => {
  const [isLiked, setIsLiked] = useState(false);
  const { state, dispatch, isRecipeInCart, getRecipe } = context();

  return (
    <li key={recipe.id}>
      <Link to={`/recipe/${recipe.id}`}>
        <div className={styles.recipe__img_bg}>
          <img src={`src/assets/recipe${recipe.image}`} alt="" />
          <div className={styles.duration}>
            <span>Prep Time: {recipe.prepTimeMinutes}mins</span>
            <span>Cook Time: {recipe.cookTimeMinutes}mins</span>
          </div>
        </div>
        <div className={styles.recipe__description}>
          <h4>{recipe.name}</h4>
          <div>
            <h6>{recipe.cuisine} cuisine</h6>
          </div>
          <div className={styles.recipe__info}>
            <div className={styles.recipe__info_rating}>
              {[...Array(5)].map((_, index) => {
                let id = index + 1;
                return id <= Math.round(recipe.rating) ? (
                  <Star size={18} className={styles.rated} key={index} />
                ) : (
                  <Star size={18} key={index} />
                );
              })}
              <p>({recipe.rating})</p>
            </div>
            <span className={styles.dot}></span>
            <p>{recipe.reviewCount} review counts</p>
          </div>
        </div>
      </Link>
      <div className={styles.btns}>
        {!isRecipeInCart(recipe.id) ? (
          <button
            className={styles.btn__add}
            onClick={() => {
              dispatch({
                type: "ADD_TO_CART",
                payload: {
                  ...recipe,
                  quantity: 1,
                },
              });
            }}>
            Add to Cart
          </button>
        ) : (
          <div className={styles.counter}>
            <button
              className={styles.counter__decrement}
              onClick={() => {
                dispatch({
                  type: "DECREMENT",
                  payload: recipe.id,
                });
              }}>
              <Minus />
            </button>
            <span>{getRecipe(recipe.id).quantity}</span>
            <button
              className={styles.counter__increment}
              onClick={() => {
                dispatch({
                  type: "INCREMENT",
                  payload: recipe.id,
                });
              }}>
              <Plus />
            </button>
          </div>
        )}
        <div className={styles.favorites__btns}>
          {isLiked ? (
            <button
              className={styles.btn__favorite}
              onClick={() => {
                dispatch({
                  type: "REMOVE_FROM_FAVORITE",
                  payload: recipe,
                });
                setIsLiked(!isLiked);
              }}>
              <Heart size={24} className={styles.isActive} />
            </button>
          ) : (
            <button
              className={styles.btn__favorite}
              onClick={() => {
                dispatch({
                  type: "ADD_TO_FAVORITE",
                  payload: recipe,
                });
                setIsLiked(!isLiked);
              }}>
              <Heart size={24} className={styles.isInactive} />
            </button>
          )}
        </div>
      </div>
    </li>
  );
};
export default Recipe;
