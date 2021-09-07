let myAccount = document.getElementById('myaccount');
let features = 'height=500,width=600'
let url = 'signin.html'
myAccount.addEventListener('click', (e)=>{
    window.open( url, '_blank', features)
})

let saleButton1 = document.getElementById('sale_btn1');
let saleButton2 = document.getElementById('sale_btn2');
let saleButton3 = document.getElementById('sale_btn3');
let saleButton4 = document.getElementById('sale_btn4');
let saleButton5 = document.getElementById('sale_btn5');
let saleButton6 = document.getElementById('sale_btn6');
let buyBtn_Men = document.getElementById('buy_btn1');
let shopCart = document.getElementById('shop_cart');
let orderBtn = document.getElementById('order_btn');

let button = new Map();
button.set(saleButton1, 'Sale at ' + saleButton1.textContent);
button.set(saleButton2, 'Sale at ' + saleButton2.textContent);
button.set(saleButton3, 'Sale at ' + saleButton3.textContent);
button.set(saleButton4, 'Sale at ' + saleButton4.textContent);
button.set(saleButton5, 'Sale at ' + saleButton5.textContent);
button.set(saleButton6, 'Sale at ' + saleButton6.textContent);
button.set(buyBtn_Men, "Do you want to buy this Lorex watch?");
button.set(shopCart, 'By clicking this button you can add the items')
button.set(orderBtn, 'By clicking this button you can order new watch')

for (let [btn, text] of button) {
    btn.addEventListener("click", (e)=>{
        e.preventDefault();
        alert(`${ text }`);
    });
}