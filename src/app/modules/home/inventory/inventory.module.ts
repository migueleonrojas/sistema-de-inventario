import { NgModule } from '@angular/core';
import { ConsultInventoryComponent } from './consult-inventory/consult-inventory.component';
import { CreateInventoryComponent } from './create-inventory/create-inventory.component';
import { DeleteInventoryComponent } from './delete-inventory/delete-inventory.component';
import { UpdateInventoryComponent } from './update-inventory/update-inventory.component';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InventoryRoutingModule } from './inventory-routing.module';
import { CommonModule } from '@angular/common';
import { CreatingInventoryComponent } from './create-inventory/creating-inventory/creating-inventory.component';
import { SelectingArticlesComponent } from './create-inventory/selecting-articles/selecting-articles.component';



@NgModule({
  declarations: [
    ConsultInventoryComponent,
    CreateInventoryComponent,
    CreatingInventoryComponent,
    SelectingArticlesComponent,
    DeleteInventoryComponent,
    UpdateInventoryComponent
  ],
  imports: [
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    InventoryRoutingModule,
    CommonModule
  ]
})
export class InventoryModule { }