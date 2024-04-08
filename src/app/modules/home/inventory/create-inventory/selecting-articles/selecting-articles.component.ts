import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatListOption, MatSelectionList } from '@angular/material/list';
import { ArticleAssignedToInventory } from 'src/app/interfaces/article-assigned-to-inventory/article_assigned_to_inventory.interface';
import { Article } from 'src/app/interfaces/article/article.interface';
import { AtributtesArticles } from 'src/app/interfaces/article/atributtes-articles.interface';
import { ConsultArticleResponse } from 'src/app/interfaces/article/consult-articles-response.interface';
import { ArticleService } from 'src/app/services/article/article.service';
import * as arrayUtil from 'src/app/utils/array.util';
import swal, { SweetAlertResult } from'sweetalert2';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-selecting-articles',
  templateUrl: './selecting-articles.component.html',
  styleUrls: ['./selecting-articles.component.scss']
})
export class SelectingArticlesComponent implements OnInit  {
  @ViewChild('articlesList') articlesList: MatSelectionList;
  articles: Article[] = [];
  addedArticles: ArticleAssignedToInventory [] = [];
  auxAddedArticles: ArticleAssignedToInventory[] = [];
  atributtesArticles: AtributtesArticles[] = [
    {value: 'name',         viewValue: 'nombre'},
    {value: 'brand',        viewValue: 'marca'},
    {value: 'model',        viewValue: 'modelo'},
    {value: 'serial',       viewValue: 'serial'},
    {value: 'observation',  viewValue: 'observación'},
  ];

  selectedAtributteArticle: AtributtesArticles = {
    value: '',
    viewValue: ''
  };
  consultArticleForm: FormGroup;
  isConsultedArticles: boolean = false;
  
  constructor(
    private articleService:ArticleService,
    public matDialog: MatDialog
  ){}


  ngOnInit(): void {
    this.consultArticleForm = new FormGroup({
      atributteFormControl: new FormControl('', [Validators.required]),
      selectedAtributtesArticlesControl: new FormControl('', [Validators.required])
    })
  }


  selectingAtributteArticle() {
    this.selectedAtributteArticle = this.consultArticleForm.get('selectedAtributtesArticlesControl').value;
  }

  consultingArticles(){
    this.articleService.consultArticles({
      [this.selectedAtributteArticle.value]: this.consultArticleForm.get('atributteFormControl').value
    }).
    subscribe((response: ConsultArticleResponse) => {
      this.articles = response.result.articles;
      this.isConsultedArticles = true;
    })
  }

  addingArticles(list:MatSelectionList) {

    if(this.auxAddedArticles.length === 0) {
      list.selectedOptions.selected.map<MatListOption>((item: MatListOption) => {
        
        this.addedArticles.push({
          id: item.value.id,
          id_inventory: 1,
          id_location: 1,
          amount: 1,
          brand: item.value.brand,
          model: item.value.model,
          name: item.value.name,
          observation: item.value.observation,
          serial: item.value.serial
        });
        return item;
      });
      this.auxAddedArticles = this.addedArticles;
    }
    else {
      list.selectedOptions.selected.map<MatListOption>((item: MatListOption) => {
        
        this.addedArticles.push({
          id: item.value.id,
          id_inventory: 1,
          id_location: 1,
          amount: 1,
          brand: item.value.brand,
          model: item.value.model,
          name: item.value.name,
          observation: item.value.observation,
          serial: item.value.serial
        });
        return item;
      });

      this.addedArticles = arrayUtil.ArrayUtil.noDuplicatesArrayObjects([...this.auxAddedArticles, ...this.addedArticles], 'id');
      this.auxAddedArticles = this.addedArticles;
    }

  }

  saveArticles(list:MatSelectionList){

  }

  addAmount(e:MouseEvent, index:number){
    e.stopPropagation();
    this.addedArticles[index].amount += 1;

  }

  substractAmount(e:MouseEvent, index:number){
    e.stopPropagation();
    if(this.addedArticles[index].amount === 1) return;
    this.addedArticles[index].amount -= 1;
  }

  async deleteSelectedArticles(list:MatSelectionList){

    const confirmDialog: SweetAlertResult<any> = await swal.fire({
      title: "Eliminando articulos seleccionados...",
      text: "¿Estas seguro de que quieres eliminar los articulos seleccionados de la lista?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si deseo eliminarlos.",
      cancelButtonText: "No deseo eliminarlos."
    })

    if(!confirmDialog.isConfirmed) {
      return;
    }


    let articlesDeleted: any[] = list.selectedOptions.selected.map<MatListOption>(e => e.value);

    articlesDeleted.map((deletedElem:ArticleAssignedToInventory) => { 
      this.addedArticles = this.addedArticles.filter(e => e.id !== deletedElem.id);
    });

    this.auxAddedArticles = this.addedArticles;
  }


  stopPropagation(e:MouseEvent){
    e.stopPropagation();
  }


}
