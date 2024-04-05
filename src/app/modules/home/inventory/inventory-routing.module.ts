import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { CreateInventoryComponent } from "./create-inventory/create-inventory.component";
import { ConsultInventoryComponent } from "./consult-inventory/consult-inventory.component";
import { UpdateInventoryComponent } from "./update-inventory/update-inventory.component";
import { DeleteInventoryComponent } from "./delete-inventory/delete-inventory.component";

const routes: Routes = [
  {
    path: 'create-inventory',
    component: CreateInventoryComponent,
    loadChildren: () => import('src/app/modules/home/inventory/create-inventory/create-inventory.module').then(m => m.CreateInventoryModule)
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
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }