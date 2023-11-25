import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Observable } from 'rxjs';

const STORE_BASE_URL = 'https://fakestoreapi.com';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private httpClient: HttpClient) { }

  getAllProducts(limit = '12', sort='desc', category?: string): Observable<Array<Product>> {
    const fetchedUrl = `${STORE_BASE_URL}/products${category ? '/category/' + category : ''
      }?sort=${sort}&limit=${limit}`;
    this.httpClient.get<Array<Product>>(fetchedUrl);
    // console.log('Generated URL:', fetchedUrl);
    return this.httpClient.get<Array<Product>>(fetchedUrl);
  }

  getAllCategories(): Observable<Array<string>> {
    return this.httpClient.get<Array<string>>(
      `${STORE_BASE_URL}/products/categories`
    )
  }
}
