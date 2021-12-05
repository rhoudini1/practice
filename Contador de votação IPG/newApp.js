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
    let presbsRendered = `<legend class="legend">Presbíteros</legend>`
    for (let i=0; i < presbs.length; i++) {
        presbsRendered += `<div>
            <input type="checkbox" name="candidato" id="candidatoA">
            <label for="${presbs[i]}">${presbs[i].name}</label>
            <button type="button" onclick="deletePresb(${i})">Excluir</button>
        </div>`
    }
    presbsField.innerHTML = presbsRendered

    // ADICIONAR RENDER DO RESULTADO
}


function renderDiacs() {
    let diacsRendered = `<legend class="legend">Diáconos</legend>`
    for (let i=0; i < diacs.length; i++) {
        diacsRendered += `<div>
            <input type="checkbox" name="candidato" id="candidatoA">
            <label for="${diacs[i]}">${diacs[i].name}</label>
            <button type="button" onclick="deleteDiac(${i})">Excluir</button>
        </div>`
    }
    diacsField.innerHTML = diacsRendered

    // ADICIONAR RENDER DO RESULTADO
}


function deletePresb(id) {
    // apagar do array com filter para ficar sem vazios
    presbs.splice(id, 1).filter(e => e !== "")
    renderPresbs()
}

function deleteDiac(id) {
    diacs.splice(id, 1).filter(e => e !== "")
    renderDiacs()
}


function saveVote() {
    //captar botões

    // fulano.votes++

    // checkboxes.value = null
}