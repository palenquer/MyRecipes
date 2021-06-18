import { useState } from 'react';
import ReactModal from 'react-modal';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { NewRecipeModal } from './components/NewRecipeModal';

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
    <>
      <Header onOpenNewRecipeModal={handleOpenNewRecipeModal}/>
      <Dashboard/>
      <NewRecipeModal isOpen={isNewRecipeModalOpen} onRequestClose={handleCloseNewRecipeModal}/>
    </>
  );
}

export default App;
