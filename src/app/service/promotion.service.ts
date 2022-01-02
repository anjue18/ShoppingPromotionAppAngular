import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Promotion } from '../model/promotion';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  private promotionURL = environment.promotionURL;

  constructor(private http:HttpClient) { }

  public getPromotionsByDeptId(deptId:String): Observable<Promotion[]>{
    return this.http.get<Promotion[]>(`${this.promotionURL}/promotions?deptId=${deptId}`);
  }
}
