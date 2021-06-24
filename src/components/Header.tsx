import { Link } from 'react-router-dom';

interface HeaderProps {
    onOpenNewRecipeModal: () => void;
}

export function Header({ onOpenNewRecipeModal }: HeaderProps) {
    return (
        <header className="sticky top-0 w-screen bg-yellow-500 h-16">
            <div className="container mx-auto h-full px-4 flex items-center justify-between text-white">
                <Link to="/" className="text-3xl font-title">MyRecipes</Link>
                <button type="button" className="font-semibold text-lg bg-yellow-400 p-2 rounded transition duration-300 hover:bg-yellow-600 w-24" onClick={onOpenNewRecipeModal}>
                    New
                </button>
            </div>
        </header>
    )
}
