import { useState } from 'react';
import ReactModal from 'react-modal';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { NewRecipeModal } from './components/NewRecipeModal';
import { RecipesProvider } from './RecipesContext';

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
      <Header onOpenNewRecipeModal={handleOpenNewRecipeModal}/>
      <Dashboard/>
      <NewRecipeModal isOpen={isNewRecipeModalOpen} onRequestClose={handleCloseNewRecipeModal}/>
    </RecipesProvider>
  );
}

export default App;
