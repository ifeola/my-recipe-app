import styles from "./home.module.css";
import { useContext } from "react";
import { RecipeContext } from "../../hooks/RecipeContext";
import Recipes from "../../components/Recipes/Recipes";

const Home = () => {
  const context = useContext(RecipeContext);

  return (
    <section className={styles.main}>
      <div>
        <Recipes />
      </div>
    </section>
  );
};
export default Home;
