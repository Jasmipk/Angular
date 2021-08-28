import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title ='Dashbordpage';
  button ='Know more about me';
  isLoading = false;
  button1 ='Contact Us';
  isLoading1 = false;
  button2 ='Learn more';
  isLoading2 = false;
  button3 ='Learn more';
  isLoading3 = false;

  constructor() {

  }

  ngOnInit(){}
  click() {
    this.isLoading = true;
    this.button = 'Processing';

    setTimeout(() => {
      this.isLoading = false;
      this.button = 'Submit';
      alert('Done loading');
    }, 8000)
  }
  images = [
    {path: 'https://images.unsplash.com/photo-1523294587484-bae6cc870010?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFrZXJ5JTIwcHJvZHVjdHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'},
    {path: 'https://fmtmagazine.in/wp-content/uploads/2021/04/Bakery-Industry-in-India.png'},
    {path: 'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX40903706.jpg'},
    {path: 'https://wallpaperaccess.com/full/1462435.jpg'},
  ]
}
