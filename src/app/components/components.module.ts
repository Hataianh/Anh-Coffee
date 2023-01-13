import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ComponentsComponent } from './components.component';
import { ComponentsRoutes } from './components.route';
@NgModule({
  declarations: [
    ComponentsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(ComponentsRoutes)
  ]
})
export class ComponentsModule { }
