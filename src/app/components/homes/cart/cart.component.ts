import { AfterViewInit, Component, Injector, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from 'src/app/core/common/base-component';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent extends BaseComponent implements OnInit, AfterViewInit {
  public list: any;
  public tTong: any;
  constructor(injector: Injector, private _router: Router,) {
    super(injector);
  }

  public ThanhToan () {
    this._router.navigate(['/payment']);
  }

  ngOnInit(): void {
    this.list = JSON.parse(localStorage.getItem('cart') || '[]');
    this.tTong = this.list.reduce((sum:any, x:any) => sum +  x.gia * x.quantity, 0);
  }
  ngAfterViewInit() {
    this.loadScripts('assets/bizweb.dktcdn.net/100/351/580/themes/714586/assets/main9b89.js','assets/bizweb.dktcdn.net/100/351/580/themes/714586/assets/cs.script9b89.js', 'assets/bizweb.dktcdn.net/100/351/580/themes/714586/assets/plugin9b89.js', 'assets/bizweb.dktcdn.net/assets/themes_support/api.jquery.js', 'assets/bizweb.dktcdn.net/100/351/580/themes/714586/assets/option-selectors9b89.js' );
  }
  public Giam(maSanPham: any) {
    var index = this.list.findIndex((x: any) => x.maSanPham == maSanPham);
    if (index >= 0 && this.list[index].quantity >= 1) {
      this.list[index].quantity -= 1;
      this.tTong = this.list.reduce((sum:any, x:any) => sum + x.gia  * x.quantity, 0);
    }
    localStorage.setItem('cart', JSON.stringify(this.list));
  }
  public Tang(maSanPham: any) {
    var index = this.list.findIndex((x: any) => x.maSanPham == maSanPham);
    if (index >= 0) {
      this.list[index].quantity += 1;
      this.tTong = this.list.reduce((sum:any, x:any) => sum + x.gia  * x.quantity, 0);
    }
    localStorage.setItem('cart', JSON.stringify(this.list));
  }
  public XoaCart() {
    if (confirm("Bạn muốn xóa tất cả sản phẩm khỏi giỏ hàng!")) {
        localStorage.setItem('cart','');
        this.list = null;
        this.tTong = 0;
    }
    localStorage.setItem('cart', JSON.stringify(this.list));
  }
  public updateCart() {
    localStorage.setItem('cart', JSON.stringify(this.list));
    alert("Đã cập nhật thông tin giỏ hàng thành công!");
  }
  public Xoa(maSanPham: any) {
    if (confirm("Bạn muốn xóa sản phẩm này khỏi giỏ hàng!")) {
      var index = this.list.findIndex((x: any) => x.maSanPham == maSanPham);
      if (index >= 0) {
        this.list.splice(index, 1);
        this.tTong = this.list.reduce((sum:any, x:any) => sum + x.gia  * x.quantity, 0);
      }
    }
    localStorage.setItem('cart', JSON.stringify(this.list));
  }
}
