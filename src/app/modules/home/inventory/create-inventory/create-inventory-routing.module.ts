import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { CreatingInventoryComponent } from "./creating-inventory/creating-inventory.component";
import { SelectingArticlesComponent } from "./selecting-articles/selecting-articles.component";

const routes: Routes = [
  {
    path: 'creating-inventory',
    component: CreatingInventoryComponent
  
  },
  {
    path: 'selecting-articles',
    component: SelectingArticlesComponent,
  },
 
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateInventoryRoutingModule { }