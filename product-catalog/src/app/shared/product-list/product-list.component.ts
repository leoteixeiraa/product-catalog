import { ProductApiService } from './../../service/product-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor(
    private productApiService: ProductApiService
  ) { }

  ngOnInit(): void {
    this.productApiService.apiListAllProducts.subscribe(
      res => console.log(res)
    );
  }

}
