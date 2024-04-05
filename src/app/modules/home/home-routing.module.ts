import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateArticleComponent } from './article/create-article/create-article.component';
import { ConsultArticleComponent } from './article/consult-article/consult-article.component';
import { UpdateArticleComponent } from './article/update-article/update-article.component';
import { DeleteArticleComponent } from './article/delete-article/delete-article.component';
import { InventoryComponent } from './inventory/inventory.component';


const routes: Routes = [

  {
    path: 'inventory',
    loadChildren: () => import('src/app/modules/home/inventory/inventory.module').then(m => m.InventoryModule)
  },
  {
    path: 'create-article',
    component: CreateArticleComponent,
  },
  {
    path: 'consult-article',
    component: ConsultArticleComponent,
  },
  {
    path: 'update-article',
    component: UpdateArticleComponent,
  },
  {
    path: 'delete-article',
    component: DeleteArticleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }