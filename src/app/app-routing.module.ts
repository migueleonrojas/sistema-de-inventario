import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
  {
    path: 'auth',
    loadChildren: () => import('src/app/modules/auth/auth.module').then(m => m.AuthModule)
  }  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
