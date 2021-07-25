
function addOptions(iArrOptions, index){
    let type = "food-type-"+index;
    let container = document.querySelector(`.ctn-options` + `.${type}`);
   
    for (i = 0; i < iArrOptions.length; i++){
        let id = iArrOptions[i]["id"];
        let name = iArrOptions[i]["name"];
        let description = iArrOptions[i]["desc"];
        let price = iArrOptions[i]["price"];

        container.innerHTML += `
        <div class="card-option ${type} ${i}" onclick="select(this)">
        <img src="images/${id}.jpg"/>
        <p><strong>${name}</strong></p>
        <p class="txt-option-desc">${description}</p>
        <p class="txt-black">R$ ${price}</p>
        <ion-icon name="checkmark-circle" class="check-icon"></ion-icon>
        </div>
        `;
    }
}

function select(element){
    let type = element.classList[1];
    let prevSelected = document.querySelector(`.card-option` + `.${type}` + `.selected`);

    if (prevSelected !== null) prevSelected.classList.remove("selected");
    element.classList.add("selected");

    checkRequirements();
}

function checkRequirements(){
    let minSelected = arrOptions.length;
    let totalSelected = document.querySelectorAll(".selected").length;
    let btnBuy = document.querySelector(".btn-buy");

    if (totalSelected >= minSelected) btnBuy.disabled = false;

    return !btnBuy.disabled;
}

function buy(){
    let selecteds = document.querySelectorAll(".selected");
    let selectedIndexes = [];
    toggleConfirmWindow();

    //ROCOVER INDEXES FROM THE SELECTED ELEMENTS AND PUSH INTO selectedIndexes;
    selecteds.forEach((element, index) => selectedIndexes[index] = element.classList[2]);

    //RECOVER THE VALUES FROM arrOptions OF THE SELECTED OPTIONS OF EACH CATEGORY 
    selectedIndexes.forEach((elementIndex, typeIndex) =>  generateRevisionScreen(elementIndex, typeIndex));
}

function toggleConfirmWindow(){
    let confirmWindow = document.querySelector(".confirm-window");
    confirmWindow.classList.toggle("hidden");

    if (confirmWindow.classList.contains("hidden")) cleanValues();
}


function stringToPrice(string){
    return Number(string.replace(",", "."));
}

function priceToString(price){
    return price.toFixed(2).toString().replace(".", ",");
}


function generateRevisionScreen(elementIndex, typeIndex){
    let lastTypeIndex =  arrOptions.length-1;
    let container = document.querySelector(".ctn-items-confirm");
    let name = arrOptions[typeIndex][elementIndex]["name"];
    let price = arrOptions[typeIndex][elementIndex]["price"];
    totalPrice += stringToPrice(price);   

    message += `- *${types[typeIndex]}*: ${name} \n`;
    
    container.innerHTML +=  `
    <div class="row-item-confirm">
    <span>${name}</span>
    <span class="price">R$ ${price}</span>
    </div>
    `;
    
    if (typeIndex == lastTypeIndex) {
        let strTotalPrice = priceToString(totalPrice);
        
        message += `*Total*: R$ ${strTotalPrice} \n`;

        container.innerHTML += `
        <div class="row-item-confirm">
        <span><strong> TOTAL </strong></span>
        <span class="price"><strong>R$ ${strTotalPrice} </strong></span>
        </div>
        `;
    }

}

function cleanValues(){
    let ctnConfirmItems = document.querySelector(".ctn-items-confirm");

    totalPrice = 0;
    message = "Olá, gostaria de fazer o *pedido*: \n";
    ctnConfirmItems.innerHTML = "";
}

function sendToWhatsapp(){ 
    //console.log(message);
    message = encodeURIComponent(message);
    window.open("https://wa.me/5521968090449?text=" + message);
}


let totalPrice = 0;
let message = "Olá, gostaria de fazer o *pedido*: \n";
cleanValues();
arrOptions.forEach((element, index) => addOptions(element, index));


