import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatStep, MatStepper } from '@angular/material/stepper';
import { Observable } from 'rxjs';
import { ArticleAssignedToInventory } from 'src/app/interfaces/article-assigned-to-inventory/article_assigned_to_inventory.interface';

@Component({
  selector: 'app-create-inventory',
  templateUrl: './create-inventory.component.html',
  styleUrls: ['./create-inventory.component.scss']
})
export class CreateInventoryComponent {
  @ViewChild('stepper') theStepper: MatStepper;
  formCreatingInventory: FormGroup;
  articles:ArticleAssignedToInventory[];
  isLinear = true;
  stepCreatingInventory = false;
  stepSelectingArticles = false;

  getFormChild(formGroup: FormGroup<any>) {
    if(formGroup.valid) {
      this.formCreatingInventory = formGroup;
      this.theStepper.selected.completed = true;
      this.theStepper.selected.editable = false;
      this.theStepper.next();
    }
  }

  getSelectionListChild(articleAssignedToInventory:ArticleAssignedToInventory[]) {

    if(articleAssignedToInventory.length > 0) {

      console.log(this.formCreatingInventory.get('departmentControl').value);
      console.log(this.formCreatingInventory.get('nameInventoryControl').value);
      
    }
  }

  backStepper(backStepper: boolean) {

   
    this.theStepper.steps['_results'][0].editable = true;
    this.theStepper.steps['_results'][0].completed = false;
    this.theStepper.previous();

    
    
  }
 
}
