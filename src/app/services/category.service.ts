import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
private getAllCategoriesURL="http://127.0.0.1:8081/api/v1/categories"
private getCategoriesURL="http://127.0.0.1:8081/api/v1/categories/categories"
  constructor(private http: HttpClient) { }
  getAllCategories(){
    let token=localStorage.getItem("mytoken")
  
    let options=new HttpHeaders().set("Authorization","Bearer " +token)
    return this.http.get<any>(this.getAllCategoriesURL,{headers:options});

  }
  getCategories(){
    let token=localStorage.getItem("mytoken")
  
    let options=new HttpHeaders().set("Authorization","Bearer " +token)
    return this.http.get<any>(this.getCategoriesURL,{headers:options});

  }

  
}
