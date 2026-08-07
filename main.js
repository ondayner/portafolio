//LISTAS DE COSAS
lucide.createIcons();

function switchTab(index) {
  const buttons = document.querySelectorAll('#tab-buttons .tab-btn');
  const contents = document.querySelectorAll('.tab-content');

  buttons.forEach((btn, idx) => {
    if (idx === index) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  contents.forEach((content, idx) => {
    if (idx === index) {
      content.classList.remove('hidden');
      
      const animatedElements = content.querySelectorAll('.animate-step');
      animatedElements.forEach((el) => {
        el.style.animation = 'none';
        void el.offsetWidth;
        el.style.animation = '';
      });
    } else {
      content.classList.add('hidden');
    }
  });
}

//NAVBAR
const bars = document.getElementById('bars');
const closeBtn = document.getElementById('x');
const menu = document.getElementById('ul');

bars.addEventListener('click', () => {
    menu.classList.remove('-translate-y-8', 'opacity-0', 'scale-95', 'pointer-events-none');
    menu.classList.add('translate-y-0', 'opacity-100', 'scale-100', 'pointer-events-auto');
});

const closeMenu = () => {
    menu.classList.remove('translate-y-0', 'opacity-100', 'scale-100', 'pointer-events-auto');
    menu.classList.add('-translate-y-8', 'opacity-0', 'scale-95', 'pointer-events-none');
};

closeBtn.addEventListener('click', closeMenu);
navLinks.forEach(link => link.addEventListener('click', closeMenu));