import { dictionarys } from "./dictionary.js";


const showAll = (dictionary) => {
  const allWordsSection = document.getElementById("allWords");

  for (const category in dictionary.categories) {
    const categoryTitle = document.createElement("h2");
    categoryTitle.textContent = `Category: ${category}`;
    categoryTitle.classList.add("category-title");
    allWordsSection.appendChild(categoryTitle);

    const table = document.createElement("table");
    table.classList.add("words-table");

    const headerRow = document.createElement("tr");
    headerRow.innerHTML = `
      <th>ID</th>
      <th>English</th>
      <th>Spanish</th>
      <th>Example</th>
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

const renderCategory = (dictionary) => {
  const selectCategory = document.getElementById('orderByCategory');
  for (const key in dictionary.categories) {
    const category = document.createElement("option");
    category.value = key;
    category.textContent = key;
    category.classList.add = "optionCategories"
    selectCategory.appendChild(category);
  }
}

const orderByCategory = (category, dictionarys) 
renderCategory(dictionarys);
  
showAll(dictionarys);


//Search

