import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Articles } from './models/articles-interface';


@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  articles: Articles;

  constructor(private http: HttpClient) {  }

  getData(): void {
    this.http.get(environment.articles_url).subscribe(res => {
      // this.articles = res;
      console.log('res');
    });
  }

}
