const buttons = document.querySelectorAll(".tabs button");
const pages = document.querySelectorAll(".page");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    buttons.forEach(b => b.classList.remove("active"));
    pages.forEach(p => p.classList.remove("active"));

    btn.classList.add("active");
    document.getElementById(btn.dataset.page).classList.add("active");
  });
});

// Load results
fetch("result.json")
  .then(res => res.json())
  .then(data => {
    const tbody = document.getElementById("resultBody");
    if (!data.length) return;

    tbody.innerHTML = "";
    data.forEach(item => {
      tbody.innerHTML += `
        <tr>
          <td>${item.name}</td>
          <td>${item.college}</td>
        </tr>
      `;
    });
  });
