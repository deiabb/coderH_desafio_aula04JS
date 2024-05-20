//Codificar 3 funções para resolver um problema mais complexo
/* 
Conversor de medidas
De cm para metro - dividir o valor inserido por 100
De cm para mm - multiplique o valor de comprimento por 10
De cm para polegadas - dividir o valor inserido por 2.54
De cm para pés - dividir o valor de comprimento por 30.48
*/

alert("Olá esse é um conversor de medidas. Digite os valores em centímetros e escolha a unidade para conversão")

function paraMetro(medida){
    var resultado = medida / 100
    return resultado
}

function paraMili(medida) {
    var resultado = medida * 10
    return resultado
}

function paraPole(medida) {
    var resultado = medida / 2.54
    return resultado
}

function paraPes(medida) {
    var resultado = medida / 30.48
    return resultado
}

function conversor(valor, unidade) {
    valor = prompt("Digite um valor em centímetros")
    unidade = prompt("Digite a unidade desejada.(metro - milimetro - polegada - pes")

    if ((unidade == "m") || (unidade == "metro")) {
        var resolver = paraMetro(valor)
        return  alert(`O valor inserido foi ${valor} cm, que corresponde a ${resolver} m`)
    } else if ((unidade == "mm") || (unidade == "milimetro")) {
        var resolver = paraMili(valor)
        return  alert(`O valor inserido foi ${valor} cm, que corresponde a ${resolver} mm`)
    }
    else if ((unidade == "polegada") || (unidade == "polegadas")) {
        var resolver = paraPole(valor)
        return  alert(`O valor inserido foi ${valor} cm, que corresponde a ${resolver} polegadas`)
    }
    else if ((unidade == "pes") || (unidade == "pés")) {
        var resolver = paraPes(valor)
        return  alert(`O valor inserido foi ${valor} cm, que corresponde a ${resolver} pés`)
    }
    else {
        return alert("A unidade digitada não está cadastrada. Recarregue a página e tente novamente")
    }
};

conversor()