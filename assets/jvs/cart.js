
const cartbtn = document.querySelector(".close")
const cartshow = document.querySelector(".cart-shopping")
cartshow.addEventListener("click",function(){
    document.querySelector(".main-cart").style.right = "0"
    console.log(cartshow)
})

cartbtn.addEventListener("click",function(){
    document.querySelector(".main-cart").style.right = "-100%"
    console.log(cartshow)
})

// ------------thêm vào giỏ hàng-------------
const btn = document.querySelectorAll('button')
btn.forEach(function(button,index){
button.addEventListener("click",function(event){{
    var btnItem = event.target
    var product = btnItem.parentElement
    var productImg=product.querySelector('img').src
    var productName=product.querySelector('h5').innerText
    var productPrice=product.querySelector('span').innerText
    addcart(productImg,productName,productPrice)

}})
})

function addcart(productImg,productName,productPrice){
    var addtr = document.createElement("tr")
    var cartItem = document.querySelectorAll("tbody tr")
    for (var i=0;i<cartItem.length;i++){
        var productT = document.querySelectorAll(".item_name")
        console.log(productT)
        if(productT[i].innerHTML==productName){
            alert("Sản phẩm đã có trong giỏ hàng")
            return
        }
    }
    var trcontent = '<tr ><td><img src="'+productImg+'" alt=""  style="width:200px;flex: 1;padding: 10px 20px;"></td><td style="width:500px;align-items: center;text-align: center;"><span class="item_name">'+productName+'</span></td><td style="width:300px;font-size: 24px;margin-bottom:0px; " ><span class="prices">'+productPrice+'</span></td><td style="width:300px;text-align: center;" ><input class="item_quantity" type="number" min="1" max="5" value="1"></td><td style="text-align: center;width:200px;cursor: pointer"><span class="item_delete">Xóa</span></td></tr>'
    addtr.innerHTML = trcontent
    var cartTable = document.querySelector("tbody")
    cartTable.append(addtr)
    carttotal()
    deleteCart()
}

// ----------hết thêm vào giỏ hàng--------------

// ----------tính tổng tiền----------

function carttotal(){
    var cartItem = document.querySelectorAll("tbody tr")
    var totalC = 0
    for (var i=0;i<cartItem.length;i++){
        var inputValue = cartItem[i].querySelector("input").value
        var productPrice = cartItem[i].querySelector(".prices").innerHTML
        totalA = inputValue*productPrice
        totalC = totalC + totalA
    
    }
    var carttotalA = document.querySelector(".price-total span")
    carttotalA.innerHTML = totalC.toLocaleString('de-DE')
    inputchange()
}

// --------hết tính tổng tiền------------


// -----------xóa cart-----------------
function deleteCart(){
    var cartItem = document.querySelectorAll("tbody tr")
    for (var i=0;i<cartItem.length;i++){
        var productT = document.querySelectorAll(".item_delete")
        productT[i].addEventListener("click", function(event){
            var cartDelete = event.target
            var cartItemDelete = cartDelete.parentElement.parentElement
            cartItemDelete.remove()
            carttotal()
        })
    }
}

// -------------hết xóa cart---------------

// ---------tăng số lượng sản phẩm và tính lại tổng tiền------
function inputchange(){
    var cartItem = document.querySelectorAll("tbody tr")
    for (var i=0;i<cartItem.length;i++){
        var inputValue = cartItem[i].querySelector("input")
        inputValue.addEventListener("change",function(){
            carttotal()
        })
    }
}
// ---------hết tăng số lượng sản phẩm và tính lại tổng tiền------


