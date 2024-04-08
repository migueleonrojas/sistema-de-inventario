import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from 'src/app/modules/home/home-routing.module';
import { MaterialModule } from 'src/app/material/material.module';
import { CreateArticleComponent } from './article/create-article/create-article.component';
import { ConsultArticleComponent } from './article/consult-article/consult-article.component';
import { UpdateArticleComponent } from './article/update-article/update-article.component';
import { DeleteArticleComponent } from './article/delete-article/delete-article.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CreateArticleComponent,
    ConsultArticleComponent,
    UpdateArticleComponent,
    DeleteArticleComponent

  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [
  ]
})
export class HomeModule { }