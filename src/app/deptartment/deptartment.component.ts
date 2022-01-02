import { Component, OnInit ,Input, ViewChild, Output, EventEmitter} from '@angular/core';
import { Promotion } from '../model/promotion';
import { PromotionService } from '../service/promotion.service';
import { HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { CartService } from '../service/cart.service';
import { Cart } from '../model/cart';



@Component({
  selector: 'app-deptartment',
  templateUrl: './deptartment.component.html',
  styleUrls: ['./deptartment.component.css']
})
export class DeptartmentComponent implements OnInit {

  @Input() departmentId = '';
  public promotions: Promotion[] = [];
  refreshFlag = '';
  public cart:Cart={
    cartId: 0,
    promoId: '',
    promoName: '',
    promoDesc: '',
    promoQty:0,
    promoListPrice: '',
    promoDiscPrice: ''
  };
  public cartresponse:Cart={
    cartId: 0,
    promoId: '',
    promoName: '',
    promoDesc: '',
    promoQty:0,
    promoListPrice: '',
    promoDiscPrice: ''
  };
  @Output() refreshFlagToParent = new EventEmitter<any>();
  itemQty:number=0;

  constructor(private promotionService:PromotionService, private cartService:CartService){
   
  }


  ngOnInit(): void {
    this.getPromotionsByDeptId();
    }
  public getPromotionsByDeptId():void{
    this.promotionService.getPromotionsByDeptId(this.departmentId).subscribe(
      (response:Promotion[])=>{
          this.promotions=response;
          //console.log(this.promotions);
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
        console.log(error.message);
      }
    );
    }
    public addToCart(promotion: Promotion){
      console.log(promotion.promoId);
     
      this.cart.promoId=promotion.promoId;
      this.cart.promoName=promotion.promoName;
      this.cart.promoDesc=promotion.promoDesc;
      this.cart.promoListPrice=promotion.promoListPrice;
      this.cart.promoDiscPrice=promotion.promoDiscPrice;

      this.cartService.addPromotionToCart(this.cart).subscribe(
        (response:Cart)=>{
            this.cartresponse=response;
            //console.log(this.cartresponse);
            //this.itemQty = this.cartresponse.promoQty;
            this.refreshFlag = "refresh";
            this.refreshFlagToParent.emit(this.refreshFlag);
          },
        (error:HttpErrorResponse)=>{
          alert(error.message);
          console.log(error.message);
        }
      );
    }

  // over(){
  //   console.log("Mouseover called");
  // }

  // out(){
  //   console.log("Mouseout called");
  // }
  

}
