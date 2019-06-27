import { Component, OnInit, EventEmitter, Output, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/';
import { Store } from '@ngrx/store';
import { Ingredient } from '../../shared/ingredient.model';
import { ShopinglistService } from '../shoping-list.service';
import * as ShoppingListActions from '../store/shopping-list.action';


@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shoping-edit.component.html',
  styleUrls: ['./shoping-edit.component.css']
})
export class ShopingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  @Output() onclearShoppingList = new EventEmitter<void>();
  editMode = false;
  subscription: Subscription;
  editedItemIndex: number;
  editItem: Ingredient;
  constructor(private lsSevice: ShopinglistService, private store: Store<{shoppingList: {ingredients: Ingredient}}>) { }

  ngOnInit() {
    this.subscription = this.lsSevice.startedEditing
      .subscribe(
        (index: number) => {
        this.editMode = true;
        this.editedItemIndex = index;
        this.editItem = this.lsSevice.getIngredient(index);
        this.slForm.setValue( {
            name: this.editItem.name,
            amount: this.editItem.amount
        });
        }
      );
  }

  /* This method is used to add shoping item list*/
  onAdded(form: NgForm) {
    const value = form.value;
    const newingredient =  new Ingredient(value.name, value.amount);
    if (this.editMode) {
        this.lsSevice.updateIngredient(this.editedItemIndex, newingredient);
    } else {
        this.store.dispatch(new ShoppingListActions.AddIngredient(newingredient));
    }
    this.editMode = false;
    form.reset();
  }

  clearShoppingList() {
    this.onclearShoppingList.emit();
  }

  onDelete() {
    this.lsSevice.deletIngredient(this.editedItemIndex);
    this.clearForm();
  }

  clearForm() {
    this.slForm.reset();
    this.editMode = false;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
