const {$}=require("protractor");

function remove(p_name)
{
   let cart=JSON.parse(localStorage.getItem('cart'));
   let newcart=cart.filter((item)=>item.p_name!=p_name)
   localStorage.setItem('cart',JSON.stringify(newcart));
   
}