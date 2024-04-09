import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ArticleAssignedToInventory } from 'src/app/interfaces/article-assigned-to-inventory/article_assigned_to_inventory.interface';

@Component({
  selector: 'app-view-article-assigned-to-inventory',
  templateUrl: './view-article-assigned-to-inventory.component.html',
  styleUrls: ['./view-article-assigned-to-inventory.component.scss']
})
export class ViewArticleAssignedToInventoryComponent implements OnInit {
  viewArticleAssignedToInventoryForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<ViewArticleAssignedToInventoryComponent, ArticleAssignedToInventory>,
    @Inject(MAT_DIALOG_DATA) public articleAssignedToInventoryData: ArticleAssignedToInventory
  ){}


  ngOnInit(): void {

    

    this.viewArticleAssignedToInventoryForm = new FormGroup({
      nameArticleForm: new FormControl({value: this.articleAssignedToInventoryData.name, disabled: true}),
      modelArticleForm: new FormControl({value: this.articleAssignedToInventoryData.model, disabled: true}),
      brandArticleForm: new FormControl({value: this.articleAssignedToInventoryData.brand, disabled: true}),
      amountArticleForm: new FormControl({value: this.articleAssignedToInventoryData.amount, disabled: true}),
      serialArticleForm: new FormControl({value: this.articleAssignedToInventoryData.serial, disabled: true}),
      observationArticleForm: new FormControl({value: this.articleAssignedToInventoryData.observation, disabled: true})
    });
  }


  closeDialog() {
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


}
