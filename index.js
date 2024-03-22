var productImg = ["bg-1 (2).png", "bg-1 (1).png", "bg-1.png"];
var productName = ["365 Signature Hoodie", "Organic Skinny High Waist Jeans", "365 Signature Hoodie"];


var cardContainer = document.querySelector(".card-container");
var buttonNext = document.getElementById("slider-btn-next");
var buttonPrevious = document.getElementById("slider-btn-previous");

productImg.forEach(function(imgSrc, i) {

    var cardDiv = document.createElement("div");
    cardDiv.classList.add("card");


    var cardBodyDiv = document.createElement("div");
    cardBodyDiv.classList.add("card-body");

    var img = document.createElement("img");
    img.src = "/img/" + imgSrc; 
    img.alt = "Product Image";
    img.id = "product-img"; 

    var productNamePDesk = document.createElement("p");
    productNamePDesk.innerHTML = productName[i]; 
    productNamePDesk.className = "desk-header";

    var productNamePMob = document.createElement("p");
    var productNameMob = "Organic Skinny High Waist Raw Hem Jeans";
    productNamePMob.innerHTML = productNameMob;
    productNamePMob.className = "mob-header";


    var priceP = document.createElement("p");
    priceP.innerHTML = "&euro; 33.95";
    priceP.style.fontWeight = "bold";

    cardBodyDiv.appendChild(img);
    cardBodyDiv.appendChild(productNamePDesk);
    cardBodyDiv.appendChild(productNamePMob);
    cardBodyDiv.appendChild(priceP);

    for (var i = 1; i <= 4; i++) {
        var colorBtn = document.createElement("button");
        colorBtn.classList = "color-btn";
        colorBtn.id = "color-btn" + i;
        cardBodyDiv.appendChild(colorBtn);
    }

    cardDiv.appendChild(cardBodyDiv);

    cardContainer.appendChild(cardDiv);
});


buttonNext.onclick = function () {
    cardContainer.scrollLeft += 100;
};

buttonPrevious.onclick = function () {
    cardContainer.scrollLeft -= 100;
};