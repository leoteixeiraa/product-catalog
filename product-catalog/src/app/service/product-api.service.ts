import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {

    private url: string = 'https://fake-server-shop.herokuapp.com/products';
  constructor(
    private http: HttpClient
  ) { }

  get apiListAllProducts(): Observable<any> {
    return this.http.get<any>(this.url).pipe(
      tap(res => res),
      tap(res => {
       res.results.map((resProducts: any) => {
        this.http.get<any>(resProducts.url).pipe(
          map(
              res => res
          )
          ).subscribe(
            res => resProducts.status = res
          )
       })
      })
    )
  }
}
