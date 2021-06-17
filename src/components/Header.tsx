export function Header() {
    return (
        <header className="sticky top-0 w-screen bg-yellow-500 h-16">
            <div className="container mx-auto h-full px-4 flex items-center justify-between text-white">
                <h1 className="text-3xl font-title font-semibold">MyRecipes</h1>
                <button type="button" className="font-semibold text-lg bg-yellow-400 p-2 rounded transition duration-300 hover:bg-yellow-600 w-24">
                    New
                </button>
            </div>
        </header>
    )
}
