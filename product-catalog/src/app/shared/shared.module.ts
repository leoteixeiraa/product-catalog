import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductHeaderComponent } from './product-header/product-header.component';
import { ProductSearchComponent } from './product-search/product-search.component';
import { ProductListComponent } from './product-list/product-list.component';



@NgModule({
  declarations: [
    ProductHeaderComponent,
    ProductSearchComponent,
    ProductListComponent
  ],
  exports:
   [
    ProductHeaderComponent,
    ProductSearchComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
