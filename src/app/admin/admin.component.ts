import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }
  next="";
   message(message:any)
   {
       if(message=="ThinkPad@66")
       {
         alert("You are allowed. Visit https://localhost:4200/home");
         this.next="http://localhost:4200/home";
         
       }
       else{
         alert("Invalid details");
       }
   }
  ngOnInit(): void {
  }

}
