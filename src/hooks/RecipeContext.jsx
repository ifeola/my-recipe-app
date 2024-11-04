import { createContext, useContext, useReducer } from "react";

export const RecipeContext = createContext({});

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    case "REMOVE_FROM_CART":
      const newCart = state.cart.filter((item) => item.id !== action.payload);
      return {
        ...state,
        cart: [...newCart],
      };

    case "ADD_TO_FAVORITE":
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };

    case "REMOVE_FROM_FAVORITE":
      const newFavorites = state.favorites.filter(
        (recipe) => recipe.id !== action.payload.id
      );
      return {
        ...state,
        favorites: [...newFavorites],
      };

    case "INCREMENT":
      const incCart = state.cart.map((recipe) => {
        if (recipe.id === action.payload) {
          return { ...recipe, quantity: recipe.quantity + 1 };
        }
        return recipe;
      });
      return {
        ...state,
        cart: [...incCart],
      };

    case "DECREMENT":
      const decCart = state.cart.map((recipe) => {
        if (recipe.id === action.payload && recipe.quantity > 1) {
          return { ...recipe, quantity: recipe.quantity - 1 };
        }
        return recipe;
      });

      return {
        ...state,
        cart: [...decCart],
      };

    default:
      return state;
  }
}

export const RecipeContainer = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    cart: [],
    favorites: [],
  });

  const isRecipeInCart = (recipeId) => {
    return state.cart.findIndex((recipe) => recipe.id === recipeId) !== -1;
  };

  const getRecipe = (recipeId) => {
    return state.cart.find((recipe) => recipe.id === recipeId);
  };

  const getTotalItems = () => {
    return state.cart.reduce((total, recipe) => total + recipe.quantity, 0);
  };

  return (
    <RecipeContext.Provider
      value={{
        state,
        dispatch,
        isRecipeInCart,
        getRecipe,
        getTotalItems,
      }}>
      {children}
    </RecipeContext.Provider>
  );
};

export const context = () => {
  const context = useContext(RecipeContext);

  if (!context) {
    throw new Error("Ensure to use the data directly!");
  }

  return context;
};
