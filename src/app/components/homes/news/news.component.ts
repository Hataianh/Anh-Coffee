import { AfterViewInit, Component, Injector, OnInit, Renderer2 } from '@angular/core';
import { BaseComponent } from 'src/app/core/common/base-component';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent extends BaseComponent implements OnInit,AfterViewInit {
  public list_item:any;
  public list_danhmuc: any;
  public tintuc: any;
  constructor( injector: Injector) {
    super(injector);
   }
  ngOnInit(): void {
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
  }
  ngAfterViewInit() {
    //this.loadScripts('assets/js/hide_menu.js','assets/js/slide_show.js' );
   }
}
