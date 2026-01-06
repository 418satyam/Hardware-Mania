/* -------------------------------
   TAB NAVIGATION
-------------------------------- */

const navButtons = document.querySelectorAll(".bottom-nav button");
const pages = document.querySelectorAll(".page");

navButtons.forEach(button => {
  button.addEventListener("click", () => {
    navButtons.forEach(b => b.classList.remove("active"));
    pages.forEach(p => p.classList.remove("active"));

    button.classList.add("active");
    document.getElementById(button.dataset.tab).classList.add("active");
  });
});


/* -------------------------------
   RESULTS HANDLING (JSON BASED)
-------------------------------- */

// Path to your JSON file
const RESULTS_URL = "results.json";

// DOM references
const statusText = document.getElementById("resultStatus");
const tableWrapper = document.getElementById("resultsTable");
const tableBody = document.getElementById("resultsBody");

/**
 * Load results from JSON
 * Expected JSON format:
 * {
 *   "round": 1,
 *   "results": [
 *     { "name": "Student Name", "college": "College Name" }
 *   ]
 * }
 */
async function loadResults() {
  try {
    const response = await fetch(RESULTS_URL);

    // If file exists but empty / unpublished
    if (!response.ok) {
      throw new Error("Results not published");
    }

    const data = await response.json();

    // Validate structure
    if (!data.results || data.results.length === 0) {
      throw new Error("No results yet");
    }

    renderResults(data.results);

  } catch (error) {
    showComingSoon();
  }
}

/* -------------------------------
   RENDER FUNCTIONS
-------------------------------- */

function showComingSoon() {
  statusText.classList.remove("hidden");
  tableWrapper.classList.add("hidden");
}

function renderResults(results) {
  statusText.classList.add("hidden");
  tableWrapper.classList.remove("hidden");
  tableBody.innerHTML = "";

  results.forEach(student => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${student.name}</td>
      <td>${student.college}</td>
    `;
    tableBody.appendChild(row);
  });
}

/* -------------------------------
   AUTO LOAD ON PAGE LOAD
-------------------------------- */

document.addEventListener("DOMContentLoaded", () => {
  loadResults();
});
