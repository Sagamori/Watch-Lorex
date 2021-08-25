let myAccount = document.getElementById('myaccount');
    shopCart = document.getElementById('shop_cart');
    menWatch = document.getElementById('men');
    womenWatch = document.getElementById('women');
    sale = document.getElementById('sales');
    orderBtn = document.getElementById('order_btn');
    buyBtn = document.querySelectorAll('.buybtn');

shopCart.addEventListener('click', (e)=>{
    e.preventDefault();
    alert('add items')
})
// myAccount.addEventListener('click', (e)=>{
//     e.preventDefault()
//     alert('create account')
// })

let features = 'height=500,width=600'
let url = 'Login.html'
myAccount.addEventListener('click', (e)=>{
    window.open( url, '_blank', features)
})