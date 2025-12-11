const channels = [
  { name: "TEST TG", funnel: "Входящие заявки", status: "работает" },
  { name: "VldkTG", funnel: "Входящие заявки", status: "работает" },
  { name: "Новый канал", funnel: "Нет данных", status: "остановлен" },
  { name: "Alyona", funnel: "Входящие заявки", status: "работает" },
  { name: "Новый канал", funnel: "Нет данных", status: "отсканируйте QR" },
  { name: "Новый канал", funnel: "Нет данных", status: "отсканируйте QR" },
  { name: "Новый канал", funnel: "Нет данных", status: "отсканируйте QR" },
  { name: "Новый канал", funnel: "Нет данных", status: "отсканируйте QR" },
];

const channelTableBody = document.getElementById("channelTableBody");
const modal = document.getElementById("qrModal");
const addChannelBtn = document.getElementById("addChannelBtn");
const closeModalBtn = document.getElementById("closeModalBtn");

const avatarIcon = `
<svg viewBox="0 0 24 24">
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
</svg>`;

function renderChannels() {
  channelTableBody.innerHTML = "";
  
  channels.forEach((ch) => {
    const tr = document.createElement("tr");
    
    const statusClass = ch.status === "отсканируйте QR" ? "status-text qr-action" : "status-text";

    tr.innerHTML = `
      <td data-label="Название канала">
        <div class="avatar-wrapper">
            <div class="avatar">${avatarIcon}</div>
            <span>${ch.name}</span>
        </div>
      </td>
      <td data-label="Воронка">${ch.funnel}</td>
      <td data-label="Статус" class="${statusClass}">${ch.status}</td>
    `;
    
    channelTableBody.appendChild(tr);
  });
}

function openModal() {
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.remove("active");
  document.body.style.overflow = "auto";
}

addChannelBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

document.addEventListener("DOMContentLoaded", renderChannels);