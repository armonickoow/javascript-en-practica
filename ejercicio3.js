const resultado = document.querySelector(".resultado");
const inputValor1 = document.querySelector("#valor1");
const inputValor2 = document.querySelector("#valor2");
const btnSumar = document.querySelector("#btn-sumar");
const btnRestar = document.querySelector("#btn-restar");

btnSumar.addEventListener("click", () => {
    const { value: numero1 } = inputValor1;
    const { value: numero2 } = inputValor2;
    const num1 = Number(numero1);
    const num2 = Number(numero2);

    let sumaResultado = num1 + num2;

    resultado.innerHTML = `${sumaResultado}`;
    console.log(sumaResultado);
});

btnRestar.addEventListener("click", () => {
    const { value: numero1 } = inputValor1;
    const { value: numero2 } = inputValor2;
    const num1 = Number(numero1);
    const num2 = Number(numero2);

    let restaResultado = num1 - num2;

    resultado.innerHTML = `${restaResultado < 0 ? 0 : restaResultado}`;
    console.log(restaResultado);
});

function verificarResultado(n) {
    if (n < 0) return 0;
}