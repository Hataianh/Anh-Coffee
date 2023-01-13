import { Routes } from '@angular/router';
import { GlobalErrorComponent } from './global-error/global-error.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
export const AppRoute: Routes = [
  { path: '', loadChildren: () => import('./components/components.module').then(m => m.ComponentsModule)},
  { path: 'error', component: GlobalErrorComponent},
  { path: 'not-found', component: NotFoundComponentComponent },
  { path: '**', redirectTo:'not-found', pathMatch:'full'},
];
