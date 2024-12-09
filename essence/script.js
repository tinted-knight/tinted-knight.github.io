const jsonFiles = [
    "json/01.me.01.json",
    "json/02.me.02.json",
    "json/03.me.03.json",
    "json/04.me.04.json",
    "json/05.folli.01.json",
    "json/06.folli.02.json",
    "json/07.folli.03.json",
    "json/08.folli.04.json",
    "json/09.ovu.01.json",
    "json/10.ovu.02.json",
    "json/11.ovu.03.json",
    "json/12.ovu.04.json",
    "json/13.lute.01.json",
    "json/14.lute.02.json",
    "json/15.lute.03.json",
    "json/16.lute.04.json",
];

let currentIndex = 0;

const card = document.getElementById("card");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

function loadJson(index) {
    fetch(jsonFiles[index])
        .then(response => response.json())
        .then(data => {
            displayCard(data, index);
            updateButtons();
        })
        .catch(err => console.error("Error loading JSON:", err));
}

function displayCard(data, index) {
    card.innerHTML = `
        <p><strong>Phase: </strong>${jsonFiles[index]}</p>
        <p><strong>TLDR: </strong>${data.tldr}</p>
        <p><strong>Some fun astro bullshit: </strong>${data.output.astro}</p>
        <p><strong>Me & myself: </strong>${data.output.people}</p>
        <p><strong>People around: </strong>${data.output.me}</p>
        <p><strong>Finance: </strong>${data.output.finance}</p>
        <p><strong>Behaviour: </strong>${data.output.behavior}</p>
        <p><strong>Evening for extrovert: </strong>${data.output.evening_extro}</p>
        <p><strong>Evening for introvert: </strong>${data.output.evening_intro}</p>
        <p><strong>Nyam nyam no restrictions: </strong>${data.output.nutrition_all}</p>
        <p><strong>Nyam nyam vegan: </strong>${data.output.nutrition_vegan}</p>
        <p><strong>Nyam nyam vegetarian: </strong>${data.output.nutrition_vegetarian}</p>
        <p><strong>Sports: </strong>"${data.output.sports}"</p>
        <p><strong>Quote: </strong>"${data.output.quote}"</p>
        <p><strong>Motto: </strong>"${data.output.motto}"</p>
        <p><strong>Goodbye: </strong>${data.output.footer}</p>
    `;
    updateButtons();
}

function updateButtons() {
    prevButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex === jsonFiles.length - 1;
}

prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        loadJson(currentIndex);
    }
});

nextButton.addEventListener("click", () => {
    if (currentIndex < jsonFiles.length - 1) {
        currentIndex++;
        loadJson(currentIndex);
    }
});

// Load the first card initially
loadJson(currentIndex);
