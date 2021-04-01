import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCartComponent } from './components/all-cart/all-cart.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  {path:"", pathMatch:"full", component:ProductComponent},
  {path:"products", component:ProductComponent},
  {path:"products/category/:brandId", component:ProductComponent},
  {path:"products/category/color/:colorId", component:ProductComponent},
  {path:"products/carDetail/:carId", component:ProductDetailComponent},
  {path:"products/brand/:selectedBrand/color/:selectedColor", component:ProductComponent},
  {path:"product/yourCart", component:AllCartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
