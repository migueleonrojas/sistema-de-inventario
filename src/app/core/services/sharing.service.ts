import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { User } from "src/app/interfaces/user/user.interface";


@Injectable()
export class SharingService {

  private sharingDataObservablePrivate: BehaviorSubject<User> = new BehaviorSubject<User>({});

  get sharingUserObservable(): Observable<User> {
    return this.sharingDataObservablePrivate.asObservable();
  }

  set sharingUserObservableData(user: User) {
    this.sharingDataObservablePrivate.next(user);
  }

}