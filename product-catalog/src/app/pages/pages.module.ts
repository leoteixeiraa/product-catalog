import { ProductSearchComponent } from './../shared/product-search/product-search.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
//Module
import { SharedModule } from './../shared/shared.module';

//Pages
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { RoutingModule } from './routing.module';


@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent,


  ],
  imports: [
    CommonModule,
    RoutingModule,
    SharedModule
  ]
})
export class PagesModule { }
