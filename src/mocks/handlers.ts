import { rest } from "msw";

interface RecipeProps {
  id: number;
  title: string;
  time: number;
  portions: number;
  description: string;
  instructions: string;
  ingredients: string;
}
interface RecipesRequestBody {
  recipes: RecipeProps[];
}

interface RecipesResponseBody {
  recipes: RecipeProps[];
}

interface RecipesRequestParams {
  recipeId: number;
}

export const handlers = [
  rest.post<RecipesRequestBody, RecipesResponseBody, RecipesRequestParams>(
    "http://localhost:3000/recipes",
    (req, res, ctx) => {
      const { recipes } = req.body;

      return res(ctx.status(201), ctx.json({ recipes }));
    }
  ),

  rest.get<RecipesRequestBody, RecipesResponseBody, RecipesRequestParams>(
    "http://localhost:3000/recipes",
    (req, res, ctx) => {

      return res(
        ctx.status(200),
        ctx.json({
          recipes: [
            {
              id: 0,
              title: "Sopa de Caramujo",
              time: 2,
              portions: 4,
              description:
                "Uma sopa feita de caramujos com molho de cogumelos.",
              instructions:
                "Primeiro, coloque os caramujos em uma panela com água quente. Logo após, adicione o molho de cogumelos.",
              ingredients: "Caramujo, Cogumelo, Água",
            },
            {
              id: 1,
              title: "Churrasco de tatu",
              time: 1,
              portions: 2,
              description:
                "Um churrasquinho de tatu feito com muito amor e carinho.",
              instructions:
                "Primeiro, espete a carne de tatu nos palitos de churrasco. Logo após, coloque os seus espetinhos na churrasqueira.",
              ingredients: "Carne de Tatu, Sal",
            },
          ],
        })
      );
    }
  ),
];
