import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewServiceService {
  api_key = '3f7bf6a4b51245bea4fc33384135788f'
  constructor(private http:HttpClient) {}
    initSource(){
      return this.http.get('https://newsapi.org/v2/sources?language=en&apiKey='+this.api_key)
    }
    getArticlesByid(source:string){
      return this.http.get('https://newsapi.org/v2/top-headlines?sources='+source+'&apiKey='+this.api_key)
    }
    initArticles(){
      return this.http.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey='+this.api_key)
    }

   
}
