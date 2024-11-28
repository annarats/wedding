document.querySelectorAll('.btn_yes, .btn_no').forEach(btn => {
    btn.addEventListener('click', function (e) {
      const rect = btn.getBoundingClientRect();
  
      const dropletClass = btn.classList.contains('btn_yes') ? 'droplet-yes' : 'droplet-no';
  
      for (let i = 0; i < 20; i++) {
        const droplet = document.createElement('div');
        droplet.classList.add(dropletClass);
  
        const angle = Math.random() * 2 * Math.PI;
        const distance = Math.random() * 500 + 500;
  
        const dx = Math.cos(angle) * distance;
        const dy = Math.sin(angle) * distance;
  
        droplet.style.left = `${e.clientX - rect.left + dx}px`;
        droplet.style.top = `${e.clientY - rect.top + dy}px`;
  
        const size = Math.random() * 60 + 40;
        droplet.style.width = `${size}px`;
        droplet.style.height = `${size}px`;
  
        btn.appendChild(droplet);
  
        droplet.addEventListener('animationend', () => {
          droplet.remove();
        });
      }
    });
});