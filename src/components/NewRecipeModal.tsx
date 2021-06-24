import { FormEvent, useState } from "react";
import Modal from "react-modal";
import { XIcon } from "@heroicons/react/solid";
import { toast } from "react-toastify";
import { useRecipes } from "../hooks/useRecipes";

interface NewRecipeModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewRecipeModal({
  isOpen,
  onRequestClose,
}: NewRecipeModalProps) {
  const { recipes, createRecipe } = useRecipes();

  const [id, setId] = useState(0);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [time, setTime] = useState(1);
  const [portions, setPortions] = useState(1);
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");

  function handleCreateNewRecipe(event: FormEvent) {
    event.preventDefault();

    if (title.length > 20 || title.length < 3) {
      toast.error(
        "Title must have at least 3 characters and cannot exceed 20 characters"
      );
      return;
    }
    if (description.length > 200) {
      toast.error("description cannot exceed 200 characters");
      return;
    }
    if (time < 1 || time > 999) {
      toast.error("Minutes must have at least 1 and cannot exceed 999");
      return;
    }
    if (portions < 1 || portions > 10) {
      toast.error("Portions must have at least 1 and cannot exceed 10");
      return;
    }
    if (ingredients.length > 200) {
      toast.error("Ingredients cannot exceed 200 characters");
      return;
    }
    if (instructions.length > 200) {
      toast.error("Instructions cannot exceed 200 characters");
      return;
    }

    createRecipe({
      id,
      title,
      description,
      time,
      portions,
      ingredients,
      instructions,
    });

    setTitle("");
    setDescription("");
    setIngredients("");
    setInstructions("");

    onRequestClose();
  }

  return (
    <Modal
      className="w-11/12 md:w-full h-96 sm:h-full max-w-2xl sm:max-h-modal bg-gray-100 rounded-md z-10 p-4 overflow-auto relative"
      overlayClassName="react-modal-overlay"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <button
        className="absolute top-4 right-4 transition duration-300 filter hover:brightness-50 w-12 h-12 flex items-center justify-center"
        type="button"
        onClick={onRequestClose}
      >
        <XIcon className="w-10 h-10 text-gray-500" />
      </button>

      <form
        onSubmit={handleCreateNewRecipe}
        className="p-4 flex gap-4 flex-col"
      >
        <h2 className="font-title text-yellow-500 text-3xl text-center mb-8">
          New Recipe
        </h2>

        <input
          className="w-full px-6 h-12 rounded bg-gray-100 border border-gray-300 placeholder-gray-500"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          className="w-full px-6 h-12 rounded bg-gray-100 border border-gray-300 placeholder-gray-500"
          type="text"
          placeholder="Description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />

        <div className="grid grid-cols-2 grid-rows-1">
          <div className="flex items-center gap-2">
            <input
              className="w-16 px-2 h-12 rounded bg-gray-100 border border-gray-300 placeholder-gray-500"
              type="number"
              value={time}
              onChange={(event) => setTime(Number(event.target.value))}
            />
            <span>min</span>
          </div>
          <div className="flex items-center gap-2">
            <input
              className="w-16 px-2 h-12 rounded bg-gray-100 border border-gray-300 placeholder-gray-500"
              type="number"
              value={portions}
              onChange={(event) => setPortions(Number(event.target.value))}
            />
            <span>portions</span>
          </div>
        </div>
        <textarea
          className="w-full px-6 rounded bg-gray-100 border border-gray-300 placeholder-gray-500 py-4 resize-none"
          placeholder="Ingredients"
          value={ingredients}
          onChange={(event) => setIngredients(event.target.value)}
        />
        <textarea
          className="w-full px-6 rounded bg-gray-100 border border-gray-300 placeholder-gray-500 py-4 resize-none"
          placeholder="Instructions"
          value={instructions}
          onChange={(event) => setInstructions(event.target.value)}
        />
        <button
          className="w-full px-6 h-16 bg-yellow-500 text-white rounded border-0 mt-4 font-semibold transition duration-300 hover:bg-yellow-600"
          type="submit"
          onClick={() => setId(recipes.length)}
        >
          Create
        </button>
      </form>
    </Modal>
  );
}
