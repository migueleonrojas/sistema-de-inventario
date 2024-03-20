import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from 'src/app/modules/home/home-routing.module';
import { MaterialModule } from 'src/app/material/material.module';
import { CreateInventoryComponent } from './inventory/create-inventory/create-inventory.component';
import { ConsultInventoryComponent } from './inventory/consult-inventory/consult-inventory.component';
import { UpdateInventoryComponent } from './inventory/update-inventory/update-inventory.component';
import { DeleteInventoryComponent } from './inventory/delete-inventory/delete-inventory.component';
import { CreateArticleComponent } from './article/create-article/create-article.component';
import { ConsultArticleComponent } from './article/consult-article/consult-article.component';
import { UpdateArticleComponent } from './article/update-article/update-article.component';
import { DeleteArticleComponent } from './article/delete-article/delete-article.component';


@NgModule({
  declarations: [
    CreateInventoryComponent,
    ConsultInventoryComponent,
    UpdateInventoryComponent,
    DeleteInventoryComponent,
    CreateArticleComponent,
    ConsultArticleComponent,
    UpdateArticleComponent,
    DeleteArticleComponent

  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule
  ]
})
export class HomeModule { }