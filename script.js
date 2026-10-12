let botoes = document.querySelectorAll(".numero") 
let visor = document.querySelector(".visor")
let botaoC = document.querySelector(".delete")
let operadores = document.querySelectorAll(".operador")
let botaoIgual = document.querySelector(".igual")
visor.textContent = "0";
botoes.forEach(function(botao){
    botao.onclick = function(){
    console.log(botao);
    if(visor.textContent === "0"){
        visor.textContent = botao.textContent;
    }
    else{
        visor.textContent += botao.textContent;
    }
    }
});
botaoC.onclick = function(){
    visor.textContent = "0";
}
operadores.forEach(function(operador){
    operador.onclick = function()
    {
        visor.textContent += operador.textContent;
    }
})
botaoIgual.onclick = function(){
    let conta = visor.textContent;
    if (conta.includes("+"))
    {
        let partes = conta.split("+");
        let a = Number(partes[0]);
        let b = Number(partes[1]);
        let resultado = a+b;
        visor.textContent = resultado;
    }
    else if (conta.includes("-"))
    {
        let partes = conta.split("-");
        let a = Number(partes[0]);
        let b = Number(partes[1]);
        let resultado = a-b;
        visor.textContent = resultado;
    }
    else if (conta.includes("x"))
    {
        let partes = conta.split("x");
        let a = Number(partes[0]);
        let b = Number(partes[1]);
        let resultado = a*b;
        visor.textContent = resultado;
    }
    else if (conta.includes("/"))
    {
        let partes = conta.split("/");
        let a = Number(partes[0]);
        let b = Number(partes[1]);
        let resultado = a/b;
        visor.textContent = resultado;
    }
}