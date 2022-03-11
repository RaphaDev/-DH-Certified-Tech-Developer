// Lista de Funcoes do Microondas
let lista = ["Pipoca", "Macarrao", "Carne", "Feijao", "Brigadeiro"];

// Botao Pressionado - Informacao Escolhida pelo Usuario
let pratoEscolhido = "Macarrao"; // Apertei Botao Pipoca
let tempoEscolhido = 8;

// Parte Logica
if(lista.includes(pratoEscolhido)) {
    let tempoPronto;
    let tempoQueimou;
    let tempoKabum;
    switch (pratoEscolhido){
        case "Pipoca":
            tempoPronto = 10;
            tempoQueimou = 20;
            tempoKabum = 30;
            break;
        case "Macarrao":
            tempoPronto = 8;
            tempoQueimou = 16;
            tempoKabum = 24;
            break;
        case "Carne":
            tempoPronto = 15;
            tempoQueimou = 16;
            tempoKabum = 24;
            break;
        case "Feijao":
            tempoPronto = 12;
            tempoQueimou = 24;
            tempoKabum = 36;
            break;
        case "Brigadeiro":
            tempoPronto = 8;
            tempoQueimou = 16;
            tempoKabum = 24;
            break;
        default:
            break;
    }

    if(tempoEscolhido < tempoPronto) {
        console.log("tempo insuficiente")
    }
    if(tempoEscolhido == tempoPronto) {
        console.log("Prato pronto, bom apetite!!!")
    }

    if(tempoEscolhido > tempoPronto && tempoEscolhido < tempoQueimou) {
        console.log("Atencao: Passou do Ponto!")
    }

    if(tempoEscolhido > tempoQueimou && tempoEscolhido < tempoKabum) {
        console.log("Atencao: Prato Carbonizando!")
    }

    if(tempoEscolhido == tempoQueimou) {
        console.log("Comida Queimou")
    }

    if(tempoEscolhido == tempoKabum) {
        console.log("Kabumm!!")
    }

    if(tempoEscolhido > tempoKabum) {
        console.log("Explodiu: Confia!")
    }

} else {
    console.log("nao existe"); 
}


