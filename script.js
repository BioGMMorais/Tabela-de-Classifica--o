//          chave.  valor.
//var rafa = {nome:"Rafa", vitorias:2, empates:1, derrotas:1, pontos:0}
//var paulo = {nome:"Paulo", vitorias:1, empates:1, derrotas:2, pontos:0}

function calculaPontos(jogador) {
  var pontos = (jogador.vitorias * 3) + jogador.empates
  return pontos
}

//rafa.pontos = calculaPontos(rafa)
//paulo.pontos = calculaPontos(paulo)

//var jogadores = [rafa, paulo]
var jogadores = []

function exibeJogadoresNaTela(jogadores) {
  var elemento = ""
  for (var i = 0; i < jogadores.length; i++) {
    elemento += "<tr><td>"+ jogadores[i].nome +"</td>"
    elemento += "<td>"+ jogadores[i].vitorias +"</td>"
    elemento += "<td>"+ jogadores[i].empates +"</td>"
    elemento += "<td>"+ jogadores[i].derrotas +"</td>"
    elemento += "<td>"+ jogadores[i].pontos +"</td>"
    elemento += "<td><button onClick='adicionarVitoria("+ i +")'>Vitória</button></td>"
    elemento += "<td><button onClick='adicionarEmpate("+ i +")'>Empate</button></td>"
    elemento += "<td><button onClick='adicionarDerrota("+ i +")'>Derrota</button></td>"
    elemento += "<td><button onClick='zerarDados("+ i +")'>zerar</button></td>"
    elemento += "</tr>"
  }

  var tabelaJogadores = document.getElementById("tabelaJogadores")
  tabelaJogadores.innerHTML = elemento
}

exibeJogadoresNaTela(jogadores)

function adicionarVitoria(i) {
  var jogador = jogadores[i]
  jogador.vitorias++
  jogador.pontos = calculaPontos(jogador)
  exibeJogadoresNaTela(jogadores)
}

function adicionarEmpate(i) {
  var jogador = jogadores[i]
  jogador.empates++
  jogador.pontos = calculaPontos(jogador)
  exibeJogadoresNaTela(jogadores)
}

function adicionarDerrota(i) {
  var jogador = jogadores[i]
  jogador.derrotas++
  exibeJogadoresNaTela(jogadores)
}

function zerarDados(i) {
  console.log("clicou")
  jogadores[i].vitorias = 0,
  jogadores[i].empates = 0,
  jogadores[i].derrotas = 0,
  jogadores[i].pontos = 0
  exibeJogadoresNaTela(jogadores)
}

function adicionarJogador() {
  var nome = document.getElementById("novoJogador")
  jogadores.push({
    nome: nome.value,
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
  })
  nome.value = ""
  exibeJogadoresNaTela(jogadores)
}

function excluirJogador() {
  // console.log("clicou")
  var nome = document.getElementById("novoJogador").value 
  if (nome =="") {
    alert("Digite o nome do jogador que deseja excluir da tabela")
  } else {
    var player = jogadores.find((id) => id.nome === nome)
    if (player == undefined) {
      alert("Esse jogador não existe!")
    } else {
      indice = jogadores.indexOf(player)
      jogadores.splice(indice, 1)
    }
  }
  nome.value = ""
  exibeJogadoresNaTela(jogadores)
}

// function limparTabela(i) {
//   console.log("clicou")
//     jogadores[i].vitorias = 0;
//     jogadores[i].empates = 0;
//     jogadores[i].derrotas = 0;
//     calculaPontos(jogadores[i]);
//   ExibeJogadores(jogadores);
// }