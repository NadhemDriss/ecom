import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from "@angular/forms"
import { HttpClient } from "@angular/common/http"
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Produit } from 'src/app/models/produit';
import { CategoryService } from 'src/app/services/category.service';
@Component({
  selector: 'app-produit-ajout',
  templateUrl: './produit-ajout.component.html',
  styleUrls: ['./produit-ajout.component.css','./../../../assets/sb-admin-2.css']
})
export class ProduitAjoutComponent implements OnInit {
  categoriesList=[];
  public produitForm:FormGroup
  constructor(fb: FormBuilder,
   private ps: ProductService,
   private cs:CategoryService,
    private router:Router) {
let productFormControl={
name: new FormControl('',[
  Validators.required,
  Validators.minLength(3),
  Validators.pattern("[A-Za-z .'-]+")

]),
description: new FormControl('',[

  Validators.required,
  Validators.minLength(10),

]),
price: new FormControl('',[
Validators.required,
Validators.pattern("^\\d+\\.\\d{0,2}$")

]),
category_id: new FormControl(''),
}
this.produitForm=fb.group(productFormControl)



     }

  ngOnInit(): void {this.cs.getCategories().subscribe(
    result=>{

      this.categoriesList=result;
      
    },
    error =>{
      console.log(error);
    }
  )
  }
  get myname(){return this.produitForm.get('name')}
  get mydescription(){return this.produitForm.get('description')}
  get myprice(){return this.produitForm.get('price')}


addProduct(){
  let data = this.produitForm.value
  let produit= new Produit(null,data.name,data.description,data.price,data.category_id)

  console.log(data);
   //envoi data vers API 

   this.ps.addProduct(produit).subscribe(
    (result) => {
      console.log(result);
      this.router.navigateByUrl('/produits-list')
    }
    ,
    (error) => {
      console.log(error);
    }
   )

  }}