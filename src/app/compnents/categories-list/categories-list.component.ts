import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css','./../../../assets/sb-admin-2.css']
})
export class CategoriesListComponent implements OnInit {
  categoriesList=[];
  allcategoriesList=[];
  constructor(private cs:CategoryService, ) { }

  ngOnInit(): void {
    this.cs.getAllCategories().subscribe(
      result=>{

        this.categoriesList=result;
        this.allcategoriesList=result;
      },
      error =>{
        console.log(error);
      }
    )
    
    
  }
filtre(value){
this.categoriesList=this.allcategoriesList.filter(c=>{
  
  return c.name.includes(value)||c.id==value
  
})
}

}
