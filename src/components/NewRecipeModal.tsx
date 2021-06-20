import { FormEvent, useContext, useState } from "react";
import Modal from "react-modal";
import closeImg from "../assets/close.svg";
import { RecipesContext } from "../RecipesContext";

interface NewRecipeModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewRecipeModal({
  isOpen,
  onRequestClose,
}: NewRecipeModalProps) {
  const { recipes, createRecipe } = useContext(RecipesContext);

  const [id, setId] = useState(0)
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [time, setTime] = useState(0);
  const [portions, setPortions] = useState(0);
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");

  function handleCreateNewRecipe(event: FormEvent) {
    event.preventDefault();

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
      className="w-11/12 md:w-full max-w-3xl bg-gray-100 md:p-12 relative rounded-md"
      overlayClassName="react-modal-overlay"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <button
        className="absolute top-4 right-4 transition duration-300 filter hover:brightness-50 w-12 h-12 flex items-center justify-center"
        type="button"
        onClick={onRequestClose}
      >
        <img src={closeImg} alt="Fechar Modal" />
      </button>

      <form
        onSubmit={handleCreateNewRecipe}
        className="p-4 flex gap-4 flex-col"
      >
        <h2 className="font-title font-semibold text-yellow-500 text-3xl text-center mb-8">
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

        <div className="grid grid-cols-2 gap-2">
          <input
            className="w-full px-6 h-12 rounded bg-gray-100 border border-gray-300 placeholder-gray-500"
            type="number"
            placeholder="Time"
            onChange={(event) => setTime(Number(event.target.value))}
          />
          <input
            className="w-full px-6 h-12 rounded bg-gray-100 border border-gray-300 placeholder-gray-500"
            type="number"
            placeholder="Portions"
            onChange={(event) => setPortions(Number(event.target.value))}
          />
        </div>
        <textarea
          className="w-full px-6 md:h-40 rounded bg-gray-100 border border-gray-300 placeholder-gray-500 py-4 resize-none"
          placeholder="Ingredients"
          value={ingredients}
          onChange={(event) => setIngredients(event.target.value)}
        />
        <textarea
          className="w-full px-6 md:h-40 rounded bg-gray-100 border border-gray-300 placeholder-gray-500 py-4 resize-none"
          placeholder="Instructions"
          value={instructions}
          onChange={(event) => setInstructions(event.target.value)}
        />
        <button
          className="w-full px-6 h-16 bg-yellow-500 text-white rounded border-0 mt-4 font-semibold transition duration-300 hover:bg-yellow-600"
          type="submit"
          onClick={() => setId(recipes.length + 1)}
        >
          Create
        </button>
      </form>
    </Modal>
  );
}
