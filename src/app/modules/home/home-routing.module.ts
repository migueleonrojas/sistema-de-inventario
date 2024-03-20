import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { CreateInventoryComponent } from   'src/app/modules/home/inventory/create-inventory/create-inventory.component';
import { ConsultInventoryComponent } from  'src/app/modules/home/inventory/consult-inventory/consult-inventory.component';
import { DeleteInventoryComponent } from './inventory/delete-inventory/delete-inventory.component';
import { CreateArticleComponent } from './article/create-article/create-article.component';
import { ConsultArticleComponent } from './article/consult-article/consult-article.component';
import { UpdateInventoryComponent } from './inventory/update-inventory/update-inventory.component';
import { UpdateArticleComponent } from './article/update-article/update-article.component';
import { DeleteArticleComponent } from './article/delete-article/delete-article.component';


const routes: Routes = [
  {
    path: 'create-inventory',
    component: CreateInventoryComponent,
  },
  {
    path: 'consult-inventory',
    component: ConsultInventoryComponent,
  },
  {
    path: 'update-inventory',
    component: UpdateInventoryComponent
  },
  {
    path: 'delete-inventory',
    component: DeleteInventoryComponent,
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