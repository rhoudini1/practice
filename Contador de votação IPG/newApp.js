/* ============
   VARIÁVEIS
============ */

let presbs = []
let diacs = []

/* ============
   ELEMENTOS
============ */

const candidateName = document.getElementById("candidate-name")
const category = document.getElementById("category")
const presbsField = document.getElementById("presbs-field")
const diacsField = document.getElementById("diacs-field")

/* ==========
   CLASSES
========== */

class Candidate {
    constructor(name) {
        this.name = name
        this.votes = 0
        this.category = ""
    }
}

/* ============
    FUNÇÕES
============ */

function newCandidate() {
    let candidate = new Candidate(candidateName.value)

    if (category.value == "presb") {
        candidate.category = "presbitero"
        presbs.push(candidate)
        renderPresbs()

    } else {
        candidate.category = "diacono"
        diacs.push(candidate)
        renderDiacs()
    }

    candidateName.value = null
}


function renderPresbs() {
    let presbsRendered = ""
    for (let i=0; i < presbs.length; i++) {
        presbsRendered += `<div>
            <input type="checkbox" name="candidato" id="candidatoA">
            <label for="${presbs[i]}">${presbs[i].name}</label>
            <button onclick="deleteCandidate()">Excluir</button>
        </div>`
    }
    presbsField.innerHTML = presbsRendered

    // ADICIONAR RENDER DO RESULTADO
}


function renderDiacs() {
    let diacsRendered = ""
    for (let i=0; i < diacs.length; i++) {
        diacsRendered += `<div>
            <input type="checkbox" name="candidato" id="candidatoA">
            <label for="${diacs[i]}">${diacs[i].name}</label>
            <button onclick="deleteCandidate()">Excluir</button>
        </div>`
    }
    diacsField.innerHTML = diacsRendered

    // ADICIONAR RENDER DO RESULTADO
}

function saveVote() {
    //captar botões

    // fulano.votes++

    // checkboxes.value = null
}

function deleteCandidate() {
    // apagar do array


    //aplicar filter para array ficar bonitinho

    // renderPresbs() ou renderDiacs()

    console.log("candidato excluido")
}