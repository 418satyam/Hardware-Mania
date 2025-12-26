function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tabs button').forEach(b => b.classList.remove('active'));

  document.getElementById(id).classList.add('active');
  event.target.classList.add('active');
}

// Load results
fetch("result.json")
  .then(r => r.json())
  .then(data => {
    const tbody = document.getElementById("resultList");
    tbody.innerHTML = "";

    if (!data.length) {
      tbody.innerHTML = `<tr><td colspan="2">Results coming soon</td></tr>`;
      return;
    }

    data.forEach(s => {
      tbody.innerHTML += `<tr><td>${s.name}</td><td>${s.college}</td></tr>`;
    });
  });
