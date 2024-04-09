import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { CreateInventoryResponse } from 'src/app/interfaces/inventory/create-inventory-response.interface';

import { InventoryService } from 'src/app/services/inventory/inventory.service';
import { TypeDataValidator } from 'src/app/validators/type-data.validator';

@Component({
  selector: 'app-creating-inventory',
  templateUrl: './creating-inventory.component.html',
  styleUrls: ['./creating-inventory.component.scss']
})
export class CreatingInventoryComponent implements OnInit {
  @Output() form = new EventEmitter<FormGroup>();
 
  inventoryCreateForm: FormGroup;

  constructor(
    private typeDataValidator:TypeDataValidator,
    private inventoryService:InventoryService
  ){}

  ngOnInit(): void {
    this.inventoryCreateForm = new FormGroup({
      nameInventoryControl: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(100), this.typeDataValidator.validateName]),
      departmentControl:    new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(100),this.typeDataValidator.validateName])
    });

    

    

  
    
  }



  /* onSubmit() {
    this.inventoryService.createInventory({
      department: this.inventoryCreateForm.get('departmentControl').value,
      name_inventory: this.inventoryCreateForm.get('nameInventoryControl').value
    })
    .subscribe((response: CreateInventoryResponse) => {

      for(let name in this.inventoryCreateForm.controls) {
        this.inventoryCreateForm.controls[name].setValue('');
        this.inventoryCreateForm.controls[name].markAsUntouched();
        this.inventoryCreateForm.controls[name].markAsPending();
      }

    })
  } */

  onSubmit(){

    

    this.form.emit(this.inventoryCreateForm);
    

    
  }

}
