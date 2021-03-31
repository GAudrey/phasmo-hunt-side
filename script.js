const formVC = document.querySelector('#valide_clues');

    // VALIDE CLUES - FIRST CLUE
    let labelVC1 = document.createElement('label');
    labelVC1.setAttribute('for', 'valide_clue_1');
    formVC.appendChild(labelVC1);

    let selectVC1 = document.createElement('select');
    selectVC1.setAttribute('name', 'v_clue_1');
    selectVC1.setAttribute('id', 'valide_clue_1');
    formVC.appendChild(selectVC1);

    // VALIDE CLUES - SECOND CLUE
    let labelVC2 = document.createElement('label');
    labelVC2.setAttribute('for', 'valide_clue_2');
    formVC.appendChild(labelVC2);
            
    let selectVC2 = document.createElement('select');
    selectVC2.setAttribute('name', 'v_clue_2');
    selectVC2.setAttribute('id', 'valide_clue_2');
    formVC.appendChild(selectVC2);

    // VALIDE CLUES - THIRD CLUE
    let labelVC3 = document.createElement('label');
    labelVC3.setAttribute('for', 'valide_clue_3');
    formVC.appendChild(labelVC3);

    let selectVC3 = document.createElement('select');
    selectVC3.setAttribute('name', 'v_clue_3');
    selectVC3.setAttribute('id', 'valide_clue_3');
    formVC.appendChild(selectVC3);

const formIC = document.querySelector('#invalide_clues');

    // INVALIDE CLUES - FIRST CLUE            
    let labelIC1 = document.createElement('label');
    labelIC1.setAttribute('for', 'invalide_clue_1');
    formIC.appendChild(labelIC1);

    let selectIC1 = document.createElement('select');
    selectIC1.setAttribute('name', 'i_clue_1');
    selectIC1.setAttribute('id', 'invalide_clue_1');
    formIC.appendChild(selectIC1);

    // INVALIDE CLUES - SECOND CLUE
    let labelIC2 = document.createElement('label');
    labelIC2.setAttribute('for', 'invalide_clue_2');
    formIC.appendChild(labelIC2);

    let selectIC2 = document.createElement('select');
    selectIC2.setAttribute('name', 'i_clue_2');
    selectIC2.setAttribute('id', 'invalide_clue_2');
    formIC.appendChild(selectIC2);

    // INVALIDE CLUES - THIRD CLUE
    let labelIC3 = document.createElement('label');
    labelIC3.setAttribute('for', 'invalide_clue_3');
    formIC.appendChild(labelIC3);

    let selectIC3 = document.createElement('select');
    selectIC3.setAttribute('name', 'i_clue_3');
    selectIC3.setAttribute('id', 'invalide_clue_3');
    formIC.appendChild(selectIC3);

    const selects = document.querySelectorAll('select');

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


fetch('./datas.json') // pas de ; car arrête l'instruction
    .then(response => response.json()) // pas de ; car arrête l'instruction
    .then(datas => {
        
        selects.forEach(select => {
            let option = document.createElement('option');
            option.textContent = '- Select a clue';
            select.appendChild(option);

            datas.allclues.forEach(clue => {
                let options = document.createElement('option');
                options.setAttribute('value', clue.id_clue);
                options.textContent = clue.clues;
                select.appendChild(options);
            })
        })

        datas.ghosts.forEach(ghost => {
            let tr = document.createElement('tr');
            tr.setAttribute('id', ghost.id_ghost);
            table.appendChild(tr);

            let tdType = document.createElement('td');
            tdType.setAttribute('name', 'type');
            tdType.textContent = ghost.types;
            tr.appendChild(tdType);

            let tdStrength = document.createElement('td');
            tdStrength.setAttribute('name', 'strength');
            tdStrength.textContent = ghost.strength;
            tr.appendChild(tdStrength);

            let tdWeakness = document.createElement('td');
            tdWeakness.setAttribute('name', 'weakness');
            tdWeakness.textContent = ghost.weakness;
            tr.appendChild(tdWeakness);
        })
       
    }) // pas de ; car arrête l'instruction
    .catch(error => {
        console.log('There was an error!', error);
    });