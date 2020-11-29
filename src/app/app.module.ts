import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './compnents/home/home.component';
import { LoginComponent } from './compnents/login/login.component';
import { NavbarComponent } from './compnents/navbar/navbar.component';
import { FooterComponent } from './compnents/footer/footer.component';
import { RegisterComponent } from './compnents/register/register.component';
import { Page404Component } from './compnents/page404/page404.component';

import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { DashboardComponent } from './compnents/dashboard/dashboard.component'
import { ChartsModule } from 'ng2-charts';
import { TopbarComponent } from './compnents/topbar/topbar.component';
import { SidebarComponent } from './compnents/sidebar/sidebar.component';
import { CategoriesListComponent } from './compnents/categories-list/categories-list.component';
import { ProduitsListComponent } from './compnents/produits-list/produits-list.component';
import { ProduitAjoutComponent } from './compnents/produit-ajout/produit-ajout.component';
import { ProduitModifComponent } from './compnents/produit-modif/produit-modif.component';

@NgModule({
  declarations: [
   HomeComponent,
   LoginComponent,
   AppComponent,
   NavbarComponent,
   FooterComponent,
   RegisterComponent,
   Page404Component,
   DashboardComponent,
   TopbarComponent,
   SidebarComponent,
   CategoriesListComponent,
   ProduitsListComponent,
   ProduitAjoutComponent,
   ProduitModifComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
