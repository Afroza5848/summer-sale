let totalPrice = 0;
let count = 1;
const cards = document.querySelectorAll('.card');

for(const card of cards){
    
    card.addEventListener('click', function(){

        // console.log('clicked');
        const title = card.querySelector("h3").innerText;
        const price = parseFloat(card.querySelector("span").innerText.split(" ")[1]);

        // show product name
        const titleContainer = document.getElementById('title-container');
        const p = document.createElement("p");
        p.innerText = count + ". " + title;
        count++;
        titleContainer.appendChild(p);
        // get total price
        totalPrice += price;
        const totalProductPrice = document.getElementById('totalPrice');
        totalProductPrice.innerText = totalPrice;
        
    })

}

// apply btn

document .getElementById('apply-btn').addEventListener('click', function(){

    const promoCode = document.getElementById('input-field').value.split(" ").join("").toUpperCase();
    // console.log(promoCode);
    if(totalPrice >= 200){
        if(promoCode === "SELL200"){
            const discount = totalPrice * 0.2;
            document.getElementById('discountPrice').innerText = discount.toFixed(2);
            document.getElementById('input-field').value = "";
            // rest total price

            const restTotalPrice = totalPrice - discount;
            document.getElementById('total').innerText = restTotalPrice.toFixed();
        }
        else{
            alert('Invalid Promo Code!!')
            document.getElementById('input-field').value = "";
        }

    }
    else{
        alert('Please beshi khorc koro.')
        document.getElementById('input-field').value = "";
    }
    

})

// make purchase
document.getElementById('purchase').addEventListener('click', function(){
    if(totalPrice > 0){
        
        document.getElementById('my_modal_1').showModal();
        document.getElementById('totalPrice').innerText = "";
        document.getElementById('discountPrice').innerText = "";
        document.getElementById('total').innerText = "";
    }
    else{
        alert('Please Purchase Product..')
        const modal = document.getElementById('my_modal_1').close();
    //    modal.classList.add('hidden');
    }

})