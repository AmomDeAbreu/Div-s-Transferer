const botao = document.querySelector("#botao");
const copia = document.querySelector("#copia");
const nomes = [...document.querySelectorAll(".nome")];
let side = true;



nomes.map((el) =>{ // When the names are clicked, they got selected
    el.addEventListener("click", () => {
        el.classList.toggle("selecionado");
    });
});

const transfer = () => {
    /**capture and store the selected items on a array */
    const selecionado = [...document.querySelectorAll(".selecionado")];
    selecionado.map((e) => {   
            if(e.classList.contains("m")){ // if tge the selected items that are on the first div, they will change to the second
                document.querySelector("#copia").appendChild(e);
                e.classList.remove("selecionado");
                e.classList.remove("m");
                e.classList.add("c");
            } else {
                document.querySelector("#matriz").appendChild(e);
                e.classList.remove("selecionado");
                e.classList.remove("c");
                e.classList.add("m");

            }
    })
}
botao.addEventListener("click",transfer);

