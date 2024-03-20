import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { SharingService } from './core/services/sharing.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements AfterViewInit{
  @ViewChild('matDrawer') matDrawer: MatDrawer;

  constructor(
    private sharingService: SharingService,
  ){
    
  }
  
  ngAfterViewInit(): void {
    this.sharingService.sharingMatDrawerObservableData = this.matDrawer;
  } 

}

