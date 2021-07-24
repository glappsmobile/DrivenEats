
/*
    DÚVIDA 1
    ESSE IF ELSE NA FUNÇÃO buy() É PRA CASO O USUÁRIO TIRE O DISABLED DO BUTTON PELO INSPECT ELEMENTS.
    É UMA BOA PRÁTICA OU É DESNECESSÁRIO JÁ QUE NUM PROJETO REAL, HAVERIA VERIFICAÇÕES MAIS À FRENTE
    PRA CHECAR SE A REQUEST É VÁLIDA?
    EU NÃO COLOQUEI NO PROJETO PORQUE PARECEU DAR UMA POLUÍDA.
*/

function buy(){
    if(checkRequirements){
        //PROSSEGUIR COM A COMPRA
    } else {
        alert("Você precisa selecionar os 3 itens.");
    }
}

/*
    DÚVIDA 2
    EU DECIDI INVESTIR MEU TEMPO GERANDO O HTML DAS OPÇÕES PELO JS PORQUE JÁ TINHA FEITO 
    ISSO ANTES E ESTAVA ME EMBOLANDO MUITO ADICIONAR TUDO POR HTML, PORQUE SE EU DECIDISSE 
    MUDAR ALGO PARA TESTAR, ACABAVA NÃO MUDANDO NOS OUTROS ELEMENTOS E EU FICAVA PERDIDO 
    E PORQUE IMAGINEI QUE NUM PROJETO REAL, AS OPÇÕES NÃO SERIAM ESCRITAS DIRETAS PELO HTML.
*/


function addOptions(iArrOptions, index){
    let opts = "";
    let type = "food-type-"+index;
    let container = document.querySelector(`.ctn-options` + `.${type}`);
   
    for (i = 0; i < iArrOptions.length; i++){
        let id = iArrOptions[i]["id"];
        let name = iArrOptions[i]["name"];
        let description = iArrOptions[i]["desc"];
        let price = iArrOptions[i]["price"];
        /*
            AS INFORMAÇÕES ESTÃO TODAS CONTIDAS NESSE iArrOptions, EU COLOQUEI ELES DIRETO
            NA opts MAS ACHEI QUE DEU UMA DIFICULTADA NA LEITURA, ENTÃO DECIDI CRIAR UMA 
            VARIÁVEL PARA CADA VALOR. O QUE SERIA UMA BOA PRÁTICA, ADICIONAR O VALOR DIRETAMENTE
            DO ARRAY NA VARIÁVEL opts

            Ex.:
            opts = `<img src="images/${iArrOptions[i]["id"]}.jpg"/>`

            OU ALOCAR OS VALORES DO iArrOptions[i] DENTRO DE VARIÁVEIS PRA SÓ ENTÃO POR NO opts 
            VISANDO FACILITAR A LEITURA

            Ex.:
            let id = iArrOptions[i]["id"];

            opts = `<img src="images/${id}.jpg"/>`

            ?

        */

        opts += `
        <div class="card-option ${type}" onclick="select(this)">
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
