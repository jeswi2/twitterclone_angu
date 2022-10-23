import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  name=""
  dob=""
  phone=""
  place=""
  email=""
  password=""
  confirmpass=""

  readValues=()=>{
    let data={
      "name":this.name,
      "dob":this.dob,
      "phone":this.phone,
      "place":this.place,
      "email":this.email,
      "password":this.password,
      "confirmpass":this.confirmpass
    }
    console.log(data)

  }



signupData:any=[]

  ngOnInit(): void {
  }

}
