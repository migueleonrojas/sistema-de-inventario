import { Injectable } from "@angular/core";
import { MatDrawer } from "@angular/material/sidenav";
import { BehaviorSubject, Observable } from "rxjs";
import { User } from "src/app/interfaces/user/user.interface";


@Injectable()
export class SharingService {

  private sharingDataObservablePrivate: BehaviorSubject<User> = new BehaviorSubject<User>({});

  private sharingMatDrawerObservablePrivate: BehaviorSubject<MatDrawer> = new BehaviorSubject<MatDrawer>(null);

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


}