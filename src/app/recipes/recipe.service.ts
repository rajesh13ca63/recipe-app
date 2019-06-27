import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Recipe } from '../recipes/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShopinglistService } from '../shoping-list/shoping-list.service';
import * as ShoppingListActions from '../shoping-list/store/shopping-list.action';


@Injectable()
export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('Apple',
        'Apple juice',
        'https://www.eatforhealth.gov.au/sites/default/files/images/Recipes/original_lasagna_recipe_image.jpg',
    [
        new Ingredient('meat', 1),
        new Ingredient('Cock', 201)
    ]),
    new Recipe('A Test Recipe',
        'Test Recipe',
        'https://www.eatforhealth.gov.au/sites/default/files/images/Recipes/original_lasagna_recipe_image.jpg',
    [
        new Ingredient('Lassi', 1),
        new Ingredient('Juice', 201)
    ])
    ];

    constructor(private slService: ShopinglistService, private store: Store<{shoppingList: {ingredients: Ingredient[]}}>) {

    }

    getRecipes() {
        return this.recipes;
    }

    getRecipe(id: number) {
        return this.recipes[id];
    }

    addIngredientToShopingList(ingredients: Ingredient[]) {
       //this.slService.addIngredients(ingredients);
       this.store.dispatch(new ShoppingListActions.AddIngredients(ingredients));
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
    }
}
