const formVC = document.querySelector('#valide_clues');
const formIC = document.querySelector('#invalide_clues');
const table = document.querySelector('table');

let trheader = document.createElement('tr');
    table.appendChild(trheader);

    let thGhost = document.createElement('th');
    thGhost.textContent = 'Ghost';
    trheader.appendChild(thGhost);

    let thStrength = document.createElement('th');
    thStrength.textContent = 'Strength';
    trheader.appendChild(thStrength);

    let thWeakness = document.createElement('th');
    thWeakness.textContent = 'Weakness';
    trheader.appendChild(thWeakness);

async function init() {

    labelVC1 = createLabel("valide_clue_1");
    formVC.appendChild(labelVC1);
    selectVC1 = createSelect("v_clue_1", "valide_clue_1");
    formVC.appendChild(selectVC1);
    labelVC2 = createLabel("valide_clue_2");
    formVC.appendChild(labelVC2);
    selectVC2 = createSelect("v_clue_2", "valide_clue_2");
    formVC.appendChild(selectVC2);
    labelVC3 = createLabel("valide_clue_3");
    formVC.appendChild(labelVC3);
    selectVC3 = createSelect("v_clue_3", "valide_clue_3");
    formVC.appendChild(selectVC3);
    labelIC1 = createLabel("invalide_clue_1");
    formIC.appendChild(labelIC1);
    selectIC1 = createSelect("i_clue_1", "invalide_clue_1");
    formIC.appendChild(selectIC1);
    labelIC2 = createLabel("invalide_clue_2");
    formIC.appendChild(labelIC2);
    selectIC2 = createSelect("i_clue_2", "invalide_clue_2");
    formIC.appendChild(selectIC2);
    labelIC3 = createLabel("invalide_clue_3");
    formIC.appendChild(labelIC3);
    selectIC3 = createSelect("i_clue_3", "invalide_clue_3");
    formIC.appendChild(selectIC3);
    
    const datas = await getDatas();
    console.log("🚀 ~ file: newscript.js ~ line 26 ~ init ~ datas", datas)

}

async function getDatas() {
    return fetch('./datas.json').then(response => response.json())
}

function createLabel(forAttr) {
    let label = document.createElement('label');
    label.setAttribute('for', forAttr);
    return label
}

function createSelect(nameAttr, idAttr) {
    let select = document.createElement('select');
    select.setAttribute('name', nameAttr);
    select.setAttribute('id', idAttr);
    return select
}

function createDefaultOpt() {
    let defaultOpt = document.createElement('option');
    defaultOpt.textContent = '- Select a clue';
}

function createOption(datas) {
    let option = document.createElement('option');
    option.setAttribute('value', datas);
    option.textContent = datas;
}

function createGhostLine(datas){
    let tr = document.createElement('tr');
    tr.setAttribute('id', datas);

    let tdType = document.createElement('td');
    tdType.setAttribute('name', 'type');
    tdType.textContent = datas;

    let tdStrength = document.createElement('td');
    tdStrength.setAttribute('name', 'strength');
    tdStrength.textContent = datas;

    let tdWeakness = document.createElement('td');
    tdWeakness.setAttribute('name', 'weakness');
    tdWeakness.textContent = datas;
}

init();