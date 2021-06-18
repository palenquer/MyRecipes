import { rest } from 'msw';

interface RecipesRequestBody {

}   
interface RecipesResponseBody {

}
interface RecipesRequestParams {

}

export const handlers = [
    rest.get<RecipesRequestBody, RecipesResponseBody, RecipesRequestParams>('/recipes/:recipeId', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
            })
        )
    })
]