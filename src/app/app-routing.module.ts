import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCartComponent } from './components/all-cart/all-cart.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { LoginComponent } from './components/login/login.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductUpdateComponent } from './components/product-update/product-update.component';
import { ProductComponent } from './components/product/product.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {path:"", pathMatch:"full", component:ProductComponent},
  {path:"products", component:ProductComponent},
  {path:"products/category/:brandId", component:ProductComponent},
  {path:"products/category/color/:colorId", component:ProductComponent},
  {path:"products/carDetail/:carId", component:ProductDetailComponent},
  {path:"products/brand/:selectedBrand/color/:selectedColor", component:ProductComponent},
  {path:"product/yourCart", component:AllCartComponent},
  {path:"products/add", component:ProductAddComponent, canActivate:[LoginGuard]},
  {path:"color/add", component:ColorAddComponent},
  {path:"products/update", component:ProductUpdateComponent},
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
