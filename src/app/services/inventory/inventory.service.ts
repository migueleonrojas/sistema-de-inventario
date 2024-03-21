import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Inventory } from 'src/app/interfaces/inventory/inventory.interface';
import { CreateInventoryResponse } from 'src/app/interfaces/inventory/create-inventory-response.interface';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(
    private httpClient:HttpClient
  ){}

  createInventory(inventory: Inventory):Observable<CreateInventoryResponse> {
    return this.httpClient.post<CreateInventoryResponse>(`${environment.apiUrl}/create-inventory`, inventory);
  }

}