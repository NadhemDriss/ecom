import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from "@angular/forms"
import { HttpClient } from "@angular/common/http"
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Produit } from 'src/app/models/produit';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-produit-modif',
  templateUrl: './produit-modif.component.html',
  styleUrls: ['./produit-modif.component.css','./../../../assets/sb-admin-2.css']
})
export class ProduitModifComponent implements OnInit {

  categoriesList=[];
  public updateProductForm:FormGroup
  constructor(fb: FormBuilder,
   private ps: ProductService,
   private cs:CategoryService,
   private router:Router,
    private route:ActivatedRoute) {
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
this.updateProductForm=fb.group(productFormControl)



     }

     get myname(){return this.updateProductForm.get('name')}
     get mydescription(){return this.updateProductForm.get('description')}
     get myprice(){return this.updateProductForm.get('price')}




  ngOnInit(): void {
    let idProd= this.route.snapshot.params.id;
    console.log(idProd)
    this.ps.getOneProduct(idProd).subscribe(
    (result) => {
      let product=result;
      console.log(result);
      this.updateProductForm.patchValue({
        name:product.name,
        description:product.description,
         price:product.price,
         category_id:product.category_id,
      })
      
    }
    ,
    (error) => {
      console.log(error);
    }
   )
   {this.cs.getCategories().subscribe(
    result=>{

      this.categoriesList=result;
    },
    error =>{
      console.log(error);
    })}
  }
updateProduct(){
  let data = this.updateProductForm.value
let idProduct=this.route.snapshot.params.id;

  let produit= new Produit(idProduct,data.name,data.description,data.price,data.category_id)

  console.log(produit);
  this.ps.updateProduct(produit).subscribe(


    res=>{
      console.log(res);
      this.router.navigate(['/produits-list'])
      
    },
    err=>{
      console.log(err);
    }
  )




  

}  

}
