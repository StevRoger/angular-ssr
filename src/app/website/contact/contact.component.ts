import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { init } from 'emailjs-com';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  image: string = "https://images.pexels.com/photos/5982764/pexels-photo-5982764.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";

  templateParams = {
    name: 'James',
    notes: 'Check this out!'
  };

  constructor() {
    init("user_mIZ0AtnvujRnbgQSsKYQR");
  }

  ngOnInit() {
  }

  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('service_u27qj9d', 'template_pvvd3f8', e.target as HTMLFormElement)
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }
}
