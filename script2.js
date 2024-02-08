/*const amom = document.querySelector("#a1");
const alehandro = document.querySelector("div.nome.a2")
const names = [...document.querySelectorAll("div.nome")];
const message = () => {
    alert("Hello world crap");
}

//amom.addEventListener("click", message); // usando função normal
//alehandro.addEventListener("click", () => {alert("Clicou também")}); // usando arrow function


names.map((el) => { // se quiser tratar todas as divs, é necessário dar um spread, percorrer e em seguida adicionar event listener
    el.addEventListener("click", () => {
        el.classList.add("priority");
    })
})


const albuquerque = document.querySelector("#albuq");
albuquerque.addEventListener("click", (evt) => {  // evt é um parâmetro que recebe o evento que acabou de ser executado.
    const element = evt.target; // dentro do evento sendo recebido existem várias características e dentre eles, o .target é o objeto que está envolvido no evento. (A própria div)
    element.innerHTML = "Trollei";
})*/


const botao = document.querySelector("#botao");
const copia = document.querySelector("#copia");
const nomes = [...document.querySelectorAll(".nome")];
let max = 0;



nomes.map((el) =>{
    el.addEventListener("click", () => {
        el.classList.toggle("selecionado");
    });
});

const copy = () => {
    const selecionado = [...document.querySelectorAll(".selecionado")];
    if(max < 4){
        selecionado.map((e) => {
                const clone = e.cloneNode(true);
                document.querySelector("#copia").appendChild(clone);
                clone.classList.remove("selecionado");
                e.classList.remove("selecionado");
                max++;
        })
    }
}
botao.addEventListener("click",copy);

