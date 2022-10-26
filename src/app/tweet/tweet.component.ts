import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetchData()
   }

  name=localStorage.getItem("stored_name")
  post=""

readValues=()=>{
  let data={
"user_id":localStorage.getItem("id"),
"post":this.post,

  }
  console.log(data)
  this.myapi.addPost(data).subscribe(
    (response)=>{
      alert("added post")

    }
  )
  this.fetchData()
  this.post=""
}
fetchData=()=>{
  this.myapi.Viewpost().subscribe(
    (response)=>{
      this.data=response
}
  )
}

data:any=[]
  ngOnInit(): void {
  }

}
