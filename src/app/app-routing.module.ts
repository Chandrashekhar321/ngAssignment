import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate  } from '@angular/router';
import {
  AuthGuardService as AuthGuard
} from './auth-guard.service';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'dashboard', component: MainDashboardComponent, canActivate: [AuthGuard]
  },
  {
    path: 'products', component: ProductComponent, canActivate: [AuthGuard]
  },
  {
    path: 'home', component: HomeComponent, canActivate: [AuthGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
