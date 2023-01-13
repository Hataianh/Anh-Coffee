import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/core/common/base-component';
import { CartService } from 'src/app/core/services/cart.service';
import { SendService } from 'src/app/core/services/send.service';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent extends BaseComponent implements OnInit {

  public list_danhmuc: any;
  public loc:any;
  public page: any = 1;
  public id: any;
  public pageSize: any = 12;
  public list_item: any;
  public totalItem: any;
  public danhmuc: any;
  ban_chay: any;
  constructor(injector: Injector, private _cart: CartService, private _send: SendService) {
    super(injector);
  }
   public _addToCart(it: any) {
    this._cart.addToCart(it);
    this._send.addObjct(this._cart.getItems().length);
    alert('Đã thêm vào giỏ hàng thành công');
  }
  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let id = params['id'];
      this._api.get('/api/danhmuc/get-by-id/'+id).subscribe(res => {
      this.danhmuc = res;

      setTimeout(() => {
        this.loadScripts('assets/bizweb.dktcdn.net/100/351/580/themes/714586/assets/main9b89.js','assets/bizweb.dktcdn.net/100/351/580/themes/714586/assets/cs.script9b89.js', 'assets/bizweb.dktcdn.net/100/351/580/themes/714586/assets/plugin9b89.js', 'assets/bizweb.dktcdn.net/assets/themes_support/api.jquery.js', 'assets/bizweb.dktcdn.net/100/351/580/themes/714586/assets/option-selectors9b89.js' );
      });
    });
    });
    this._api.get('/api/danhmuc/get-danhmuc').subscribe(res => {
      this.list_danhmuc = res;

      setTimeout(() => {
        this.loadScripts('assets/bizweb.dktcdn.net/100/351/580/themes/714586/assets/main9b89.js','assets/bizweb.dktcdn.net/100/351/580/themes/714586/assets/cs.script9b89.js', 'assets/bizweb.dktcdn.net/100/351/580/themes/714586/assets/plugin9b89.js', 'assets/bizweb.dktcdn.net/assets/themes_support/api.jquery.js', 'assets/bizweb.dktcdn.net/100/351/580/themes/714586/assets/option-selectors9b89.js' );
      });
    });
    this._api.get('/api/sanpham/get-sp-ban-chay').subscribe(res => {
      this.ban_chay = res;

      setTimeout(() => {
        this.loadScripts('assets/bizweb.dktcdn.net/100/351/580/themes/714586/assets/main9b89.js','assets/bizweb.dktcdn.net/100/351/580/themes/714586/assets/cs.script9b89.js', 'assets/bizweb.dktcdn.net/100/351/580/themes/714586/assets/plugin9b89.js', 'assets/bizweb.dktcdn.net/assets/themes_support/api.jquery.js', 'assets/bizweb.dktcdn.net/100/351/580/themes/714586/assets/option-selectors9b89.js' );
      });
    });
    this.loc = localStorage.getItem('loc') || '';
    this._route.params.subscribe(params => {
      this.id = params['id'];
      this._api.post('/api/home/bo-loc', { loc: this.loc, page: this.page, pageSize: this.pageSize, ma_danh_muc: this.id }).subscribe(res => {
        this.list_item = res.data;
        this.totalItem = res.totalItem;
        setTimeout(() => {
          this.loadScripts('assets/bizweb.dktcdn.net/100/351/580/themes/714586/assets/main9b89.js','assets/bizweb.dktcdn.net/100/351/580/themes/714586/assets/cs.script9b89.js', 'assets/bizweb.dktcdn.net/100/351/580/themes/714586/assets/plugin9b89.js', 'assets/bizweb.dktcdn.net/assets/themes_support/api.jquery.js', 'assets/bizweb.dktcdn.net/100/351/580/themes/714586/assets/option-selectors9b89.js' );
      });
      });

    });
  }
  public loadPage(page: any) {
    this._api.post('/api/home/bo-loc', {loc: this.loc,  page: page, pageSize: this.pageSize, ma_danh_muc: this.id }).subscribe(res => {
      this.list_item = res.data;
      this.totalItem = res.totalItem;
      setTimeout(() => {
        this.loadScripts('assets/bizweb.dktcdn.net/100/351/580/themes/714586/assets/main9b89.js','assets/bizweb.dktcdn.net/100/351/580/themes/714586/assets/cs.script9b89.js', 'assets/bizweb.dktcdn.net/100/351/580/themes/714586/assets/plugin9b89.js', 'assets/bizweb.dktcdn.net/assets/themes_support/api.jquery.js', 'assets/bizweb.dktcdn.net/100/351/580/themes/714586/assets/option-selectors9b89.js' );
      });
    });
  }

  public loadData(pageSize:any) {
   this.pageSize = pageSize;
    this._api.post('/api/home/bo-loc', { loc: this.loc, page: 1, pageSize: pageSize, ma_danh_muc: this.id }).subscribe(res => {
      this.list_item = res.data;
      this.totalItem = res.totalItem;
      setTimeout(() => {
        this.loadScripts('assets/bizweb.dktcdn.net/100/351/580/themes/714586/assets/main9b89.js','assets/bizweb.dktcdn.net/100/351/580/themes/714586/assets/cs.script9b89.js', 'assets/bizweb.dktcdn.net/100/351/580/themes/714586/assets/plugin9b89.js', 'assets/bizweb.dktcdn.net/assets/themes_support/api.jquery.js', 'assets/bizweb.dktcdn.net/100/351/580/themes/714586/assets/option-selectors9b89.js' );
      });
    });
  }

  setDieuKienLoc(loc: any) {
    this.loc = loc;
    localStorage.setItem('loc',loc);
    this.loadData(this.pageSize);
  }
  ngAfterViewInit() {
    //this.loadScripts('assets/js/hide_menu.js','assets/js/slide_show.js' );
   }
}

