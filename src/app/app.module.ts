import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './components/navi/navi.component';
import { CategoryComponent } from './components/category/category.component';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { from } from 'rxjs';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';

import { ToastrModule } from 'ngx-toastr';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { FilterColorPipe } from './pipes/filter-color.pipe';
import { SelectedFilterPipe } from './pipes/selected-filter.pipe';
import { AllCartComponent } from './components/all-cart/all-cart.component';
import { ReactiveFormsModule } from "@angular/forms";
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { ProductUpdateComponent } from './components/product-update/product-update.component';
import { LoginComponent } from './components/login/login.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { RegisterComponent } from './components/register/register.component';
 
@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    CategoryComponent,
    ProductComponent,
    ProductDetailComponent,
    VatAddedPipe,
    FilterPipePipe,
    CartSummaryComponent,
    FilterColorPipe,
    SelectedFilterPipe,
    AllCartComponent,
    ProductAddComponent,
    ColorAddComponent,
    ProductUpdateComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot({
      positionClass:"toast-top-right"
    }),
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS, 
      useClass:AuthInterceptor, 
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
