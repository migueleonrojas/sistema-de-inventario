import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateInventoryRoutingModule } from './create-inventory-routing.module';

@NgModule({
  declarations: [
    
  ],
  imports: [
    MaterialModule,
    ReactiveFormsModule,
    CreateInventoryRoutingModule
  ]
})
export class CreateInventoryModule { }