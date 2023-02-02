const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// #f15025
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

//ao clicar no botao aciona a funcao;
btn.addEventListener("click", function(){
    // essa variavel vai servir para colocar o jogo da velha na frente da sequencia para formar um hex
    let hexColor = '#';
    //esse for server para gerar o hex aleatorio
    for(let i = 0; i < 6; i++){
        hexColor += hex[getRamdonNum()];
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor; 
})
    //funcao para pegar um numero aleario
function getRamdonNum(){
    //Math.floor arredonda o numero. Math.random randomiza o numero multiplicado pelo valor do array.
    return Math.floor(Math.random() * hex.length)
}