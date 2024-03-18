import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from 'src/app/modules/home/home-routing.module';
import { PrincipalComponent } from './principal/principal.component'

@NgModule({
  declarations: [
    PrincipalComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }