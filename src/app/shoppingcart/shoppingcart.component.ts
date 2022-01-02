import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit , ViewChild} from '@angular/core';
import { Cart } from '../model/cart';
import { CartService } from '../service/cart.service';


@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {

  cart:Cart[] = [];
  noOfItems:Number=0;
  @Input() refreshFlagFromDept!: any [];
  @ViewChild('myModal') myModal:any;
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.getShoppingCartItems();
  }
  
  public getShoppingCartItems(){
    this.cartService.getAllItems().subscribe(
      (response:Cart[])=>{
          this.cart=response;
          this.noOfItems = this.cart.length;
          console.log("All items in cart");
          console.log(this.cart);
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
        console.log(error.message);
      }
    );

  }
  openModel() {
    this.myModal.nativeElement.className = 'modal fade show';
  }
  closeModel() {
     this.myModal.nativeElement.className = 'modal hide';
  }

}
