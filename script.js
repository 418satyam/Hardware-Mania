// TAB SWITCHING
const buttons = document.querySelectorAll('.bottom-nav button');
const pages = document.querySelectorAll('.page');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    buttons.forEach(b => b.classList.remove('active'));
    pages.forEach(p => p.classList.remove('active'));

    btn.classList.add('active');
    document.getElementById(btn.dataset.tab).classList.add('active');
  });
});

// RESULTS (JSON READY)
fetch('results.json')
  .then(res => res.json())
  .then(data => {
    if (!data.length) return;

    document.getElementById('resultStatus').classList.add('hidden');
    document.getElementById('resultsTable').classList.remove('hidden');

    const body = document.getElementById('resultsBody');
    data.forEach(r => {
      body.innerHTML += `
        <tr>
          <td>${r.name}</td>
          <td>${r.college}</td>
        </tr>`;
    });
  })
  .catch(() => {
    // safe fallback
  });
