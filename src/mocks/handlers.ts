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
              time: 120,
              portions: 4,
              description:
                "Uma sopa magnífica feita de caramujos com molho de cogumelos.",
              instructions:
                "Primeiro, coloque os caramujos em uma panela com água quente. Logo após, adicione o molho de cogumelos. Por fim, sirva a sopa.",
              ingredients: "Caramujo, Cogumelo, Água",
            },
            {
              id: 1,
              title: "Churrasco de tatu",
              time: 60,
              portions: 2,
              description:
                "Um churrasquinho de tatu suculento feito com muita maestria.",
              instructions:
                "Primeiro, espete a carne de tatu nos palitos de churrasco. Logo após, tempere-o com sal e coloque os seus espetinhos na churrasqueira. Por fim, sirva os espetinhos.",
              ingredients: "Carne de Tatu e Sal",
            },
          ],
        })
      );
    }
  ),
];
