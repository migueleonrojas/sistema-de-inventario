import { Injectable } from "@angular/core";
import { MatDrawer } from "@angular/material/sidenav";
import { BehaviorSubject, Observable } from "rxjs";
import { Inventory } from "src/app/interfaces/inventory/inventory.interface";
import { User } from "src/app/interfaces/user/user.interface";


@Injectable()
export class SharingService {

  private sharingDataObservablePrivate: BehaviorSubject<User> = new BehaviorSubject<User>({});

  private sharingMatDrawerObservablePrivate: BehaviorSubject<MatDrawer> = new BehaviorSubject<MatDrawer>(null);

  private sharingInventoryObservablePrivate: BehaviorSubject<Inventory> = new BehaviorSubject<Inventory>(null);


  get sharingUserObservable(): Observable<User> {
    return this.sharingDataObservablePrivate.asObservable();
  }

  set sharingUserObservableData(user: User) {
    this.sharingDataObservablePrivate.next(user);
  }



  get sharingMatDrawerObservable(): Observable<MatDrawer> {
    return this.sharingMatDrawerObservablePrivate.asObservable();
  }

  set sharingMatDrawerObservableData(matDrawer: MatDrawer) {
    this.sharingMatDrawerObservablePrivate.next(matDrawer);
  }


  get sharingInventoryObservable():Observable<Inventory> {
    return this.sharingInventoryObservablePrivate.asObservable();
  }

  set sharingInventoryObservableData(inventory:Inventory) {
    this.sharingInventoryObservablePrivate.next(inventory);
  }

}