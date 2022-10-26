import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private myapi:ApiService) { }

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
    alert("Successfully added")
    this.myapi.adduser(data).subscribe(
      (response)=>{
        alert("Successfully added")
      }
    )

  }





  ngOnInit(): void {
  }

}
