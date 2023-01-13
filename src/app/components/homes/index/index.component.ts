import { AfterViewInit, Component, Injector, OnInit, Renderer2 } from '@angular/core';
import { BaseComponent } from 'src/app/core/common/base-component';
import { CartService } from 'src/app/core/services/cart.service';
import { SendService } from 'src/app/core/services/send.service';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent extends BaseComponent implements OnInit,AfterViewInit {
  public list_item:any;
  public list_danhmuc: any;
  public ban_chay: any;
  public tintuc: any;
  constructor(injector: Injector, private _cart: CartService, private _send: SendService) {
    super(injector);
  }
   public _addToCart(it: any) {
    this._cart.addToCart(it);
    this._send.addObjct(this._cart.getItems().length);
    alert('Đã thêm vào giỏ hàng thành công');
  }
  ngOnInit(): void {
    this._api.get('/api/sanpham/get-sp-ban-chay').subscribe(res => {
      this.ban_chay = res;

      setTimeout(() => {
        this.loadScripts('assets/bizweb.dktcdn.net/100/351/580/themes/714586/assets/main9b89.js','assets/bizweb.dktcdn.net/100/351/580/themes/714586/assets/cs.script9b89.js', 'assets/bizweb.dktcdn.net/100/351/580/themes/714586/assets/plugin9b89.js', 'assets/bizweb.dktcdn.net/assets/themes_support/api.jquery.js', 'assets/bizweb.dktcdn.net/100/351/580/themes/714586/assets/option-selectors9b89.js' );
      });
    });
    this._api.get('/api/sanpham/get-sp').subscribe(res => {
      this.list_item = res;

      setTimeout(() => {
        this.loadScripts('assets/bizweb.dktcdn.net/100/351/580/themes/714586/assets/main9b89.js','assets/bizweb.dktcdn.net/100/351/580/themes/714586/assets/cs.script9b89.js', 'assets/bizweb.dktcdn.net/100/351/580/themes/714586/assets/plugin9b89.js', 'assets/bizweb.dktcdn.net/assets/themes_support/api.jquery.js', 'assets/bizweb.dktcdn.net/100/351/580/themes/714586/assets/option-selectors9b89.js' );
      });
    });
    this._api.get('/api/danhmuc/get-danhmuc').subscribe(res => {
      this.list_danhmuc = res;

      setTimeout(() => {
        this.loadScripts('assets/bizweb.dktcdn.net/100/351/580/themes/714586/assets/main9b89.js','assets/bizweb.dktcdn.net/100/351/580/themes/714586/assets/cs.script9b89.js', 'assets/bizweb.dktcdn.net/100/351/580/themes/714586/assets/plugin9b89.js', 'assets/bizweb.dktcdn.net/assets/themes_support/api.jquery.js', 'assets/bizweb.dktcdn.net/100/351/580/themes/714586/assets/option-selectors9b89.js' );
      });
    });
    this._api.get('/api/tintuc/get-tt').subscribe(res => {
      this.tintuc = res;

      setTimeout(() => {
        this.loadScripts('assets/bizweb.dktcdn.net/100/351/580/themes/714586/assets/main9b89.js','assets/bizweb.dktcdn.net/100/351/580/themes/714586/assets/cs.script9b89.js', 'assets/bizweb.dktcdn.net/100/351/580/themes/714586/assets/plugin9b89.js', 'assets/bizweb.dktcdn.net/assets/themes_support/api.jquery.js', 'assets/bizweb.dktcdn.net/100/351/580/themes/714586/assets/option-selectors9b89.js' );
      });
    });

    //  this._api.post('/api/item/search', {page:1, pageSize:6}).subscribe(res => {
    //   this.list_item = res.data;
    //
    //   setTimeout(() => {
    //     this.loadScripts('assets/js/hide_menu.js','assets/js/slide_show.js' );
    //   });
    // });

  }
  ngAfterViewInit() {
    //this.loadScripts('assets/js/hide_menu.js','assets/js/slide_show.js' );
   }
}
