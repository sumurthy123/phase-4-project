import { Component, OnInit } from '@angular/core';
//declare var remove:any;
//declare var get:any;
declare var remove:any;
declare var get :any;
@Component({
  selector: 'app-veg',
  templateUrl: './veg.component.html',
  styleUrls: ['./veg.component.css']
})
export class VegComponent implements OnInit {

  constructor() { }
  
  addtocart(name:string,price:number)
  {
    
    var cart=localStorage.getItem("cart");
        if(cart==null)
        {
        let products=[];
        let product={p_name:name,p_price:price}
        products.push(product);
    
        localStorage.setItem("cart",JSON.stringify(products));
        }
        else
        {
          var pcart=JSON.parse(cart); 
          let product={p_name:name,p_price:price}
          pcart.push(product);
          localStorage.setItem("cart",JSON.stringify(pcart));
        }
        
      
  }

 
  Callremove(p_name:string)
  {
     remove(p_name);
     
  }

  Callget()
  {
    get();
  }

  ngOnInit(): void {
  }

}
