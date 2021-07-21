const KEY_PRINCIPAL = "principal";
const KEY_BEBIDA = "bebida";
const KEY_SOBREMESA = "sobremesa";

const arrPrincipais = [
    {name:"Strogonoff", id:"strogonoff", desc:"Strogonoff de frango, batata palha e arroz", price:"17,00"},
    {name:"Baião de dois", id:"baiao-de-dois", desc:"", price:"23,00"}, 
    {name:"Steak au poivre", id:"steak-au-poivre", desc:"Steak au poivre e arroz", price:"47,00"},
    {name:"Salada", id:"salada", desc:"", price:"7,00"},
    {name:"Pizza Prato Feito", id:"pizza", desc:"Metade pizza, metade prato feito", price:"59,00"}, 
];

const arrBebidas = [
    {name:"Strogonoff", id:"strogonoff", desc:"Strogonoff de frango, batata palha e arroz", price:"17,00"},
    {name:"Baião de dois", id:"baiao-de-dois", desc:"", price:"23,00"}, 
    {name:"Steak au poivre", id:"steak-au-poivre", desc:"Steak au poivre e arroz", price:"47,00"},
    {name:"Salada", id:"salada", desc:"", price:"7,00"},
    {name:"Pizza Prato Feito", id:"pizza", desc:"Metade pizza, metade prato feito", price:"59,00"}, 
];

const arrSobremesas = [
    {name:"Strogonoff", id:"strogonoff", desc:"Strogonoff de frango, batata palha e arroz", price:"17,00"},
    {name:"Baião de dois", id:"baiao-de-dois", desc:"", price:"23,00"}, 
    {name:"Steak au poivre", id:"steak-au-poivre", desc:"Steak au poivre e arroz", price:"47,00"},
    {name:"Salada", id:"salada", desc:"", price:"7,00"},
    {name:"Pizza Prato Feito", id:"pizza", desc:"Metade pizza, metade prato feito", price:"59,00"}, 
];



function addOptions(idContainer, arrOptions){
    let container = document.getElementById("container-options-"+idContainer);
    let opts = "";

    for (i = 0; i < arrOptions.length; i++){
        opts +=
        '<label> ' +
        '<input type="radio" name="'+idContainer+'" class="option" />' +
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

addOptions(KEY_PRINCIPAL, arrPrincipais);
addOptions(KEY_BEBIDA, arrBebidas);
addOptions(KEY_SOBREMESA, arrSobremesas);


/*
'\<label\>
<input type="radio" name="principal" class="option" />
  <div class="card-option">
    <img src="images/xfininho.jpg"/>
    <p><strong>Pizza Prato Feito</strong></p>
    <p class="txt-option-desc">Metade pizza, <br> metade prato feito</p>
    <p class="txt-black">R$ 59,00</p>
    <ion-icon name="checkmark-circle" class="check-icon"></ion-icon>
  </div>
</label>';*/


function getCheckedRadio(){
    var categorias = ["principal", "bebida", "sobremesa"];
    var valores = ["nenhum", "nenhum", "nenhum"];

    for (var i = 0; i < categorias.length; i++) {

        let radios = document.getElementsByName(categorias[i]);

        for (z = 0;  z < radios.length; z++) {
            if (radios[z].checked) {
                valores[i] = z;
                break;
            }

        }
    }
    console.clear();
    console.log("INDEX SELECIONADO DE CADA CATEGORIA:");
    console.log("Prato Principal: "+valores[0] );
    console.log("Bebida: "+valores[1] );
    console.log("Sobremesa: "+valores[2] );
}

