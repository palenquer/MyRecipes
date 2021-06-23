import { useRecipes } from "../hooks/useRecipes";
import { RecipeBox } from "./RecipeBox";

export function Dashboard() {
  const { recipes } = useRecipes();

  return (
    <main className="container mx-auto h-full">
      <section className="w-full p-4 gap-4 flex flex-col md:grid grid-flow-row md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-rows-2">
        {recipes.map((recipe) => {
          return (
            <RecipeBox
              key={recipe.id}
              title={recipe.title}
              time={recipe.time}
              portions={recipe.portions}
            />
          );
        })}
      </section>
    </main>
  );
}
