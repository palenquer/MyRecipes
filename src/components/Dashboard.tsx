import { RecipeBox } from "./RecipeBox";

export function Dashboard() {
  return (
    <main className="container mx-auto h-full">
      <section className="w-full p-4 gap-4 flex flex-col md:grid grid-flow-row md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-rows-2">
        <RecipeBox title="Sopa de Caramujo" timer="4" group="4"/>
        <RecipeBox title="Tatu Frito no Espeto" timer="1" group="2"/>
      </section>
    </main>
  );
}
