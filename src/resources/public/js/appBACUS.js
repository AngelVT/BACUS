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
            let text = result[key];
            if (key == 'general_use' ||
                key == 'specific_use' ||
                key == 'activity_businessLine' ||
                key == 'magnitude') {
                let normalizedText = normalizeText(text);
                if (normalizedText.includes(normalizedValue) && normalizedValue.trim() !== "") {
                    cell.innerHTML = highlightText(normalizedText, text, normalizedValue);
                } else {
                    cell.innerText = text;
                }
            } else {
                cell.innerText = text;
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

            if (result[key] == "C") {
                cell.setAttribute('class', 'result conditional');
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
            let text = result[key];
            if (key == parameter &&
                (parameter == 'general_use' ||
                    parameter == 'specific_use' ||
                    parameter == 'activity_businessLine' ||
                    parameter == 'magnitude')) {
                let normalizedText = normalizeText(text);
                if (normalizedText.includes(normalizedValue) && normalizedValue.trim() !== "") {
                    cell.innerHTML = highlightText(normalizedText, text, normalizedValue);
                } else {
                    cell.innerText = text;
                }
            } else {
                cell.innerText = text;
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

            if (result[key] == "C") {
                cell.setAttribute('class', 'result conditional');
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
    return text
        .replace(/ñ/g, "-")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/-/g, "ñ")
        .toLowerCase();
}

function highlightText(normalized, original, searched) {
    const start = normalized.indexOf(searched);

    if (start === -1) return original;

    const end = start + searched.length;

    let highlight = original.slice(start, end);

    original = original.replaceAll(highlight, `<span class="highlight">${highlight}</span>`)
    return original;
}