const { $ } = require("protractor");

/*function remove(p_name)
{   
    console.log(cart);
   let cart=JSON.parse(localStorage.getItem('cart'));
   let newcart=cart.filter((item)=>item.p_name!=p_name)
   localStorage.setItem('cart',JSON.stringify(newcart));
   console.log(cart);
}*/

/*function get()
{   let cartstring=localStorage.getItem('cart');
    let cart=JSON.parse(cartstring);
    if(cart==null)
    {
        $(".cart-body").html("<h3>cart doesn't hhave any items</h3>");
    }
    else{
        console.log(cart);
        let table=`
        <table class="table">
        <thread class="thread-light">
        <tr>
          <th>Name</th>
          <th>price</th>
        </tr>
        
        
        
        </thread>
        
        
        
        
        
        
        `;
        table=table+ `</table>`
        $(".cart-body").html(table);
    }
}*/