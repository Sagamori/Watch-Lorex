let myAccount = document.getElementById('myaccount');
    shopCart = document.getElementById('shop_cart');
    orderBtn = document.getElementById('order_btn');
    buyBotton = document.getElementsByClassName('buybtn')

shopCart.addEventListener('click', (e)=>{
    e.preventDefault();
    alert('By clicking this button you can add the items')
})

orderBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    alert('By clicking this button you can order new watch')
})

let features = 'height=500,width=600'
let url = 'signin.html'
myAccount.addEventListener('click', (e)=>{
    window.open( url, '_blank', features)
})