import { Routes } from '@angular/router';
import { ComponentsComponent } from './components.component';
import { IndexComponent } from './homes/index/index.component';
export const ComponentsRoutes: Routes = [
  {
    path: '', component: ComponentsComponent,
    children: [
      { path: '', loadChildren: () => import('./homes/homes.module').then(m => m.HomesModule)},
      // { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule)},
    ]
  }
];
