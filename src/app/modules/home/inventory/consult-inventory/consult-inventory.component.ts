import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ConsultInventoryResponse } from 'src/app/interfaces/inventory/consult-inventory-response.interface';
import { Inventory } from 'src/app/interfaces/inventory/inventory.interface';
import { InventoryService } from 'src/app/services/inventory/inventory.service';

@Component({
  selector: 'app-consult-inventory',
  templateUrl: './consult-inventory.component.html',
  styleUrls: ['./consult-inventory.component.scss']
})
export class ConsultInventoryComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  inventoryConsultForm: FormGroup;
  data: MatTableDataSource<Inventory>;
  inventorys: Inventory[];
  isConsultedInventories: boolean = false;

  constructor(
    private inventoryService:InventoryService
  ) {

  }

  displayedColumns: string[] = ['name_inventory', 'department_control'];

  ngOnInit(): void {
    this.inventoryConsultForm = new FormGroup({
      nameInventoryControl: new FormControl('', [Validators.required]),
      departmentControl:    new FormControl('', [Validators.required])
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.data.filter = filterValue.trim().toLowerCase();
    if (this.data.paginator) {
      this.data.paginator.firstPage();
    }
  }


  onSubmit() {

    this.inventoryService.consultInventory({
      name_inventory: this.inventoryConsultForm.controls['nameInventoryControl'].value,
      department: this.inventoryConsultForm.controls['departmentControl'].value
    })
    .subscribe((response: ConsultInventoryResponse) => {
      this.data = new MatTableDataSource(response.result.inventorys);
      if (this.paginator) {
        this.data.paginator = this.paginator;
        this.data.sort = this.sort;
        
      }
      this.isConsultedInventories = true;
    })

  }

}
