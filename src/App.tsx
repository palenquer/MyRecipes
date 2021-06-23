import { useState } from "react";
import ReactModal from "react-modal";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewRecipeModal } from "./components/NewRecipeModal";
import { RecipesProvider } from "./hooks/useRecipes";
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import { Home } from "./pages/Home";
import { Recipe } from './pages/Recipe';
import { Page404 } from './pages/Page404';

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
      <Router>
        <Header onOpenNewRecipeModal={handleOpenNewRecipeModal} />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/recipe/:id">
            <Recipe />
          </Route>
          <Route>
            <Page404 />
          </Route>
        </Switch>
      </Router>

      <NewRecipeModal
        isOpen={isNewRecipeModalOpen}
        onRequestClose={handleCloseNewRecipeModal}
      />
      <ToastContainer autoClose={3000} />
    </RecipesProvider>
  );
}

export default App;
