import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecom';
  public name: String = "Nadhem";
  public book: any = {
    title:"nadhem",
    price:"4200"

    


  }
  public nadhem=["nadhem","driss","raed","selem"]

  myFunction(thenadhem:string) : void {
console.log(thenadhem);
this.nadhem.splice(
  this.nadhem.indexOf(thenadhem),1
)

  }
}
