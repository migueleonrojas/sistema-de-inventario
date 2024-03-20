import { Component, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { SharingService } from 'src/app/core/services/sharing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  matDrawer:MatDrawer;
  constructor(
    private sharingService: SharingService,
  ){
    
  }

  ngOnInit(): void {
    this.sharingService.sharingMatDrawerObservable.subscribe((matDrawer:MatDrawer)=> {

      this.matDrawer = matDrawer;

    });
  }

  toggleMatDrawer() {
    this.matDrawer.toggle();
  }
  

}
