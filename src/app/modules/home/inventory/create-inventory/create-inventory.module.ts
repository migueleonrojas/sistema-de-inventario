import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/material/material.module';
import { CommonModule } from '@angular/common';  
import { ReactiveFormsModule } from '@angular/forms';
import { CreateInventoryRoutingModule } from './create-inventory-routing.module';
import { ViewArticleAssignedToInventoryComponent } from './selecting-articles/view-article-assigned-to-inventory/view-article-assigned-to-inventory.component';
import { EditArticleAssignedToInventoryComponent } from './selecting-articles/edit-article-assigned-to-inventory/edit-article-assigned-to-inventory.component';

@NgModule({
  declarations: [
    ViewArticleAssignedToInventoryComponent,
    EditArticleAssignedToInventoryComponent
  ],
  imports: [
    MaterialModule,
    ReactiveFormsModule,
    CreateInventoryRoutingModule,
    CommonModule
  ]
})
export class CreateInventoryModule { }