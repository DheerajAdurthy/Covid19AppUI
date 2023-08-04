import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  showRegForm:boolean=true;
  showLogForm:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }
  showRegisterForm(){
      this.showRegForm=true;
      this.showLogForm=false;
  }
  showLoginForm(){
    this.showLogForm=true;
    this.showRegForm=false;
  }
}
