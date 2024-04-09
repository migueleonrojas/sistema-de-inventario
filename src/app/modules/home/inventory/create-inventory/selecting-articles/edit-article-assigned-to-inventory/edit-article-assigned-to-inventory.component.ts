import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ArticleAssignedToInventory } from 'src/app/interfaces/article-assigned-to-inventory/article_assigned_to_inventory.interface';
import { TypeDataValidator } from 'src/app/validators/type-data.validator';
import swal, { SweetAlertResult } from'sweetalert2';

@Component({
  selector: 'app-edit-article-assigned-to-inventory',
  templateUrl: './edit-article-assigned-to-inventory.component.html',
  styleUrls: ['./edit-article-assigned-to-inventory.component.scss']
})
export class EditArticleAssignedToInventoryComponent implements OnInit {

  editArticleAssignedToInventoryForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditArticleAssignedToInventoryComponent, ArticleAssignedToInventory>,
    @Inject(MAT_DIALOG_DATA) public articleAssignedToInventoryData: ArticleAssignedToInventory,
    private typeDataValidator:TypeDataValidator
  ){}


  ngOnInit(): void {

    

    this.editArticleAssignedToInventoryForm = new FormGroup({
      nameArticleForm: new FormControl({value: this.articleAssignedToInventoryData.name, disabled: true}),
      modelArticleForm: new FormControl({value: this.articleAssignedToInventoryData.model, disabled: true}),
      brandArticleForm: new FormControl({value: this.articleAssignedToInventoryData.brand, disabled: true}),
      amountArticleForm: new FormControl({value: this.articleAssignedToInventoryData.amount, disabled: false}, [
        this.typeDataValidator.validateNumber, Validators.min(1), Validators.max(99)
      ]),
      serialArticleForm: new FormControl({value: this.articleAssignedToInventoryData.serial, disabled: true}),
      observationArticleForm: new FormControl({value: this.articleAssignedToInventoryData.observation, disabled: false})
    });
  }

  closeDialog(){
    this.dialogRef.close({
      id_inventory: this.articleAssignedToInventoryData.id_inventory,
      id_location: this.articleAssignedToInventoryData.id_location,
      name: this.articleAssignedToInventoryData.name,
      model: this.articleAssignedToInventoryData.model,
      brand: this.articleAssignedToInventoryData.brand,
      amount: this.articleAssignedToInventoryData.amount,
      serial: this.articleAssignedToInventoryData.serial,
      observation: this.articleAssignedToInventoryData.observation,
    });

  }


  async closeAndSaveChangesDialog() {

    const confirmDialog: SweetAlertResult<any> = await swal.fire({
      title: "Modificando Articulo",
      text: "¿Estas seguro de que quieres modificar este articulo?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si deseo modificarlo.",
      cancelButtonText: "No deseo modificarlo."
    })

    if(!confirmDialog.isConfirmed) {

      this.dialogRef.close({
        id_inventory: this.articleAssignedToInventoryData.id_inventory,
        id_location: this.articleAssignedToInventoryData.id_location,
        name: this.articleAssignedToInventoryData.name,
        model: this.articleAssignedToInventoryData.model,
        brand: this.articleAssignedToInventoryData.brand,
        amount: this.articleAssignedToInventoryData.amount,
        serial: this.articleAssignedToInventoryData.serial,
        observation: this.articleAssignedToInventoryData.observation,
      });

      return;
    }

    this.dialogRef.close({
      id_inventory: this.articleAssignedToInventoryData.id_inventory,
      id_location: this.articleAssignedToInventoryData.id_location,
      name: this.articleAssignedToInventoryData.name,
      model: this.articleAssignedToInventoryData.model,
      brand: this.articleAssignedToInventoryData.brand,
      amount: this.editArticleAssignedToInventoryForm.get('amountArticleForm').value,
      serial: this.articleAssignedToInventoryData.serial,
      observation: this.editArticleAssignedToInventoryForm.get('observationArticleForm').value,
    });

  }


}
