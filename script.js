const examDate = "20 Feb 2023 8:00 AM";
document.getElementById("exam-date").innerText = examDate;
const input = document.querySelectorAll("input");

function clock() {
  const startDate = new Date(examDate);
  const now = new Date();
  const diff = (startDate - now) / 1000;

  if (diff < 0) return;

  input[0].value = Math.floor(diff / 3600 / 24);
  input[1].value = Math.floor(diff / 3600) % 24;
  input[2].value = Math.floor(diff / 60) % 60;
  input[3].value = Math.floor(diff) % 60;
}

clock();

setInterval(() => {
  clock();
}, 1000);
