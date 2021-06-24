import { useRecipes } from "../hooks/useRecipes";
import { useParams } from "react-router-dom";
import { ClockIcon } from "@heroicons/react/outline";
import { UserGroupIcon } from "@heroicons/react/solid";
import recipeImg from "../assets/recipeImg.png";

interface IdParams {
  id: string;
}
export function Recipe() {
  const { recipes } = useRecipes();
  const { id } = useParams<IdParams>();

  return (
    <main className="container mx-auto py-8 px-2 md:py-0 md:px-0 ">
      {recipes
        .filter((recipe) => recipe.id === Number(id))
        .map((filteredRecipe) => (
          <section className="p-4 md:py-5 md:px-20 xl:py-10 xl:px-40 bg-white">
            <h1 className="text-4xl mb-4 text-gray-800 font-title border-b-2 pb-2 border-yellow-500">
              {filteredRecipe.title}
            </h1>

            <img
              className="w-96 h-96 border-2 border-yellow-500 mb-4"
              src={recipeImg}
              alt="Imagem da Receita"
            />

            <div className="flex flex-col-reverse lg:flex-row justify-between lg:items-center">
              <h2 className="text-gray-800 break-words max-w-lg">
                {filteredRecipe.description}
              </h2>

              <div className="flex justify-between mb-4 w-full max-w-sm lg:mt-0 bg-yellow-500 rounded-full p-2 h-12 lg:max-w-xs lg:w-64 items-center">
                <div className="flex text-white w-1/2 lg:w-full border-r border-white items-center justify-center">
                  <ClockIcon className="w-5 h-5 mr-1" />
                  <span>{filteredRecipe.time} min</span>
                </div>

                <div className="flex text-white items-center w-1/2 lg:w-full justify-center">
                  <UserGroupIcon className="w-5 h-5 mr-1 mb-1" />
                  {filteredRecipe.portions > 1 ? (
                    <span>{filteredRecipe.portions} Portions</span>
                  ) : (
                    <span>{filteredRecipe.portions} Portion</span>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-8 break-words max-w-2xl">
              <h2 className="font-title text-3xl mb-4 text-gray-800">
                Ingredients
              </h2>
              <p>{filteredRecipe.ingredients}</p>
            </div>

            <div className="mt-8 break-words max-w-2xl">
              <h2 className="font-title text-3xl mb-4 text-gray-800">
                Instructions
              </h2>
              <p>{filteredRecipe.instructions}</p>
            </div>
            <button
              className="w-44 h-12 text-white rounded-md bg-red-500 hover:bg-red-700 mt-8 transition duration-300"
              type="button"
            >
              Delete this recipe
            </button>
          </section>
        ))}
    </main>
  );
}
