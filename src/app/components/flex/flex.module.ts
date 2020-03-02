import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { FlexRoutingModule } from './flex-routing.module';
import { FlexComponent } from './flex/flex.component';


@NgModule({
  declarations: [FlexComponent],
  imports: [
    CommonModule,
    FlexRoutingModule,
    FlexLayoutModule,
    SlickCarouselModule
  ]
})
export class FlexModule { }
