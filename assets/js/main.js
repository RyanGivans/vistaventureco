const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.16 });

reveals.forEach(el => observer.observe(el));

const choiceEgg = document.querySelector('.choice-egg');

function runChoiceEgg() {
  if (!choiceEgg) return;

  choiceEgg.classList.add('swap-active');

  setTimeout(() => {
    choiceEgg.classList.remove('swap-active');
  }, 3000);
}

setInterval(runChoiceEgg, 9000);
