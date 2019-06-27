import * as ShoppingListActions from './shopping-list.action';
import { Ingredient } from '../../shared/ingredient.model';

const initialState = {
    ingredients: [
        new Ingredient('Apple', 5),
        new Ingredient('Tomato', 10)
    ]
};

export function shoppingListReducer(state = initialState, action: ShoppingListActions.ShoppingListActions) {
    switch (action.type) {
        case ShoppingListActions.ADD_INGREDIENT:
        return {
            ...state,
            ingredients: [...state.ingredients, action.peaload]
        };

        case ShoppingListActions.ADD_INGREDIENTS:
        return {
            ...state,
            ingredients: [...state.ingredients, ...action.peaload]
        };
        default:
        return state;
    }
}
