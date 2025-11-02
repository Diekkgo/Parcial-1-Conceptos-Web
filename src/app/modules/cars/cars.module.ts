import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarListComponent } from './pages/car-list/car-list.component';


@NgModule({
  declarations: [
    CarListComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class CarsModule { }
