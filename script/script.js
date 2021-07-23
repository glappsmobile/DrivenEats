const KEY_PRINCIPAL = "principal";
const KEY_SOBREMESA = "sobremesa";
const KEY_BEBIDA = "bebida";
let checked = [null, null, null];
let categorias = [KEY_PRINCIPAL, KEY_SOBREMESA, KEY_BEBIDA];
let btnBuy = document.getElementById("btn-buy");

const arrPrincipais = [
    {name:"Strogonoff", id:"strogonoff", desc:"Strogonoff de frango, batata palha e arroz", price:"17,00"},
    {name:"Baião de dois", id:"baiao-de-dois", desc:"", price:"23,00"}, 
    {name:"Steak au poivre", id:"steak-au-poivre", desc:"Steak au poivre e arroz", price:"47,00"},
    {name:"Salada", id:"salada", desc:"", price:"7,00"},
    {name:"Pizza Prato Feito", id:"pizza", desc:"Metade pizza, metade prato feito", price:"59,00"}, 
];

const arrSobremesas = [
    {name:"Pudim", id:"pudim", desc:"1 Fatia", price:"2,50"},
    {name:"Salada de frutas", id:"salada-de-frutas", desc:"", price:"4,00"},
    {name:"Brownie", id:"brownie", desc:"", price:"2,00"},
    {name:"Sorvete", id:"sorvete", desc:"500ml", price:"6,00"}, 
    {name:"Açaí", id:"acai", desc:"500ml", price:"7,00"}, 
];

const arrBebidas = [
    {name:"Coca", id:"coca", desc:"300ml", price:"5,00"},
    {name:"Dolly", id:"dolly", desc:"300ml", price:"0,50"}, 
    {name:"Pepsi", id:"pepsi", desc:"300ml", price:"5,50"},
    {name:"Mate", id:"mate", desc:"300ml", price:"2,00"},
    {name:"Skol Beats", id:"skol-beats", desc:"300ml", price:"7,00"}, 
];

function getCheckedRadios(){

    for (var i = 0; i < categorias.length; i++) {
        let radios = document.getElementsByName(categorias[i]);
        for (z = 0;  z < radios.length; z++) {
            if (radios[z].checked) {
                checked[i] = z;
                break;
            }
        }
    }

    if (isAllChecked()) btnBuy.disabled = false;
    
}

function isAllChecked(){
    let isAllChecked = true;
    for (i = 0; i < checked.length; i++){
        if (checked[i] == null) isAllChecked = false;
    }
    return isAllChecked;
}


function addOptions(idContainer, arrOptions){
   // let container = document.getElementById("container-options-"+idContainer);
    let container = document.querySelector('.container-options-'+idContainer);
    
    let opts = "";

    for (i = 0; i < arrOptions.length; i++){
        opts +=
        '<label> ' +
        '<input type="radio" name="'+idContainer+'" class="option" onclick="getCheckedRadios()"/>' +
        '<div class="card-option">' +
        '<img src="images/'+arrOptions[i]["id"]+'.jpg"/>' +
        '<p><strong>'+arrOptions[i]["name"]+'</strong></p>' +
        '<p class="txt-option-desc">'+arrOptions[i]["desc"]+'</p>' +
        '<p class="txt-black">R$ '+arrOptions[i]["price"]+'</p>' +
        '<ion-icon name="checkmark-circle" class="check-icon"></ion-icon>' +
        '</div>' +
        '</label>';
    }

    container.innerHTML = opts;
}

function buy(){
    if(isAllChecked()){
        alert("Teste: "+"\n" +
        arrPrincipais[checked[0]]["name"] + " = " + arrPrincipais[checked[0]]["price"] + "\n" +
        arrSobremesas[checked[1]]["name"]+" = "+ arrSobremesas[checked[1]]["price"] + "\n" +
        arrBebidas[checked[2]]["name"]+ " = " +arrBebidas[checked[2]]["price"] + "\n"
        )
    } else {
        alert("Você precisa selecionar os 3 itens.");
    }
}

addOptions(KEY_PRINCIPAL, arrPrincipais);
addOptions(KEY_SOBREMESA, arrSobremesas);
addOptions(KEY_BEBIDA, arrBebidas);



