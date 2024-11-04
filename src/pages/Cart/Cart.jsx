import CartItem from "../../components/CartItem/CartItem";
import { context } from "../../hooks/RecipeContext";
import styles from "./cart.module.css";

const Cart = () => {
  const { state, getTotalItems } = context();
  console.log(state);

  return (
    <section className={styles.cart}>
      <div className={styles.title}>
        <h2>My Cart</h2>
        <h6>Number of items ({getTotalItems()})</h6>
      </div>
      {state.cart.map((item) => {
        return <CartItem recipe={item} />;
      })}
    </section>
  );
};
export default Cart;
