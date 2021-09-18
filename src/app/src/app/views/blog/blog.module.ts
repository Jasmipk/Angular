import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';

@NgModule({
  declarations: [BlogComponent],
  imports: [
    CommonModule,
    IvyCarouselModule
  ]
})
export class BlogModule { }
