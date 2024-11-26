import { dictionarys } from "./dictionary.js";


const showAll = (dictionary) => {
  const allWordsSection = document.getElementById("allWords");

  for (const category in dictionary.categories) {
    const categoryTitle = document.createElement("h2");
    categoryTitle.textContent = `Categoría: ${category}`;
    categoryTitle.classList.add("category-title");
    allWordsSection.appendChild(categoryTitle);

    const table = document.createElement("table");
    table.classList.add("words-table");

    const headerRow = document.createElement("tr");
    headerRow.innerHTML = `
      <th>ID</th>
      <th>Inglés</th>
      <th>Español</th>
      <th>Ejemplo</th>
    `;
    table.appendChild(headerRow);

    dictionary.categories[category].forEach((word) => {
      const row = document.createElement("tr");

      row.innerHTML = `
        <td>${word.id}</td>
        <td>${word.english}</td>
        <td>${word.spanish}</td>
        <td>${word.example}</td>
      `;
      table.appendChild(row);
    });

    
    allWordsSection.appendChild(table);
  }
};


showAll(dictionarys);
