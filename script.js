const formVC = document.querySelector('#valide_clues');
const formIC = document.querySelector('#invalide_clues');

fetch('./datas.json') // pas de ; car arrête l'instruction
    .then(response => response.json()) // pas de ; car arrête l'instruction
    .then(datas => {
        console.log("🚀 ~ file: script.js ~ line 6 ~ datas", datas)
        
            let labelVC1 = document.createElement('label');
            labelVC1.setAttribute('for', 'valide_clue_1');
            formVC.appendChild(labelVC1);

            let selectVC1 = document.createElement('select');
            selectVC1.setAttribute('name', 'v_clue_1');
            selectVC1.setAttribute('id', 'valide_clue_1');
            formVC.appendChild(selectVC1);

            let labelVC2 = document.createElement('label');
            labelVC2.setAttribute('for', 'valide_clue_2');
            formVC.appendChild(labelVC2);
            
            let selectVC2 = document.createElement('select');
            selectVC2.setAttribute('name', 'v_clue_2');
            selectVC2.setAttribute('id', 'valide_clue_2');
            formVC.appendChild(selectVC2);

            let labelVC3 = document.createElement('label');
            labelVC3.setAttribute('for', 'valide_clue_3');
            formVC.appendChild(labelVC3);

            let selectVC3 = document.createElement('select');
            selectVC3.setAttribute('name', 'v_clue_3');
            selectVC3.setAttribute('id', 'valide_clue_3');
            formVC.appendChild(selectVC3);

            let labelIC1 = document.createElement('label');
            labelIC1.setAttribute('for', 'invalide_clue_1');
            formIC.appendChild(labelIC1);

            let selectIC1 = document.createElement('select');
            selectIC1.setAttribute('name', 'i_clue_1');
            selectIC1.setAttribute('id', 'invalide_clue_1');
            formIC.appendChild(selectIC1);

            let labelIC2 = document.createElement('label');
            labelIC2.setAttribute('for', 'invalide_clue_2');
            formIC.appendChild(labelIC2);

            let selectIC2 = document.createElement('select');
            selectIC2.setAttribute('name', 'i_clue_2');
            selectIC2.setAttribute('id', 'invalide_clue_2');
            formIC.appendChild(selectIC2);

            let labelIC3 = document.createElement('label');
            labelIC3.setAttribute('for', 'invalide_clue_3');
            formIC.appendChild(labelIC3);

            let selectIC3 = document.createElement('select');
            selectIC3.setAttribute('name', 'i_clue_3');
            selectIC3.setAttribute('id', 'invalide_clue_3');
            formIC.appendChild(selectIC3);

            const selects = document.querySelectorAll('select');
            
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
                    
    }) // pas de ; car arrête l'instruction
    .catch(error => {
        console.log('There was an error!', error);
    });
