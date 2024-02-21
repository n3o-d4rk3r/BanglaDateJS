function getCurrentBanglaDate() {
  const months = [
    "বৈশাখ", "জ্যৈষ্ঠ", "আষাঢ়", "শ্রাবণ", "ভাদ্র", "আশ্বিন",
    "কার্তিক", "অগ্রহায়ণ", "পৌষ", "মাঘ", "ফাল্গুন", "চৈত্র"
  ];
  const days = [
    "রবিবার", "সোমবার", "মঙ্গলবার", "বুধবার", "বৃহস্পতিবার", "শুক্রবার", "শনিবার"
  ];
  const date = new Date();
  const year = date.getFullYear().toString().replace(/[0-9]/g, char => String.fromCharCode(char.charCodeAt(0) + 2486));
  const month = months[date.getMonth()];
  const day = days[date.getDay()];
  const banglaDate = `${day}, ${date.getDate()} ${month} ${year} বঙ্গাব্দ`;

  return banglaDate;
}

function getCurrentBanglaTime() {
  const date = new Date();
  const hours = date.getHours().toString().replace(/[0-9]/g, char => String.fromCharCode(char.charCodeAt(0) + 2433));
  const minutes = date.getMinutes().toString().replace(/[0-9]/g, char => String.fromCharCode(char.charCodeAt(0) + 2433));
  const seconds = date.getSeconds().toString().replace(/[0-9]/g, char => String.fromCharCode(char.charCodeAt(0) + 2433));
  const banglaTime = `${hours}:${minutes}:${seconds} ঘণ্টা`;

  return banglaTime;
}

function updateDateTime() {
  document.getElementById('banglaDate').textContent = getCurrentBanglaDate();
  document.getElementById('banglaTime').textContent = getCurrentBanglaTime();
}

updateDateTime();
setInterval(updateDateTime, 1000); // Update time every second
