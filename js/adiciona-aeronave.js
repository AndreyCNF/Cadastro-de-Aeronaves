var BotaoAdicionarAcft = document.querySelector('#adicionar-aeronave');

BotaoAdicionarAcft.addEventListener("click", function () { 
    event.preventDefault();


    var form = document.querySelector('#form-adiciona');

    var aeronave = obtemAeronaveDoFormCadastro(form);

    var erros = validaRestricoesCampos(aeronave);

   if(erros.length > 0) {
       return;
   }
   
   adicionarAeronave(aeronave);
    form.reset();
   

    

});

function obtemAeronaveDoFormCadastro(form){


    var aeronave = {
        nome: form.nome.value,
        altura: form.altura.value,
        largura:form.largura.value, 
        categoria:form.categoria.value,
        comprimento: form.comprimento.value,
        pmd: form.pmd.value, 
        pax: form.pax.value,
        fabricante: form.fabricante.value,
        iata: form.iata.value,
        icao: form.icao.value  
    }

    return aeronave;
}

function adicionarAeronave (aeronave) {
    var aeronaveTr = criaTR(aeronave);
    var adicionarTabela = document.querySelector('#tabela-aeronves');
    adicionarTabela.append(aeronaveTr);
    
  }
