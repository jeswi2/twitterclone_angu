import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private myrouter:Router) { }

  email=""
  password=""

  readValues=()=>{
    let data={
      "email":this.email,
      "password":this.password
    }
console.log(data)
}

  

  ngOnInit(): void {
  }

}
