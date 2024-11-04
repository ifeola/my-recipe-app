import { NavLink } from "react-router-dom";
import styles from "./navigation.module.css";
import { ShoppingCart, Heart } from "lucide-react";
import { context } from "../../hooks/RecipeContext";

const Navigation = () => {
  const { state } = context();

  return (
    <header className={styles.header}>
      <nav>
        <NavLink to="/">
          <h4 className={styles.logo}>Recipe</h4>
        </NavLink>

        <ul className={styles.nav__list}>
          <li className={styles.nav__item}>
            <NavLink to="/cart" className={styles.nav__link}>
              <ShoppingCart />
              <span>Cart</span>
            </NavLink>
            <span className={styles.cart__count}>{state.cart.length}</span>
          </li>
          <li className={styles.nav__item}>
            <NavLink to="/favorite" className={styles.nav__link}>
              <Heart />
              <span>Favourites</span>
            </NavLink>
            <span className={styles.favorites__count}>
              {state.favorites.length}
            </span>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Navigation;
