import { Component, OnInit } from '@angular/core';
declare var payment:any;
@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.css']
})
export class EvaluationComponent implements OnInit {

  constructor() { }

  Callpayment()
  {
    payment();
  }

  ngOnInit(): void {
  }
 
  

}
