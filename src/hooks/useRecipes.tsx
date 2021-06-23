import { createContext, useEffect, useState, ReactNode, useContext } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";

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

const RecipesContext = createContext<RecipesContextData>(
  {} as RecipesContextData
);

export function RecipesProvider({ children }: RecipesProviderProps) {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    const storagedRecipes = localStorage.getItem("@my-recipes");

    if (storagedRecipes) {
      setRecipes(JSON.parse(storagedRecipes));
      return;
    }
    api.get("/recipes").then((response) => {
      setRecipes(response.data.recipes);
    });
  }, []);

  async function createRecipe(recipeInput: RecipeInput) {
    const response = await api.post("/recipes", recipeInput);
    const recipe = JSON.parse(response.config.data);

    setRecipes([...recipes, recipe]);
    localStorage.setItem("@my-recipes", JSON.stringify([...recipes, recipe]));
    toast.info(`${recipe.title} recipe created`);
  }

  return (
    <RecipesContext.Provider value={{ recipes, createRecipe }}>
      {children}
    </RecipesContext.Provider>
  );
}

export function useRecipes() {
  const context = useContext(RecipesContext);

  return context;
}
