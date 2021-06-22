import { useState } from "react";
import ReactModal from "react-modal";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewRecipeModal } from "./components/NewRecipeModal";
import { RecipesProvider } from "./RecipesContext";
import { ToastContainer } from "react-toastify";


import 'react-toastify/dist/ReactToastify.css';

ReactModal.setAppElement("#root");

function App() {
  const [isNewRecipeModalOpen, setIsNewRecipeModalOpen] = useState(false);

  function handleOpenNewRecipeModal() {
    setIsNewRecipeModalOpen(true);
  }
  function handleCloseNewRecipeModal() {
    setIsNewRecipeModalOpen(false);
  }

  return (
    <RecipesProvider>
      <Header onOpenNewRecipeModal={handleOpenNewRecipeModal} />
      <Dashboard />
      <NewRecipeModal
        isOpen={isNewRecipeModalOpen}
        onRequestClose={handleCloseNewRecipeModal}
      />
      <ToastContainer
        autoClose={3000}
      />
    </RecipesProvider>
  );
}

export default App;
