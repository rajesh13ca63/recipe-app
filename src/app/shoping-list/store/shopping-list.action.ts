import { Action } from '@ngrx/store';
import { Ingredient } from '../../shared/ingredient.model';

export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const ADD_INGREDIENTS = 'ADD_INGREDIENTS';

export class AddIngredient implements Action {
    readonly type = ADD_INGREDIENT;

    constructor(public peaload: Ingredient) {}
}

export class AddIngredients implements Action {
    readonly type = ADD_INGREDIENTS;

    constructor(public peaload: Ingredient[]) {}
}

export type ShoppingListActions = AddIngredient | AddIngredients;
