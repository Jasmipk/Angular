import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagenotfoundComponent } from './pagenotfound.component';
import { PagenotfoundRoutingModule } from './pagenotfound-routing.module';
// import {IvyCarouselModule} from 'angular-responsive-carousel';

@NgModule({
  declarations: [PagenotfoundComponent],
  imports: [
    CommonModule,
    PagenotfoundRoutingModule,
    // IvyCarouselModule
  ]
})
export class pagenotfoundModule { }
