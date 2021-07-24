
function addOptions(iArrOptions, index){
    let opts = "";
    let type = "food-type-"+index;
    let container = document.querySelector(`.ctn-options` + `.${type}`);
   
    for (i = 0; i < iArrOptions.length; i++){
        let id = iArrOptions[i]["id"];
        let name = iArrOptions[i]["name"];
        let description = iArrOptions[i]["desc"];
        let price = iArrOptions[i]["price"];

        opts += `
        <div class="card-option ${type} ${i}" onclick="select(this)">
        <img src="images/${id}.jpg"/>
        <p><strong>${name}</strong></p>
        <p class="txt-option-desc">${description}</p>
        <p class="txt-black">R$ ${price}</p>
        <ion-icon name="checkmark-circle" class="check-icon"></ion-icon>
        </div>
        `;
    }

    container.innerHTML = opts;
}

function select(element){
    let type = element.classList[1];
    let prevSelected = document.querySelector(`.card-option` + `.${type}` + `.selected`);

    if (prevSelected !== null) prevSelected.classList.remove("selected");
    element.classList.add("selected");

    checkRequirements();
}

function checkRequirements(){
    let btnBuy = document.querySelector(".btn-buy");
    let minSelected = arrOptions.length;
    let totalSelected = document.querySelectorAll(".selected").length;

    if (totalSelected >= minSelected) btnBuy.disabled = false;

    return !btnBuy.disabled;
}

function buy(){
    let selecteds = document.querySelectorAll(".selected");
    let selectedIndexes = [];
    //ROCOVER INDEXES FROM THE SELECTED ELEMENTS AND PUSH INTO selectedIndexes;
    selecteds.forEach((element, index) => selectedIndexes[index] = element.classList[2]);
    let alertTestText = "";

    //RECOVER THE VALUES FROM arrOptions OF THE SELECTED OPTIONS OF EACH CATEGORY 
    selectedIndexes.forEach((elementIndex, typeIndex) => 
    alertTestText += arrOptions[typeIndex][elementIndex]["name"] + " = " + arrOptions[typeIndex][elementIndex]["price"] + "\n"
    );

    alert(alertTestText);
}

arrOptions.forEach((element, index) => addOptions(element, index));


