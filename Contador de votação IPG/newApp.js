/* ============
   VARIÁVEIS
============ */

let presbs = []
let diacs = []
let totalVotos = 0

/* ============
   ELEMENTOS
============ */

const candidateName = document.getElementById("candidate-name")
const category = document.getElementById("category")
const presbsField = document.getElementById("presbs-field")
const diacsField = document.getElementById("diacs-field")
const presbsResult = document.getElementById("presbs-results")
const diacsResult = document.getElementById("diacs-results")

/* ==========
   CLASSES
========== */

class Candidate {
    constructor(name) {
        this.name = name
        this.votes = 0
        this.category = ""
        this.elect = ""
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
            <input type="checkbox" name="candidato" id="checkPresb${i}">
            <label for="${presbs[i]}">${presbs[i].name}</label>
            <button type="button" onclick="deletePresb(${i})">Excluir</button>
        </div>`
    }
    presbsField.innerHTML = presbsRendered

    // ADICIONAR RENDER DO RESULTADO
    let presbsRenderedResult = `<legend class="legend">Presbíteros</legend>`
    if (totalVotos > 0) {
        for (let i=0; i < presbs.length; i++) {
            presbsRenderedResult += `<div>
            ${presbs[i].name}: ${presbs[i].elect} com ${(presbs[i].votes / totalVotos * 100).toFixed(2)}% dos votos.
            </div>`
    }
    }
    presbsResult.innerHTML = presbsRenderedResult
}


function renderDiacs() {
    let diacsRendered = `<legend class="legend">Diáconos</legend>`
    for (let i=0; i < diacs.length; i++) {
        diacsRendered += `<div>
            <input type="checkbox" name="candidato" id="checkDiac${i}">
            <label for="${diacs[i]}">${diacs[i].name}</label>
            <button type="button" onclick="deleteDiac(${i})">Excluir</button>
        </div>`
    }
    diacsField.innerHTML = diacsRendered

    // ADICIONAR RENDER DO RESULTADO
    let diacsRenderedResult = `<legend class="legend">Diáconos</legend>`
    if (totalVotos > 0) {
        for (let i=0; i < diacs.length; i++) {
            diacsRenderedResult += `<div>
            ${diacs[i].name}: ${diacs[i].elect} com ${(diacs[i].votes / totalVotos * 100).toFixed(2)}% dos votos.
            </div>`
    }
    }
    diacsResult.innerHTML = diacsRenderedResult
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
    totalVotos++
    
    //captar botões presbiteros com fulano.votes++
    for (let i=0; i < presbs.length; i++) {
        document.getElementById(`checkPresb${i}`).checked && presbs[i].votes++
        presbs[i].votes / totalVotos >= 0.5
            ? presbs[i].elect = "Eleito"
            : presbs[i].elect = "Não eleito"
    }

    // captar botoes diaconos
    for (let i=0; i < diacs.length; i++) {
        document.getElementById(`checkDiac${i}`).checked && diacs[i].votes++
        diacs[i].votes / totalVotos >= 0.5
            ? diacs[i].elect = "Eleito"
            : diacs[i].elect = "Não eleito"
    }

    // renderizar total de votos
    const resultadoFinal = document.getElementById('votos-el')
    resultadoFinal.textContent = `${totalVotos}`
    renderPresbs()
    renderDiacs()
}