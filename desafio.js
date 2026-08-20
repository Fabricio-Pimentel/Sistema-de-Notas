function calcularMedia(nota1, nota2){
    let conta = ((nota1+nota2)/2)
    return conta
}
function verificarSituacao(media){
    if (media>7)
        return "Aprovado"
    else if (media>=5 && media<=7)
        return "Recuperação"
    else
        return "Reprovado"
}
let nome = "João";
let media = calcularMedia(8, 7);
let situacao = verificarSituacao(media);
let mostrarresultado = (nome, media, situacao)

console.log("Média:", media);
console.log("Situação:", situacao);
console.log("Nome:", nome);
