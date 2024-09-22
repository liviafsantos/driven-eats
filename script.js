
function selecionarPrato(pratoselecionado){
    const pratoSelecionadoAntes = document.querySelector(".verdeprato");
    if (pratoSelecionadoAntes !== null){
        pratoSelecionadoAntes.classList.remove("verdeprato")   
    }
    pratoselecionado.classList.add("verdeprato");
    verificaPedidoCompleto();  
}
function selecionarBebida(bebidaselecionada){
    const bebidaSelecionadaAntes = document.querySelector(".verdebebida");
    if (bebidaSelecionadaAntes !== null){
        bebidaSelecionadaAntes.classList.remove("verdebebida")   
    }
    bebidaselecionada.classList.add("verdebebida");
    verificaPedidoCompleto();
}
function selecionarSobremesa(sobremesaselecionada){
    const sobremesaSelecionadaAntes = document.querySelector(".verdesobremesa");
    if (sobremesaSelecionadaAntes !== null){
        sobremesaSelecionadaAntes.classList.remove("verdesobremesa")   
    }
    sobremesaselecionada.classList.add("verdesobremesa");
    verificaPedidoCompleto();
}

/* const resumo = document.querySelector(".resumo");
painel.classList.remove("escondido");*/
function verificaPedidoCompleto() {
    const pratoselecionado = document.querySelector(".verdeprato");
    const bebidaselecionada = document.querySelector(".verdebebida");
    const sobremesaselecionada = document.querySelector(".verdesobremesa");
    const botaoFim = document.querySelector(".botaoFim");

    if (pratoselecionado && bebidaselecionada && sobremesaselecionada){
        botaoFim.classList.add("verdeFim");
        botaoFim.innerHTML = "Fechar pedido";
    }
}

function pedir(){
    const pratoselecionado = document.querySelector (".verdeprato");
    const bebidaselecionada = document.querySelector(".verdebebida");
    const sobremesaselecionada = document.querySelector(".verdesobremesa");
    if (pratoselecionado!== ""){
        if (bebidaselecionada !== "") {
            if (sobremesaselecionada !== ""){
                const sobremesa = sobremesaselecionada.querySelector(".nomeSobremesa").innerHTML;
                const precoSobremesa = Number(sobremesaselecionada.querySelector(".preco").innerHTML);
                const prato = pratoselecionado.querySelector(".nomePrato").innerHTML;
                const precoPrato = Number(pratoselecionado.querySelector(".preco").innerHTML);
                const bebida = bebidaselecionada.querySelector(".nomeBebida").innerHTML;
                const precoBebida = Number(bebidaselecionada.querySelector(".preco").innerHTML);

                document.querySelector(".resumo").classList.remove("escondido");
                document.querySelector(".resumoPedido").classList.remove ("escondido");
                document.querySelector(".tituloResumo").innerHTML = "Confirme seu pedido";
                document.querySelector(".prato").innerHTML = `${prato}: ${precoPrato.toFixed(2)}`
                document.querySelector(".bebida").innerHTML = `${bebida}: ${precoBebida.toFixed(2)}`
                document.querySelector(".sobremesa").innerHTML = `${sobremesa}: ${precoSobremesa.toFixed(2)}`
                const total = precoBebida + precoPrato + precoSobremesa;
                document.querySelector(".total").innerHTML=`TOTAL: ${total.toFixed(2)}`;    
                document.querySelector(".cancelar").onclick = function(){
                    document.querySelector(".resumo").classList.add("escondido");
                    document.querySelector(".resumoPedido").classList.add("escondido");
                }          
            } 
        }
    }
}
function whatsapp() {
    const pratoselecionado = document.querySelector(".verdeprato");
    const bebidaselecionada = document.querySelector(".verdebebida");
    const sobremesaselecionada = document.querySelector(".verdesobremesa");

    const sobremesa = sobremesaselecionada.querySelector(".nomeSobremesa").innerHTML;
    const precoSobremesa = Number(sobremesaselecionada.querySelector(".preco").innerHTML);
    const prato = pratoselecionado.querySelector(".nomePrato").innerHTML;
    const precoPrato = Number(pratoselecionado.querySelector(".preco").innerHTML);
    const bebida = bebidaselecionada.querySelector(".nomeBebida").innerHTML;
    const precoBebida = Number(bebidaselecionada.querySelector(".preco").innerHTML);
    
    const total = precoBebida + precoPrato + precoSobremesa;
    
    const mensagem = `Olá, gostaria de fazer o pedido:\n
    - Prato: ${prato} R$ ${precoPrato.toFixed(2)} \n
    - Bebida: ${bebida} R$ ${precoBebida.toFixed(2)}\n
    - Sobremesa: ${sobremesa} R$ ${precoSobremesa.toFixed(2)}\n
    TOTAL: R$ ${total.toFixed(2)}`;
    const mensagemEncoded = encodeURIComponent(mensagem);
    
    const whatsappURL = `https://wa.me/5511984524742?text=${mensagemEncoded}`;
    const whatsappLink = document.getElementById("whatsappLink");
    whatsappLink.href = whatsappURL;    
    window.location.href = whatsappURL;
}
