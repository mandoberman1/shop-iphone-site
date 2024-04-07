const iPhone = document.querySelector(".iPhone")

const samsung = document.querySelector(".samsung")

const buy = document.querySelector(".btn-prid")

const buyPlace = document.querySelector(".buy-place")

const confirm = document.querySelector(".strong")

const buy2 = document.querySelector(".btn-prid2")

const buyPlace2 = document.querySelector(".buy-place")

const confirm2 = document.querySelector(".strong2")

iPhone.addEventListener("click", function (event){

    let clickTarget = event.target;

    let activeButton = iPhone.querySelector(".active");

    let priceItem = iPhone.querySelector(".price");

    let currentPrice;

    let activeButtonColor = iPhone.querySelector(".active-border");

    if(clickTarget.classList.contains("color-btn") && !clickTarget.classList.contains("active-border")){

        clickTarget.classList.add("active-border");

        activeButtonColor.classList.remove("active-border");    
    }
    if(clickTarget.classList.contains("btn") && !clickTarget.classList.contains("active")){

        clickTarget.classList.add("active");

        activeButton.classList.remove("active");    
    }
    currentPrice = clickTarget.getAttribute("data-size")

    if(currentPrice === "medium"){
        priceItem.textContent = "Цена 80 000р"
    }
    if(currentPrice === "large"){
        priceItem.textContent = "Цена 100 000р"
    }
});

samsung.addEventListener("click", function (event){

    let clickTarget = event.target;

    let activeButton = samsung.querySelector(".active");

    let priceItem = samsung.querySelector(".price");

    let currentPrice;

    let activeButtonColor = samsung.querySelector(".active-border");

    if(clickTarget.classList.contains("color-btn") && !clickTarget.classList.contains("active-border")){

        clickTarget.classList.add("active-border");

        activeButtonColor.classList.remove("active-border");    
    }
    if(clickTarget.classList.contains("btn") && !clickTarget.classList.contains("active")){

        clickTarget.classList.add("active");

        activeButton.classList.remove("active");    
    }
    currentPrice = clickTarget.getAttribute("data-size")

    if(currentPrice === "medium"){
        priceItem.textContent = "Цена 40 000р"
    }
    if(currentPrice === "large"){
        priceItem.textContent = "Цена 60 000р"
    }
});

buy.addEventListener('click', buying)
function buying(event){  
    if(buy.classList.contains("buy")){ 
        buy.classList.toggle('buy')
        buy.classList.toggle('close')
        let a = prompt("Введите email")
        alert(`Ваш email: ${a}. Ожидайте сообщение с потдверждением`)
        confirm.classList.toggle('confirm')
        return
    }
    if(buy.classList.contains("close")){ 
        buy.classList.toggle('buy')
        buy.classList.toggle('close')
        confirm.classList.toggle('confirm')
    }
}
buy2.addEventListener('click', buying2)
function buying2(event){  
    if(buy2.classList.contains("buy")){ 
        buy2.classList.toggle('buy')
        buy2.classList.toggle('close')
        let a = prompt("Введите email")
        alert(`Ваш email: ${a}. Ожидайте сообщение с потдверждением`)
        confirm2.classList.toggle('confirm')
        return
    }
    if(buy2.classList.contains("close")){ 
        buy2.classList.toggle('buy')
        buy2.classList.toggle('close')
        confirm2.classList.toggle('confirm')
    }
}

