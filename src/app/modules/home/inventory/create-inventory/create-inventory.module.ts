import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateInventoryRoutingModule } from './create-inventory-routing.module';
import { ViewObservationOfArticleAssignedToInventoryComponent } from './selecting-articles/view-observation-of-article-assigned-to-inventory/view-observation-of-article-assigned-to-inventory.component';

@NgModule({
  declarations: [
    ViewObservationOfArticleAssignedToInventoryComponent
  ],
  imports: [
    MaterialModule,
    ReactiveFormsModule,
    CreateInventoryRoutingModule
  ]
})
export class CreateInventoryModule { }