import { Injectable } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { Http } from '@angular/http';

@Injectable()
export class DataStorageService {

    constructor(private recipeService: RecipeService, private http: Http) {}

    storeRecipes() {
        return this.http.put('url', this.recipeService.getRecipes());
    }
}



