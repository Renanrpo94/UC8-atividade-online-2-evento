console.log("Bem vindo ao software de eventos")

let dataAtual = 20211029   //digite a data no padrão AAAAMMDD
let dataEvento = 20211102  //digite a data no padrão AAAAMMDD 
let palestras = ["0- HTML e CSS","1- C# para jogos","2- Banco de Dados MySQL"] // Palestras disponiveis
let orador0 = ["Messi","Neymar"]         // palestrantes do evento 0
let orador1 = ["Bolsonaro","Lula"]       // palestrantes do evento 1
let orador2 = ["Pablo Vittar","Anitta"]  // palestrantes do evento 2
 
if (dataEvento <= dataAtual) {
    console.log("Cadastro não permitido, data inválida")
} else {
    console.log("Data válida, prossiga com o cadastro")
}

let idade = 27 // quantos anos voce tem???

if (idade < 18) {
    console.log("Cadastro proibido para menores de 18 anos de idade")
} else {
   console.log("Idade válida, prossiga com o cadastro") 
}
console.log("Escolha o evento:")
console.log(palestras[0]) // Entre [] escolha o numero da palestra que deseja assitir

let numParticipantes = 5
 //Pessoas cadastradas para a palestra

if (numParticipantes <=100) {
    console.log("Palestra Disponivel, cadastro efetuado")
} else {
    console.log("Sem vagas disponiveis para esta palestra")
}
let numAtualPart = (numParticipantes + 1)
console.log("Numero de particpantes: "+ numAtualPart)
let nomeParticipantes = ["Chimbinha","Joelma","Pedro","Paulo","Romario","Renan"] // Depois do ulitmo nome, digite virgula e seu nome entre aspas

for (let index = 0; index < orador0.length; index++) 
{
    const elementoAtual = orador0[index];
    console.log ("Palestrante: "+ elementoAtual);
}

for (let index = 0; index < nomeParticipantes.length; index++) 
{
    const elementoAtual = nomeParticipantes[index];
    console.log ("Participante: "+ elementoAtual);
}

