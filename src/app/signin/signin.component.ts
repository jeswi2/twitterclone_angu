import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private myrouter:Router) { }

  name=""
  password=""

  readValues=()=>{
    let data={
      "name":this.name,
      "password":this.password
    }
if (this.name=="admin" && this.password=="admin"){
  this.myrouter.navigate(["/signup"])
} else {
  alert("invalid")
}
console.log(data)
  }

  ngOnInit(): void {
  }

}
