import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Produit } from '../models/produit';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private getAllProductsURL="http://127.0.0.1:8081/api/v1/products"
  private deleteProductURL="http://127.0.0.1:8081/api/v1/products/"
  private addProductURL="http://127.0.0.1:8081/api/v1/products/"
  private getProductURL="http://127.0.0.1:8081/api/v1/products/"
  private updateProductURL="http://127.0.0.1:8081/api/v1/products/"

  constructor(private http: HttpClient) { }
  getAllProducts(){
    let token=localStorage.getItem("mytoken")
  
    let options=new HttpHeaders().set("Authorization","Bearer " +token)
    return this.http.get<any>(this.getAllProductsURL,{headers:options});

  }

  deleteProduct(id:string){
    let token=localStorage.getItem("mytoken")
  
    let options=new HttpHeaders().set("Authorization","Bearer " +token)
    return this.http.delete<any>(this.deleteProductURL+id,{headers:options});
  }

  addProduct(produit){
let token=localStorage.getItem("mytoken")

let options=new HttpHeaders().set("Authorization","Bearer " +token)

return this.http.post<any>(this.addProductURL, produit,{headers:options})

  }
  getOneProduct(id:Number){
    let token=localStorage.getItem("mytoken")
    
    let options=new HttpHeaders().set("Authorization","Bearer " +token)
    
    return this.http.get<any>(this.getProductURL+id,{headers:options})
    
      }
updateProduct(produit:Produit){
  let token=localStorage.getItem("mytoken")
    
  let options=new HttpHeaders().set("Authorization","Bearer " +token)
  return this.http.post<any>(this.updateProductURL,produit,{headers:options});
}
     

}
