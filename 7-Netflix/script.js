const faqItem = document.querySelector('.faq-item');
const faqQuestion = document.querySelector('.faq-question');
const faqIcon = document.querySelector('.faq-icon');
const faqAnswer = document.querySelector('.faq-answer');

faqQuestion.addEventListener('click', () => {
  faqAnswer.classList.toggle('show-answer');
  faqIcon.textContent = faqAnswer.classList.contains('show-answer') ? '-' : '+';
});