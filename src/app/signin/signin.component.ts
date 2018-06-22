import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  wait:boolean = false;

  constructor() { }
  submit(form) {
    this.wait = true;
    console.log('---FORM---', form);
    setTimeout(() => {
      alert(`Email : ${form.value.email} and Password : ${form.value.password}`);
      this.wait = false;
    }, 1000);
  }
  ngOnInit() {
  }

}
