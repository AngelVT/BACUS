const searchForm = document.getElementById('text_search');
const specificSearchForm = document.getElementById('specific_search');

const resultsTable = document.getElementById('results');

searchForm.addEventListener('submit', event => {
    event.preventDefault();

    let formData = Object.fromEntries(new FormData(searchForm));

    searchText(formData.search);
});

specificSearchForm.addEventListener('submit', event => {
    event.preventDefault();

    let formData = Object.fromEntries(new FormData(specificSearchForm));

    console.log(formData)

    search(formData.parameter, formData.value);
});

async function searchText(value) {
    const res = await fetch(`/api/bacus/search/${value}`);

    const response = await res.json();

    if (!response.results) {
        alert(response.msg);
        return;
    }

    resultsTable.innerHTML = '';
    const normalizedValue = normalizeText(value);

    for (const result of response.results) {
        let row = document.createElement('tr');
        for (const key in result) {
            let cell = document.createElement('td');
            if(key == 'general_use' ||
                key == 'specific_use' ||
                key == 'activity_businessLine' ||
                key == 'activity_businessLine'
            ) {
                let text = result[key];
                let normalizedText = normalizeText(text);
                if (normalizedText.includes(normalizedValue) && value.trim() !== "") {
                    const regex = new RegExp(value, "gi");
                    cell.innerHTML = text.replace(regex, match => `<span class="highlight">${match}</span>`);
                } else {
                    cell.innerText = text;
                }
            } else { 
                cell.innerText = result[key];
            }

            if (result[key] == "P") {
                cell.setAttribute('class', 'result allowed');
                row.appendChild(cell);
                continue;
            }

            if (result[key] == "O") {
                cell.setAttribute('class', 'result conditioned');
                row.appendChild(cell);
                continue;
            }

            if (result[key] == "X") {
                cell.setAttribute('class', 'result forbidden');
                row.appendChild(cell);
                continue;
            }

            if (result[key] == "NA") {
                cell.setAttribute('class', 'result not-aplicable');
                row.appendChild(cell);
                continue;
            }

            if (result[key].length > 2) {
                cell.setAttribute('class', 'result regular');
                row.appendChild(cell);
                continue;
            }
            
            cell.setAttribute('class', 'result neutral');
            row.appendChild(cell);
        }
        resultsTable.appendChild(row);
    }
}

async function search(parameter, value) {
    const res = await fetch(`/api/bacus/search/${value}/in/${parameter}`);

    const response = await res.json();

    if (!response.results) {
        alert(response.msg);
        return;
    }

    resultsTable.innerHTML = '';
    const normalizedValue = normalizeText(value);

    for (const result of response.results) {
        let row = document.createElement('tr');
        for (const key in result) {
            let cell = document.createElement('td');
            if(
                key == parameter && 
                (parameter == 'general_use' ||
                    parameter == 'specific_use' ||
                    parameter == 'activity_businessLine' ||
                    parameter == 'activity_businessLine')
                ) 
            {
                let text = result[key];
                let normalizedText = normalizeText(text);
                if (normalizedText.includes(normalizedValue) && value.trim() !== "") {
                    const regex = new RegExp(value, "gi");
                    cell.innerHTML = text.replace(regex, match => `<span class="highlight">${match}</span>`);
                } else {
                    cell.innerText = text;
                }
            } else { 
                cell.innerText = result[key];
            }

            if (result[key] == "P") {
                cell.setAttribute('class', 'result allowed');
                row.appendChild(cell);
                continue;
            }

            if (result[key] == "O") {
                cell.setAttribute('class', 'result conditioned');
                row.appendChild(cell);
                continue;
            }

            if (result[key] == "X") {
                cell.setAttribute('class', 'result forbidden');
                row.appendChild(cell);
                continue;
            }

            if (result[key] == "NA") {
                cell.setAttribute('class', 'result not-aplicable');
                row.appendChild(cell);
                continue;
            }

            if (result[key].length > 2) {
                cell.setAttribute('class', 'result regular');
                row.appendChild(cell);
                continue;
            }

            cell.setAttribute('class', 'result neutral');
            row.appendChild(cell);
        }
        resultsTable.appendChild(row);
    }
}

function normalizeText(text) {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}