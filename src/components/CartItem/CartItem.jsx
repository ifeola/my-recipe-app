import { Minus, Plus, PlusCircle, Star } from "lucide-react";
import styles from "./cartitem.module.css";
import { context } from "../../hooks/RecipeContext";

const CartItem = ({ recipe }) => {
  const { getRecipe, dispatch } = context();

  return (
    <article className={styles.cart__recipe}>
      <div className={styles.recipe__container}>
        <div className={styles.recipe__image}>
          <img src={recipe.image} alt={recipe.name} />
        </div>
        <div className={styles.recipe__description_bg}>
          <h3>{recipe.name}</h3>
          <div className={styles.recipe__description}>
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
          <div className={styles.counter__bg}>
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
            <button
              className={styles.remove__item_mobile}
              onClick={() => {
                dispatch({ type: "REMOVE_FROM_CART", payload: recipe.id });
              }}>
              <PlusCircle />
            </button>
          </div>
          <div className={styles.duration}>
            <span>Prep Time: {recipe.prepTimeMinutes}mins</span>
            <span>Cook Time: {recipe.cookTimeMinutes}mins</span>
          </div>
        </div>
      </div>
      <button
        className={styles.remove__item}
        onClick={() => {
          dispatch({ type: "REMOVE_FROM_CART", payload: recipe.id });
        }}>
        <PlusCircle />
      </button>
    </article>
  );
};
export default CartItem;
