document.addEventListener('DOMContentLoaded', function() {
    // Hearts button
    document.getElementById('heartsBtn').addEventListener('click', function() {
        for (let i = 0; i < 50; i++) {
            setTimeout(createHeart, i * 100);
        }
    });

    // Memories button
    document.getElementById('memoriesBtn').addEventListener('click', showMemories);
});

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = (Math.random() * 100 + 100) + 'vh';
    heart.style.width = (Math.random() * 20 + 10) + 'px';
    heart.style.height = heart.style.width;
    
    document.body.appendChild(heart);
    
    setTimeout(() => heart.remove(), 5000);
}

function showMemories() {
    const memories = [
        { 
            img: "memory1.jpg", 
            text: "Our first date at the beach" 
        },
        // Add more memories here
    ];
    
    const container = document.getElementById('memoryContainer');
    container.innerHTML = '';
    
    memories.forEach(memory => {
        const card = document.createElement('div');
        card.className = 'memory-card';
        card.innerHTML = `
            <img src="${memory.img}" alt="Memory">
            <p>${memory.text}</p>
        `;
        container.appendChild(card);
    });
}
// Music Control
const bgMusic = document.getElementById('bgMusic');
const musicBtn = document.getElementById('musicBtn');

musicBtn.addEventListener('click', () => {
  if (bgMusic.paused) {
    bgMusic.play();
    musicBtn.textContent = '🔊';
  } else {
    bgMusic.pause();
    musicBtn.textContent = '🔇';
  }
});

// Optional: Auto-play when user interacts (works in most browsers)
document.addEventListener('click', () => {
  bgMusic.play().catch(e => console.log("Auto-play blocked"));
}, { once: true });
// ...existing code...
document.getElementById('heartsBtn').addEventListener('click', function() {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.style.left = Math.random() * 90 + 'vw';
  heart.style.top = '80vh';
  document.querySelector('.heart-container').appendChild(heart);
  setTimeout(() => heart.remove(), 2000);
});


// ...existing code...