import { Cart } from '../model/cart';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private promotionURL = environment.promotionURL;

  constructor(private http:HttpClient) { }

  public addPromotionToCart(cart:Cart): Observable<Cart>{
    return this.http.post<Cart>(`${this.promotionURL}/addToCart`, cart);
  }
  public getAllItems():Observable<Cart[]>{
    return this.http.get<Cart[]>(`${this.promotionURL}/getAllItemsFromCart`);
  }
}
