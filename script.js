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

/// RESULTS LOADING
fetch('results.json')
  .then(res => {
    if (!res.ok) throw new Error('JSON not found');
    return res.json();
  })
  .then(data => {
    if (!Array.isArray(data) || data.length === 0) return;

    document.getElementById('resultStatus').classList.add('hidden');
    document.getElementById('resultsTable').classList.remove('hidden');

    const body = document.getElementById('resultsBody');
    body.innerHTML = '';

    data.forEach((item, index) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${index + 1}</td>
        <td>${item.name}</td>
        <td>${item.class}</td>
        <td>${item.college}</td>
      `;
      body.appendChild(row);
    });
  })
  .catch(err => {
    console.error('Result load error:', err);
  });
