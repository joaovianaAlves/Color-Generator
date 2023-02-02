const colors = ["green","red","yellow","blue"]

const btn = document.getElementById('btn')
const color = document.querySelector(".color");

    //ao clicar no botao aciona a funcao;
btn.addEventListener("click", function () {
    // pegar um numero aleatorio entre 0 e 3
    const randomNumber = getRamdonNum();
    console.log(randomNumber);

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber]
});
    //funcao para pegar um numero aleario
function getRamdonNum(){
    //Math.floor arredonda o numero. Math.random randomiza o numero multiplicado pelo valor do aray no caso 0 - 3
    return Math.floor(Math.random() * colors.length);
}