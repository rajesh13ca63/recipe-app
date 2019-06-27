import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { FormGroup, FormControl, NgForm, FormArray, Validators } from '@angular/forms';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute,
             private recipeServic: RecipeService,
            private router: Router) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.intForm();
      }
    );
  }

    intForm() {
        let recipeName = '';
        let recipeImagePath = '' ;
        let recipeDescription = '';
        const recipeIngredients = new FormArray([]);

        if (this.editMode) {
            const recipe = this.recipeServic.getRecipe(this.id);
            recipeName = recipe.name;
            recipeImagePath = recipe.imagePath;
            recipeDescription = recipe.description;
            if (recipe['ingredients']) {
                 for (const ingredient of recipe['ingredients']) {
                    recipeIngredients.push(
                        new FormGroup( {
                            'name': new FormControl(ingredient.name, Validators.required),
                            'amount': new FormControl(ingredient.amount, [
                                Validators.required,
                                Validators.pattern(/^[1-9]+[0-9]*$/)
                            ])
                        })
                    );
                 }
            }
        }

        this.recipeForm = new FormGroup( {
            'name': new FormControl(recipeName, Validators.required),
            'imagePath': new FormControl(recipeImagePath, Validators.required),
            'description': new FormControl(recipeDescription, Validators.required),
            'ingredients': recipeIngredients
        });
        console.log('recipe ingredient', this.recipeForm.value.ingredients);
    }

    addGredient() {
      console.log('method called');
      (<FormArray>this.recipeForm.get('ingredients')).push(
        new FormGroup( {
            'name': new FormControl(null, Validators.required),
            'amount': new FormControl(null, [Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)] )
        })
      );
    }

    onSubmit() {
        // const newRecipe = new Recipe(
        //     this.recipeForm.value['name'],
        //     this.recipeForm.value['description'],
        //     this.recipeForm.value['imagePath'],
        //     this.recipeForm.value['ingredients']
        // );
       if (this.editMode) {
        this.recipeServic.updateRecipe(this.id, this.recipeForm.value);
       } else {
           this.recipeServic.addRecipe(this.recipeForm.value);
       }
    }

    cancel() {
        this.router.navigate(['../'], {relativeTo: this.route});
    }

    onDeleteIngredient(index: number) {
        (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
    }

}
