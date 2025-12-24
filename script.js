function goToPage(index) {
  const pages = document.getElementById("pages");
  const buttons = document.querySelectorAll(".tabs button");

  pages.style.transform = `translateX(-${index * 100}vw)`;
  buttons.forEach(btn => btn.classList.remove("active"));
  buttons[index].classList.add("active");
}

// Load result data
fetch("result.json")
  .then(res => res.json())
  .then(data => {
    const tbody = document.getElementById("resultList");
    tbody.innerHTML = "";

    if (!data.participants || data.participants.length === 0) {
      tbody.innerHTML = `<tr><td colspan="2">Results coming soon</td></tr>`;
      return;
    }

    data.participants.forEach(p => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${p.name}</td>
        <td>${p.college}</td>
      `;
      tbody.appendChild(row);
    });
  })
  .catch(() => {
    document.getElementById("resultList").innerHTML =
      `<tr><td colspan="2">Results coming soon</td></tr>`;
  });
