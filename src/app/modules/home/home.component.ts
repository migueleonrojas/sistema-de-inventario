import { Component, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { SharingService } from 'src/app/core/services/sharing.service';
import { User } from 'src/app/interfaces/user/user.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  currentUser: User;
  matDrawer:MatDrawer;
  constructor(
    private sharingService: SharingService,
  ){
    
  }

  ngOnInit(): void {
    this.sharingService.sharingMatDrawerObservable.subscribe((matDrawer:MatDrawer)=> {

      this.matDrawer = matDrawer;

    });

    this.sharingService.sharingUserObservable.subscribe((user: User) => {

      this.currentUser = JSON.stringify(user) === "{}" ? JSON.parse(localStorage.getItem('user')): user;

    });
  }

  toggleMatDrawer() {
    this.matDrawer.toggle();
  }
  

}
