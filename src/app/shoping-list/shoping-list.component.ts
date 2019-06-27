import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShopinglistService } from './shoping-list.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css']
})
export class ShopingListComponent implements OnInit {
  shoppingListState: Observable<{ingredients: Ingredient[]}>;

  constructor(private shopinglistService: ShopinglistService, private sotore: Store<{shoppingList: {ingredients: Ingredient[]}}>) { }

  ngOnInit() {
     this.shoppingListState = this.sotore.select('shoppingList');
  }

  onEditItem(index: number) {
     this.shopinglistService.startedEditing.next(index);
  }

}
