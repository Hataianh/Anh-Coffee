import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { RouterModule } from '@angular/router';
import { IntroduceComponent } from './introduce/introduce.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { BookingComponent } from './booking/booking.component';
import { DetailComponent } from './detail/detail.component';
import { NewsdetailComponent } from './newsdetail/newsdetail.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CategoryComponent } from './category/category.component';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    IndexComponent,
    IntroduceComponent,
    NewsComponent,
    ContactComponent,
    ProductComponent,
    BookingComponent,
    DetailComponent,
    NewsdetailComponent,
    CategoryComponent,
    CartComponent,
    PaymentComponent,
  ],
  providers:[],
  imports: [
    CommonModule,
    NgbModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', component: IndexComponent },
      { path: 'index', component: IndexComponent },
      { path: 'homes', component: IndexComponent },
      { path: 'introduce', component: IntroduceComponent },
      { path: 'product', component: ProductComponent },
      { path: 'news', component: NewsComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'booking', component: BookingComponent },
      { path: 'detail/:id', component: DetailComponent },
      { path: 'newsdetail/:id', component: NewsdetailComponent },
      { path: 'category/:id', component: CategoryComponent },
      { path: 'cart', component: CartComponent },
      { path: 'payment', component: PaymentComponent },
    ])
  ]
})
export class HomesModule { }
