function criaTR (aeronave) {

    var aeronaveTr = document.createElement("tr");
    aeronaveTr.classList.add("aeronave");
    
    var nomeTd = criaTd(aeronave.nome, 'info-nome');
    var alturaTd = criaTd(aeronave.altura, 'info-altura');
    var categoriaTd = criaTd(aeronave.categoria, 'info-categoria');
    var larguraTd = criaTd(aeronave.largura, "info-largura");
    var pmdTd = criaTd(aeronave.pmd, 'info-pmd');
    var paxTd = criaTd(aeronave.pax, 'info-pax');
    var fabricanteTd = criaTd(aeronave.fabricante, 'info-fabricante');
    var iataTd = criaTd(aeronave.iata, 'info-iata');
    var icaoTd = criaTd(aeronave.icao, 'info-icao');

    aeronaveTr.appendChild(nomeTd);
    aeronaveTr.appendChild(alturaTd);
    aeronaveTr.appendChild(categoriaTd);
    aeronaveTr.appendChild(larguraTd);
    aeronaveTr.appendChild(pmdTd);
    aeronaveTr.appendChild(paxTd);
    aeronaveTr.appendChild(fabricanteTd);
    aeronaveTr.appendChild(iataTd);
    aeronaveTr.appendChild(icaoTd);

    return aeronaveTr;

}

function criaTd (dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
   td.classList.add(classe);
    return td;
}
