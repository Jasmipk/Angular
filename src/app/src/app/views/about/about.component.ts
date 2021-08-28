import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  title ='Dashbordpage';
  button1 ='Contact Us';
  isLoading1 = false;

  constructor() { }

  ngOnInit(): void {
  }

}
