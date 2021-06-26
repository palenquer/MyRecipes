import {
  createContext,
  useEffect,
  useState,
  ReactNode,
  useContext,
} from "react";
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
  removeRecipe: (recipe: RecipeInput) => Promise<void>;
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
    toast.success(`${recipe.title} recipe created`);
  }

  async function removeRecipe(recipeInput: RecipeInput) {
    await api.delete(`/recipes/${recipeInput.id}`);

    const updatedRecipe = [...recipes];
    const recipeIndex = updatedRecipe.findIndex(
      (recipe) => recipe.id === recipeInput.id
    );

    if (recipeIndex >= 0) {
      updatedRecipe.splice(recipeIndex, 1);
      setRecipes(updatedRecipe);
      localStorage.setItem("@my-recipes", JSON.stringify(updatedRecipe));
      toast.info(`Recipe removed`);
    } else {
      throw Error();
    }
  }

  return (
    <RecipesContext.Provider value={{ recipes, createRecipe, removeRecipe }}>
      {children}
    </RecipesContext.Provider>
  );
}

export function useRecipes() {
  const context = useContext(RecipesContext);

  return context;
}
