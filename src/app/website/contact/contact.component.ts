import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  image: string = "https://images.pexels.com/photos/5982764/pexels-photo-5982764.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
  constructor() { }

  ngOnInit() {
  }

}
