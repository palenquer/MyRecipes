import { createContext, useEffect, useState, ReactNode } from "react";
import { api } from "./services/api";

interface Recipe {
  id: number;
  title: string;
  time: number;
  portions: number;
  description: string;
  ingredients: string;
  instructions: string;
}

interface RecipeInput {
  id: number;
  title: string;
  time: number;
  portions: number;
  description: string;
  ingredients: string;
  instructions: string;
}

interface RecipesContextData {
  recipes: Recipe[];
  createRecipe: (recipe: RecipeInput) => Promise<void>;
}

interface RecipesProviderProps {
  children: ReactNode;
}

export const RecipesContext = createContext<RecipesContextData>(
  {} as RecipesContextData
);

export function RecipesProvider({ children }: RecipesProviderProps) {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    api.get("/recipes").then((response) => {
      setRecipes(response.data.recipes);
    });
  }, []);

  async function createRecipe(recipeInput: RecipeInput) {
    const response = await api.post("/recipes", recipeInput);

    const recipe = JSON.parse(response.config.data);

    setRecipes([...recipes, recipe]);
  }

  return (
    <RecipesContext.Provider value={{ recipes, createRecipe }}>
      {children}
    </RecipesContext.Provider>
  );
}
