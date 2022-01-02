import { Component } from '@angular/core';
import { HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //directives: ['ShoppingcartComponent'],
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  title = 'shopping-promotion-app';
  grocery = "D01";
  meat="D02";
  liquor ="D03";
  floral = "D04";
  refreshFlagFromDeptToShoppingCart:any;

  ngOnInit(){
    
  }
  fwdMessageToShoppingCart($event: any){
    this.refreshFlagFromDeptToShoppingCart = $event;

  }
  
}
