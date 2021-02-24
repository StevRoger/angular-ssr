import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  image: string = "https://images.pexels.com/photos/2132095/pexels-photo-2132095.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
  constructor() { }

  ngOnInit() {
  }

}
