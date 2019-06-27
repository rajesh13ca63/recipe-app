import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShopinglistService {
    startedEditing = new Subject<number>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apple', 100),
        new Ingredient('Mango', 500)
    ];

    getIngredinets() {
        return this.ingredients;
    }

    addIngredient(ingredient) {
        this.ingredients.push(ingredient);
    }

    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
    }

    getIngredient(index: number) {
        return this.ingredients[index];
    }

    updateIngredient(index: number, newIngredient: Ingredient) {
        this.ingredients[index] = newIngredient;
    }

    deletIngredient(index: number) {
        this.ingredients.splice(index, 1);
    }
}
