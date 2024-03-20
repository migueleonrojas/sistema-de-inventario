import { Component, HostListener, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { SharingService } from 'src/app/core/services/sharing.service';

@Component({
  selector: 'app-mat-drawer',
  templateUrl: './mat-drawer.component.html',
  styleUrls: ['./mat-drawer.component.scss']
})
export class MatDrawerComponent implements OnInit {

  matDrawer:MatDrawer;
  constructor(
    private sharingService: SharingService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.sharingService.sharingMatDrawerObservable.subscribe((matDrawer:MatDrawer)=> {

      this.matDrawer = matDrawer;

    });
  }

  goTo(path:string){
    this.router.navigate([path]);
    this.matDrawer.toggle();
  }

  toggleMatDrawer() {
    this.matDrawer.toggle();
  }

}
