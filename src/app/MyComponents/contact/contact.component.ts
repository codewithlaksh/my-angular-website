import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  title: string
  message: string

  constructor() {
    document.title = "Contact Me - iCoder"
    this.title = "Contact Me"
    this.message = "No backend has been set yet! So, the form might not work properly."
   }

  ngOnInit(): void {
  }

}
