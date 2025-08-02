function showHearts() {
  const shower = document.querySelector('.heart-shower');
  for (let i = 0; i < 30; i++) {
    let heart = document.createElement('div');
    heart.className = 'heart-float';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.top = Math.random() * 100 + '%';
    heart.innerText = '❤️';
    shower.appendChild(heart);
    setTimeout(() => heart.remove(), 3000);
  }

  const audio = document.getElementById('bgm');
  if (audio.paused) {
    audio.play();
  }
}

const surpriseLines = [
  "You're the reason my world lights up 💖",
  "Every moment with you is special 💫",
  "You make me believe in magic and love ✨",
  "This heart is forever yours ❤️",
  "Happy Birthday to the queen of my life 👑"
];
let currentLine = 0;

function showSurprisePopup() {
  const popup = document.getElementById('popup');
  const text = document.getElementById('popupText');
  popup.style.display = 'block';
  currentLine = 0;
  text.innerText = '';
  revealNextLine(text);
}

function revealNextLine(element) {
  if (currentLine < surpriseLines.length) {
    element.innerText += surpriseLines[currentLine++] + '\n';
    setTimeout(() => revealNextLine(element), 1500);
  }
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}

