import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";


@Injectable()
export class SharingService {

  private sharingDataObservablePrivate: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  get sharingUserObservable(): Observable<any> {
    return this.sharingDataObservablePrivate.asObservable();
  }

  set sharingUserObservableData(user: any) {
    this.sharingDataObservablePrivate.next(user);
  }

}