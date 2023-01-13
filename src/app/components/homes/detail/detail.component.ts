import { SendService } from './../../../core/services/send.service';
import { CartService } from 'src/app/core/services/cart.service';
import { AfterViewInit, Component, Injector, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseComponent } from 'src/app/core/common/base-component';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent extends BaseComponent implements OnInit, AfterViewInit {
  public item:any;
  ban_chay: any;
  list_danhmuc: any;
  public lien_quan: any;
  constructor(injector: Injector, private _cart: CartService, private _send: SendService) {
    super(injector);
  }

  public _addToCart(item: any) {
    this._cart.addToCart(item);
    this._send.addObjct(this._cart.getItems().length);
    alert('Đã thêm vào giỏ hàng thành công');
  }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let id = params['id'];
      this._api.get('/api/sanpham/get-by-id/'+id).subscribe(res => {
      this.item = res;
      console.log(res);
      let idDM =res.maDanhMuc
      this._api.get('/api/sanpham/get-theo-maloai/'+idDM).subscribe(res => {
        this.lien_quan = res;
        console.log(this.lien_quan);

      });
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
  }
  ngAfterViewInit() {

    this.loadScripts('assets/bizweb.dktcdn.net/100/351/580/themes/714586/assets/main9b89.js','assets/bizweb.dktcdn.net/100/351/580/themes/714586/assets/cs.script9b89.js', 'assets/bizweb.dktcdn.net/100/351/580/themes/714586/assets/plugin9b89.js', 'assets/bizweb.dktcdn.net/assets/themes_support/api.jquery.js', 'assets/bizweb.dktcdn.net/100/351/580/themes/714586/assets/option-selectors9b89.js' );

  }

}
