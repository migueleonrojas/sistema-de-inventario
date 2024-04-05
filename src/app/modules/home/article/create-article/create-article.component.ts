import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CreateArticleResponse } from 'src/app/interfaces/article/create-article-response.interface';
import { ArticleService } from 'src/app/services/article/article.service';
import { TypeDataValidator } from 'src/app/validators/type-data.validator';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss']
})
export class CreateArticleComponent implements OnInit {
  articleCreateForm: FormGroup;

  constructor(
    private typeDataValidator:TypeDataValidator,
    private articleService:ArticleService
  ){

  }


  ngOnInit(): void {

    this.articleCreateForm = new FormGroup({
      nameArticleControl:  new FormControl('',        [Validators.required, Validators.minLength(3), Validators.maxLength(100), this.typeDataValidator.validateName]),
      brandArticleControl: new FormControl('',        [Validators.required, Validators.minLength(3), Validators.maxLength(100), this.typeDataValidator.validateName]),
      modelArticleControl: new FormControl('',        [Validators.required, Validators.minLength(3), Validators.maxLength(100), this.typeDataValidator.validateName]),
      serialArticleControl: new FormControl('',       [Validators.required, Validators.minLength(3), Validators.maxLength(100), this.typeDataValidator.validateName]),
      observationArticleControl: new FormControl('',  [Validators.required, Validators.minLength(3), Validators.maxLength(4000), this.typeDataValidator.validateText])
    });
  }


  createArticle() {

    this.articleService.createArticle({
      name: this.articleCreateForm.get('nameArticleControl').value,
      brand: this.articleCreateForm.get('brandArticleControl').value,
      model: this.articleCreateForm.get('modelArticleControl').value,
      serial: this.articleCreateForm.get('serialArticleControl').value,
      observation: this.articleCreateForm.get('observationArticleControl').value
    })
    .subscribe((response: CreateArticleResponse) => {
      for(let name in this.articleCreateForm.controls) {
        this.articleCreateForm.controls[name].setValue('');
        this.articleCreateForm.controls[name].markAsUntouched();
        this.articleCreateForm.controls[name].markAsPending();
      }
    });


    


  }
  


}
