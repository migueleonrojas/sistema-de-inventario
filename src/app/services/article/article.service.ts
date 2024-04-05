import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Article } from 'src/app/interfaces/article/article.interface';
import { CreateArticleResponse } from 'src/app/interfaces/article/create-article-response.interface';
import { ConsultArticleResponse } from 'src/app/interfaces/article/consult-articles-response.interface';


@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(
    private httpClient:HttpClient
  ){}

  createArticle(article: Article): Observable<CreateArticleResponse>{
    return this.httpClient.post<CreateArticleResponse>(`${environment.apiUrl}/create-article`, article);
  }

  consultArticles(article:Article):Observable<ConsultArticleResponse> {
    return this.httpClient.post<ConsultArticleResponse>(`${environment.apiUrl}/consult-articles`, article);
  }

}