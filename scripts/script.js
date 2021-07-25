function addOptions(iArrOptions, index){
    let type = "food-type-"+index;
    let container = document.querySelector(`.ctn-options` + `.${type}`);
   
    for (i = 0; i < iArrOptions.length; i++){
        let id = iArrOptions[i]["id"];
        let name = iArrOptions[i]["name"];
        let description = iArrOptions[i]["desc"];
        let price = iArrOptions[i]["price"];

        container.innerHTML += `
        <li class="card-option ${type} ${i}" onclick="select(this)">
        <img src="images/${id}.jpg"/>
        <p><strong>${name}</strong></p>
        <p class="txt-option-desc">${description}</p>
        <p class="txt-black">R$ ${price}</p>
        <ion-icon name="checkmark-circle" class="check-icon"></ion-icon>
        </li>
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
    let btnText = document.querySelector(".btn-buy > p");

    if (totalSelected >= minSelected) {
        btnBuy.disabled = false;
        btnText.innerHTML = "<en>Fechar pedido<en>";
    }
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


    if (typeIndex == 0) {
        let clientName = prompt("Informe seu nome");
        let clientAddress = prompt("Informe seu endereço");

        if (clientName === null || clientName.replace(/ /g, "") === "") clientName = "Não informado";
        if (clientAddress === null || clientAddress.replace(/ /g, "") === "") clientAddress = "Não informado";

        clientInfo += `\n\n`;
        clientInfo += `Nome: ${clientName} \n`;
        clientInfo += `Endereço: ${clientAddress}`;

        container.innerHTML += `
        <li class="joined-text">
        <p> Nome: ${clientName}</p>
        </li>
        `;

        container.innerHTML += `
        <li class="joined-text">
        <p> Endereço: ${clientAddress}</p>
        </li>
        `;
    }

    message += `- *${types[typeIndex]}*: ${name} \n`;

    container.innerHTML +=  `
    <li class="row-item-confirm">
    <span>${name}</span>
    <span class="price">R$ ${price}</span>
    </li>
    `;
    
    if (typeIndex == lastTypeIndex) {
        let strTotalPrice = priceToString(totalPrice);
        
        message += `*Total*: R$ *${strTotalPrice}*`;
        message += clientInfo;

        container.innerHTML += `
        <li class="row-item-confirm">
        <span><strong> TOTAL </strong></span>
        <span class="price"><strong>R$ ${strTotalPrice} </strong></span>
        </li>
        `;
    }

}

function cleanValues(){
    let ctnConfirmItems = document.querySelector(".ctn-items-confirm");

    totalPrice = 0;
    clientInfo = "";
    message = "Olá, gostaria de fazer o *pedido*: \n";
    ctnConfirmItems.innerHTML = "";
}

function sendToWhatsapp(){ 
    message = encodeURIComponent(message);
    window.open("https://wa.me/5521968090449?text=" + message);
}

let clientInfo = "";
let totalPrice = 0;
let message = "Olá, gostaria de fazer o *pedido*: \n";
cleanValues();
arrOptions.forEach((element, index) => addOptions(element, index));