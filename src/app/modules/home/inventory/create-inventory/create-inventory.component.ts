import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatStep, MatStepper } from '@angular/material/stepper';
import { Observable, firstValueFrom, forkJoin } from 'rxjs';
import { ArticleAssignedToInventory } from 'src/app/interfaces/article-assigned-to-inventory/article_assigned_to_inventory.interface';
import { CreateInventoryResponse } from 'src/app/interfaces/inventory/create-inventory-response.interface';
import { InventoryService } from 'src/app/services/inventory/inventory.service';

@Component({
  selector: 'app-create-inventory',
  templateUrl: './create-inventory.component.html',
  styleUrls: ['./create-inventory.component.scss']
})
export class CreateInventoryComponent {
  @ViewChild('stepper') theStepper: MatStepper;
  formCreatingInventory: FormGroup;
  createInventoryResponse: CreateInventoryResponse;
  articles:ArticleAssignedToInventory[];
  isLinear = true;
  stepCreatingInventory = false;
  stepSelectingArticles = false;

  constructor(
    private inventoryService:InventoryService
  ){}

  async getFormChild(formGroup: FormGroup<any>) {
    if(formGroup.valid) {
      this.formCreatingInventory = formGroup;

      /* let createInventoryResponse:CreateInventoryResponse = await firstValueFrom(this.inventoryService.createInventory({
        name_inventory: formGroup.get('nameInventoryControl').value,
        department: formGroup.get('departmentControl').value
      })); */

      

      /* this.formCreatingInventory = formGroup;
      this.theStepper.selected.completed = true;
      this.theStepper.selected.editable = false;
      this.theStepper.next(); */
    }
  }

  getSelectionListChild(articleAssignedToInventory:ArticleAssignedToInventory[]) {

    if(articleAssignedToInventory.length > 0) {

     /*  forkJoin([
        this.inventoryService.createInventory({
          department
        })
      ]) */
      
      /* this.inventoryService.createInventory */

      /* console.log(this.formCreatingInventory.get('departmentControl').value);
      console.log(this.formCreatingInventory.get('nameInventoryControl').value); */
      
    }
  }
 
}
