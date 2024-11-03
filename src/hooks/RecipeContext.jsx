import { createContext, useContext } from "react";

export const RecipeContext = createContext([]);

export const RecipeContainer = ({ children }) => {
  return <RecipeContext.Provider value={0}>{children}</RecipeContext.Provider>;
};

export const context = () => {
  const context = useContext(RecipeContext);

  if (!context) {
    throw new Error("Ensure to use the data directly!");
  }

  return context;
};
