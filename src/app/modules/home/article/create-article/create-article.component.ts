import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss']
})
export class CreateArticleComponent implements OnInit {
  articleCreateForm: FormGroup;


  ngOnInit(): void {
    this.articleCreateForm = new FormGroup({
      nameInventoryControl: new FormControl('', [Validators.required]),
      departmentControl:    new FormControl('', [Validators.required])
    })
  }


}
