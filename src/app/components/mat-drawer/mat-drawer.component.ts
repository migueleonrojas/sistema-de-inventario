import { Component, HostListener, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { SharingService } from 'src/app/core/services/sharing.service';
import swal, { SweetAlertResult } from'sweetalert2';


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
  }

  toggleMatDrawer() {
    this.matDrawer.toggle();
  }

  async exitToApp() {
  
    const confirmDialog: SweetAlertResult<any> = await swal.fire({
      title: "Saliendo de la Aplicación...",
      text: "¿Estas seguro que quieres salir de la Aplicación?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si quiero salir.",
      cancelButtonText: "No quiero salir."
    })

    if(!confirmDialog.isConfirmed) {
      return;
    }

    localStorage.removeItem('token_user_jwt');
    localStorage.removeItem('user');
    this.matDrawer.toggle();
    this.router.navigate(['']);
  }

}
