import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';

@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    IvyCarouselModule
  ]
})
export class AboutModule { }
