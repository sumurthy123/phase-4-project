

function remove(p_name)
{   
    
   let cart=JSON.parse(localStorage.getItem('cart'));
   let newcart=cart.filter((item)=>item.p_name!=p_name)
   localStorage.setItem('cart',JSON.stringify(newcart));

   
}

function get()
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
        let total=0;
        cart.map((item)=>{
           table+=
                `<tr>
                    <td>${item.p_name}</td>
                    <td>${item.p_price}</td>
                
                `
            total=total+item.p_price; 
        })
        table=table +`
        <tr>
           <td>Total : ${total}</td>
        </tr>
        `
        table=table+ `</table>`
        $(".cart-body").html(table);
    }
}
function payment()
{
    var a=confirm("Click ok for confirm")
    if(a)
    {
        alert("payment done successfully.  Thank You.  Visit again")
    }
    else{

    }
}

