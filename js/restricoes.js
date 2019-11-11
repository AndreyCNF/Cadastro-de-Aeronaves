function validaRestricoesCampos (aeronave){

    var erros = [];
    
    if(aeronave.nome.length == 0) {
        erros.push(M.toast({html: 'Erro, o campo nome precisa estar preenchido'}));
     
    }
    if(aeronave.altura.length == 0 || aeronave.altura.length > 4) {
        erros.push(M.toast({html: 'Erro, altura inválida'}));
    }
    if(aeronave.largura.length == 0 || aeronave.largura.length > 4) {
        erros.push(M.toast({html: 'Erro, largura inválida'}));
    }
    if(aeronave.comprimento.length == 0 || aeronave.comprimento.length > 4) {
        erros.push(M.toast({html: 'Erro, comprimento inválida'}));
    }
    if(aeronave.pmd.length == 0 || aeronave.pmd.length > 8) {
        erros.push(M.toast({html: 'Erro, PMD inválida'}));
    }
    if(aeronave.pax.length > 4) {
        erros.push(M.toast({html: 'Erro, número de pax inválido 0 a 999'}));
    }
    if(aeronave.fabricante.length == 0) {
        erros.push(M.toast({html: 'Erro, fabricante inválida'}));
    }
    if(aeronave.icao.length != 4) {
        erros.push(M.toast({html: 'Erro, ICAO deve conter 4 digitos'}));
    }
    if(aeronave.iata.length != 3) {
        erros.push(M.toast({html: 'Erro, IATA deve conter 3 digitos'}));
    }
    return erros; 
}