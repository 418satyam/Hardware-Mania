function goToPage(index) {
  const pages = document.getElementById("pages");
  const buttons = document.querySelectorAll(".tabs button");

  pages.style.transform = `translateX(-${index * 100}vw)`;

  buttons.forEach(btn => btn.classList.remove("active"));
  buttons[index].classList.add("active");
}

// Load results
fetch("result.json")
  .then(res => res.json())
  .then(data => {
    const tbody = document.getElementById("resultList");
    tbody.innerHTML = "";

    if (!data.students || data.students.length === 0) {
      tbody.innerHTML = `<tr><td colspan="2">Coming Soon</td></tr>`;
      return;
    }

    data.students.forEach(s => {
      const row = document.createElement("tr");
      row.innerHTML = `<td>${s.name}</td><td>${s.college}</td>`;
      tbody.appendChild(row);
    });
  });
