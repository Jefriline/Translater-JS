import { dictionarys } from "./dictionary.js";

const showAll = (dictionary) => {
  const allWordsSection = document.getElementById("allWords");
  allWordsSection.innerHTML = ""; 

  const table = createTableWithWords(dictionary, null);
  allWordsSection.appendChild(table);
};

const renderCategory = (dictionary) => {
  const selectCategory = document.getElementById("orderByCategory");
  for (const key in dictionary.categories) {
    const category = document.createElement("option");
    category.value = key;
    category.textContent = key;
    category.classList.add("optionCategories");
    selectCategory.appendChild(category);
  }

  selectCategory.addEventListener("change", (event) => {
    const selectedCategory = event.target.value;
    showCategory(dictionary, selectedCategory);
  });
};

const createTableWithWords = (dictionary, category, sortKey = "english", sortOrder = "asc") => {
  let words = [];

  if (category && dictionary.categories[category]) {
    words = [...dictionary.categories[category]];
  } else {
    for (const cat in dictionary.categories) {
      words = words.concat(dictionary.categories[cat]);
    }
  }

  
  words.sort((a, b) => {
    if (sortOrder === "asc") {
      if (a[sortKey] < b[sortKey]) return -1;
      if (a[sortKey] > b[sortKey]) return 1;
    } else if (sortOrder === "desc") {
      if (a[sortKey] < b[sortKey]) return 1;
      if (a[sortKey] > b[sortKey]) return -1;
    }
    return 0; 
  });
  


  const table = document.createElement("table");
  table.classList.add("words-table");

  const headerRow = document.createElement("tr");
  headerRow.innerHTML = `
    <th>ID</th>
    <th>English</th>
    <th>Spanish</th>
    <th>Example</th>
    <th>Category</th>
  `;
  table.appendChild(headerRow);

  words.forEach((word) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${word.id}</td>
      <td>${word.english}</td>
      <td>${word.spanish}</td>
      <td>${word.example}</td>
      <td>${category || "All"}</td>
    `;
    table.appendChild(row);
  });

  return table;
};

const showCategory = (dictionary, category, sortKey = "english", sortOrder = "asc") => {
  const allWordsSection = document.getElementById("allWords");
  allWordsSection.innerHTML = "";

  const table = createTableWithWords(dictionary, category, sortKey, sortOrder);
  allWordsSection.appendChild(table);
};

const setupSortSelect = (dictionary) => {
  const sortSelect = document.getElementById("orderByAlphabet");
  const allWordsSection = document.getElementById("allWords");

  sortSelect.addEventListener("change", () => {
    const selectedCategory = document.getElementById("orderByCategory").value;
    const [sortKey, sortOrder] = sortSelect.value.split("-");

    allWordsSection.innerHTML = ""; 
    const table = createTableWithWords(dictionary, selectedCategory, sortKey, sortOrder);
    allWordsSection.appendChild(table);
  });
};


showAll(dictionarys);
renderCategory(dictionarys);
setupSortSelect(dictionarys);
