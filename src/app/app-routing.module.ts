import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import { ShopingListComponent } from './shoping-list/shoping-list.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
   {path: '', component: HomeComponent},
    {path: 'recipes', loadChildren: './recipes/recipes.module#RecipeModule' },
   {path: 'shoping-list', component: ShopingListComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}

