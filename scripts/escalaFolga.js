//Exemplo folga 25/10/2020

let dataInicial, dataFinal, diaInicial, mesInicial, anoInicial, diaFinal, mesFinal, anoFinal;

var diaSemana = new Array(
   'Domingo','2ª','3ª','4ª','5ª','6ª','Sábado'
  );

//pegando elemento UL
var elementoLista = document.querySelector("#uldata");

//peganddo o input text element
//var inputNewName = document.getElementById("nome");

//percorrendo nome da lista de nomes
// for (name of names) {
//   //chamando função que insere o nome
//   adicionaItem(name);
// }

function calcularFolga() {

   resetLista();

   var dias = [];
   var datas = [];

   atualizaData();


   var dia = new Date(anoInicial, mesInicial, diaInicial);
   var diaF = new Date(anoFinal, mesFinal, diaFinal);

   // const $ul = $(".uldata");
   // const $li;
   //percorro os dias até chegar a data final
   for (dia; dia <= diaF; dia.setDate(dia.getDate() + 2)) {
      dias.push(dia.getDate()); //salvo em um array
      datas.push(dia.getDate() + "/" + (dia.getMonth() + 1) + "/" + dia.getFullYear() + " - " + diaSemana[dia.getDay()]);
      console.log("Folga dia: " + dia.getDate() + "/" + (dia.getMonth() + 1));


      //    $li = `<li>
      // <p>${datas}</p>
      // </li>`
   }

   //$ul.append($li);

   console.log("Dias: " + dias + "\nQuantidade de dias: " + dias.length);
   //document.getElementById("demo").innerHTML = datas;




   exibeFolgas(datas);

}

function atualizaData() {
   dataInicial = document.getElementById("dataInicial").value;
   dataFinal = document.getElementById("dataFinal").value;

  // console.log(dataInicial, dataFinal);

   // diaInicial = parseInt(dataInicial.substring(0, 2));
   // mesInicial = (parseInt(dataInicial.substring(3, 5)) - 1);
   // anoInicial = parseInt(dataInicial.substring(6));

   diaInicial = parseInt(dataInicial.substring(8, 10));
   mesInicial = (parseInt(dataInicial.substring(5, 7)) - 1);
   anoInicial = parseInt(dataInicial.substring(0, 4));
   console.log(diaInicial, mesInicial, anoInicial);

   diaFinal = parseInt(dataFinal.substring(8, 10));
   mesFinal = (parseInt(dataFinal.substring(5, 7)) - 1);
   anoFinal = parseInt(dataFinal.substring(0, 4));
   console.log(diaFinal, mesFinal, anoFinal);

  // console.log("Data Inicial: " + dataInicial + "\nData Final: " + dataFinal);
}


function exibeFolgas(datas) {

   //    console.log("datas "+ datas.length);

   //   for (let i=0; i<datas.length; i++){
   //    document.getElementById("demo").innerHTML = `${datas[i]}` ;
   //   }
   // const $ul = $(".uldata");
   // const $li = `<li>
   // <p></p>
   // </li>`

   //console.log("TCL: adicionaItem -> datas", datas);


   for (let i = 0; i < datas.length; i++) {

      var elementoFilho = document.createElement("li");

      //criando o texto para inserir no li
      var textoDoFilho = document.createTextNode(datas[i]);

      //inserindo texto ao elemento li
      elementoFilho.appendChild(textoDoFilho);
      //inserindo o li ao elemento ul
      elementoLista.appendChild(elementoFilho);
   }


}
function resetLista() {
   //  elementoLista.removeChild('li');
   //   var lista = document.getElementsByTagName('ul')[0];
   //  var itens = elementoLista.getElementsByTagName('li');

   // // // Removendo determinado elemento
   //  elementoLista.removeChild(itens)
   var elemento = document.getElementById("uldata");
   while (elemento.firstChild) {
      elemento.removeChild(elemento.firstChild);
   }

}

