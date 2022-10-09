let inputs = Array.from(document.querySelectorAll("input"));
let semillaInputMixto = document.querySelector(".semillaMixto");
let parameterAInputMixto = document.querySelector(".parameterAMixto");
let parameterCInput = document.querySelector(".parameterC");
let parameterMInputMixto = document.querySelector(".parameterMixto");
let semillaInputMulti = document.querySelector(".semillaMulti");
let parameterAInputMulti = document.querySelector(".parameterAMulti");
let parameterMInputMulti = document.querySelector(".parameterMulti");
let subtotal;
let residuo;
let numAleatorio;
let x;
const calcularMixto = document.querySelector("#calcular-mixto");
const calcularMulti = document.querySelector("#calcular-multi");
let formulaMixto = document.querySelector(".formula-mixto");
let formulaMulti = document.querySelector(".formula-multi");
let loginBoxMixto = document.querySelector("#login-boxMixto");
let loginBoxMulti = document.querySelector("#login-boxMulti");
const tableMulti = document.querySelector("#table-multi");
const tableMixto = document.querySelector("#table-mixto");
const buttonMulti = document.querySelector(".button-multi");
const buttonMixto = document.querySelector(".button-mixto");
const containerMulti = document.querySelector(".container-multi");
const containerMixto = document.querySelector(".container-mixto");
const numAleatorioArray = [];

function createRowTitles(cTitle) {
    const filaTitle = document.createElement("tr");
    const nTitle = document.createElement("th");
    const xTitle = document.createElement("th");
    const aTitle = document.createElement("th");
    const mTitle = document.createElement("th");
    const subTotalTitle = document.createElement("th");
    const residuoTitle = document.createElement("th");
    const aleatorioTitle = document.createElement("th");

    nTitle.textContent = "N°";
    xTitle.textContent = "x";
    aTitle.textContent = "a";
    mTitle.textContent = "m";

    subTotalTitle.textContent = "Subtotal";
    residuoTitle.textContent = "Residuo";
    aleatorioTitle.textContent = "Aleatorio";

    filaTitle.append(nTitle);
    filaTitle.append(xTitle);
    filaTitle.append(aTitle);
    if (cTitle != null) {
        filaTitle.append(cTitle);
    }
    filaTitle.append(mTitle);
    filaTitle.append(subTotalTitle);
    filaTitle.append(residuoTitle);
    filaTitle.append(aleatorioTitle);
    cTitle != null ? tableMixto.append(filaTitle) : tableMulti.append(filaTitle);

}

function createRows(semilla, i, a, c, m, cIter) {
    const fila = document.createElement("tr");
    const iter = document.createElement("td");
    const xIter = document.createElement("td");
    const aIter = document.createElement("td");
    const mIter = document.createElement("td");
    const subTotalIter = document.createElement("td");
    const residuoIter = document.createElement("td");
    const numAleatorioIter = document.createElement("td");
    iter.textContent = i;
    aIter.textContent = a;
    mIter.textContent = m;
    if (c > 0) {
        if (i == 0) {
            xIter.textContent = semilla;
            x = semilla;
            subtotal = (a * semilla) + c;
        }
        else {
            x = residuo;
            xIter.textContent = x;
            subtotal = (a * x) + c;
        }
    }
    else {
        if (i == 0) {
            xIter.textContent = semilla;
            x = semilla;
            subtotal = (a * semilla);
        }
        else {
            x = residuo;
            xIter.textContent = x;
            subtotal = (a * x);
        }
    }

    residuo = subtotal % m;
    numAleatorio = residuo / m;
    numAleatorioArray.push(numAleatorio);
    subTotalIter.textContent = subtotal;
    residuoIter.textContent = residuo;
    numAleatorioIter.textContent = numAleatorio;
    fila.append(iter);
    fila.append(xIter);
    fila.append(aIter);
    if (c > 0) {
        fila.append(cIter);
    }
    fila.append(mIter);
    fila.append(subTotalIter);
    fila.append(residuoIter);
    fila.append(numAleatorioIter);
    if (c > 0){
        tableMixto.append(fila);
    }
    else{
        tableMulti.append(fila)
    }
}

calcularMixto.addEventListener("click", generarAleatorioMixto);

function generarAleatorioMixto(e) {
    let semilla = parseInt(semillaInputMixto.value);
    let a = parseInt(parameterAInputMixto.value);
    let c = parseInt(parameterCInput.value);
    let m = parseInt(parameterMInputMixto.value);
    if (semilla > 0 && a > 0 && c > 0 && m > semilla && m > a && m > c) {
        containerMixto.style.display = "block";
        formulaMixto.style.display = "none";
        loginBoxMixto.style.display = "none";
        const cTitle = document.createElement("th");
        cTitle.textContent = "c";
        createRowTitles(cTitle);
        for (let i = 0; i < m; i++) {
            const cIter = document.createElement("td");
            cIter.textContent = c;
            createRows(semilla, i, a, c, m, cIter);
        }
    }
    numAleatorioArray.forEach(numAleatorio => console.log(numAleatorio));
}

function generarAleatorioMulti(e) {
    let semilla = parseInt(semillaInputMulti.value);
    let a = parseInt(parameterAInputMulti.value);
    let m = parseInt(parameterMInputMulti.value);
    containerMulti.style.display = "block";
    formulaMulti.style.display = "none";
    loginBoxMulti.style.display = "none";
    createRowTitles(null);
    for (let i = 0; i < m / 4; i++) {
        createRows(semilla, i, a, 0, m, null);
    }
}

function generarNuevosNumerosMixto() {
    tableMixto.replaceChildren();
    containerMixto.style.display = "none";
    formulaMixto.style.display = "flex";
    loginBoxMixto.style.display = "flex";
}

function generarNuevosNumerosMulti() {
    tableMulti.replaceChildren();
    containerMulti.style.display = "none";
    formulaMulti.style.display = "flex";
    loginBoxMulti.style.display = "flex";
}


calcularMulti.addEventListener("click", generarAleatorioMulti);
buttonMixto.addEventListener("click", generarNuevosNumerosMixto);
buttonMulti.addEventListener("click", generarNuevosNumerosMulti);


