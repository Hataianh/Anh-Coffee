import { Component, Injector, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BaseComponent } from 'src/app/core/common/base-component';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent extends BaseComponent implements OnInit {
  public frmKhach: FormGroup;
  public list: any;
  public tTong: any;
  list_danhmuc: any;
  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.list = JSON.parse(localStorage.getItem('cart') || '[]');
    this.tTong = this.list.reduce((sum: any, x: any) => sum + x.gia * x.quantity, 0);
    this.frmKhach = new FormGroup({
      'name': new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
      'phone': new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      'email': new FormControl('', [Validators.email]),
      'address': new FormControl('', [Validators.required]),
      'note': new FormControl('')
    });
    this._api.get('/api/danhmuc/get-danhmuc').subscribe(res => {
      this.list_danhmuc = res;

      setTimeout(() => {
        this.loadScripts('assets/bizweb.dktcdn.net/100/351/580/themes/714586/assets/main9b89.js','assets/bizweb.dktcdn.net/100/351/580/themes/714586/assets/cs.script9b89.js', 'assets/bizweb.dktcdn.net/100/351/580/themes/714586/assets/plugin9b89.js', 'assets/bizweb.dktcdn.net/assets/themes_support/api.jquery.js', 'assets/bizweb.dktcdn.net/100/351/580/themes/714586/assets/option-selectors9b89.js' );
      });
    });
  }
  get hoten() {
    return this.frmKhach.get('name')!;
  }
  get sodienthoai() {
    return this.frmKhach.get('phone')!;
  }
  get email() {
    return this.frmKhach.get('email')!;
  }
  get diachi() {
    return this.frmKhach.get('address')!;
  }
  public onSubmit(val: any) {
    if (this.frmKhach.invalid) {
      return;
    }

    let obj: any = {};
    obj.khach = {
      TenKhachHang: val.name,
      DiaChi: val.address,
      SoDienThoai: val.phone,
      Email: val.email
    };
    obj.donhang = [];
    this.list.forEach((x: any) => {
      obj.donhang.push({
        MaSanPham: x.maSanPham,
        SoLuong: x.quantity,
        GiaMua: x.gia
      });
    });
    console.log(obj);

    this._api.post('/api/home/create-donhang', obj).subscribe(res => {
      if (res && res.data) {
        alert('Đặt hàng thành công')
        localStorage.setItem('cart', JSON.stringify(null));
      } else {
        alert('Có lỗi')
      }
    });
  }

}
