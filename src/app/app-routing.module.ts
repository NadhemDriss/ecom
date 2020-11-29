import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesListComponent } from './compnents/categories-list/categories-list.component';
import { DashboardComponent } from './compnents/dashboard/dashboard.component';
import { HomeComponent } from './compnents/home/home.component';
import { LoginComponent } from './compnents/login/login.component';
import { Page404Component } from './compnents/page404/page404.component';
import { ProduitAjoutComponent } from './compnents/produit-ajout/produit-ajout.component';
import { ProduitModifComponent } from './compnents/produit-modif/produit-modif.component';
import { ProduitsListComponent } from './compnents/produits-list/produits-list.component';
import { RegisterComponent } from './compnents/register/register.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'register',
    component: RegisterComponent
  },
  {
   path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  
  },
  {
  path: 'categories-list',
    component: CategoriesListComponent,
    canActivate: [AuthGuard]
  
  },
  {
  path: 'produits-list',
    component: ProduitsListComponent,
    canActivate: [AuthGuard]
  
  },
  {
    path: 'produits-ajout',
      component: ProduitAjoutComponent,
      canActivate: [AuthGuard]
    
    },
    {
      path: 'produits-modif/:id',
        component: ProduitModifComponent,
        canActivate: [AuthGuard]
      
      },
  {
    path: '**',
    component: Page404Component
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
