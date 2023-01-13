import { CartService } from 'src/app/core/services/cart.service';
import { SendService } from './../../../core/services/send.service';
import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/core/common/base-component';
@Component({

  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent extends BaseComponent implements OnInit {
  public sosanphams:any=0;
  constructor(injector: Injector,private _send: SendService, private _cart: CartService,) {
    super(injector);
  }

  ngOnInit(): void {
    this.sosanphams=this._cart.getItems().length;
    this._send.objs.subscribe((res: any) => {
      if(res) {
        this.sosanphams=res;
      }
    });
  }

}
