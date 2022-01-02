import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DeptartmentComponent } from './deptartment/deptartment.component';
import { HoverComponent } from './hover/hover.component';
import { SkillTooltipComponent } from './hover/skill-tooltip/skill-tooltip.component';
import { PopupHostDirective } from './hover/directives/host.directive';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';


@NgModule({
  declarations: [
    AppComponent,
    DeptartmentComponent,
    HoverComponent,
    SkillTooltipComponent,
    PopupHostDirective,
    ShoppingcartComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
