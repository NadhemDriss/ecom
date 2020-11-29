import { Component, OnInit } from '@angular/core';
import { scaleService } from 'chart.js';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-produits-list',
  templateUrl: './produits-list.component.html',
  styleUrls: ['./produits-list.component.css','./../../../assets/sb-admin-2.css']
})
export class ProduitsListComponent implements OnInit {
  productsList=[];
  allProductsList=[];
  constructor(private ps:ProductService) { }

  ngOnInit(): void {
    this.ps.getAllProducts().subscribe(
      result=>{

        this.productsList=result;
        this.allProductsList=result;
      },
      error =>{
        console.log(error);
      }
    )
    
    
  }
filtre(value){
this.productsList=this.allProductsList.filter(c=>{
  
  return c.name.includes(value)||c.id==value
  
})
}

delete(produit){
  let x = confirm("Are you sure you want to delete"+name);
  console.log(produit.id)
  if (x){
this.ps.deleteProduct(produit.id).subscribe(
res=>{console.log(res);
  alert(`Produit supprimer`);
  this.ngOnInit();
  
  
},
err=>{console.log(err)}

)}
else return false

}
clickMethod(name:string,) {
 
  let x = confirm("Are you sure you want to delete"+name);
  if (x)
      return true;
  else
    return false;
  }
}

  

