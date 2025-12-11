const channels = [
  { name: "TEST TG", funnel: "Входящие заявки", status: "работает" },
  { name: "VldkTG", funnel: "Входящие заявки", status: "работает" },
  { name: "Новый канал", funnel: "Нет данных", status: "остановлен" },
  { name: "Alyona", funnel: "Входящие заявки", status: "работает" },
  { name: "Новый канал", funnel: "Нет данных", status: "отсканируйте QR" },
];

const channelTable = document.getElementById("channelTable");

function renderChannels() {
  channelTable.innerHTML = "";
  channels.forEach((ch) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
          <td data-label="Название канала"><img src="assets/avatar.svg" alt="avatar">${ch.name}</td>
          <td data-label="Воронка">${ch.funnel}</td>
          <td data-label="Статус">${ch.status}</td>
        `;
    channelTable.appendChild(tr);
  });
}

renderChannels();
