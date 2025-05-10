const burgerMenu = document.querySelector('.header__burger');
const menu = document.querySelector('.header__block');
const menuItems = document.querySelectorAll('.manu-items__item');

burgerMenu.addEventListener('click', (event) => {
  event.stopPropagation(); // Зупиняємо спливання події

  // Закриваємо мовне меню, якщо воно відкрите
  const languageBlock = document.querySelector('.header__lenguage');
  if (languageBlock.classList.contains('open')) {
    languageBlock.classList.remove('open');
  }

  burgerMenu.classList.toggle('open');
  menu.classList.toggle('open');
});

// Додаємо обробник події для кожного елемента меню
menuItems.forEach(item => {
  item.addEventListener('click', () => {
    if (menu.classList.contains('open')) {
      burgerMenu.classList.remove('open');
      menu.classList.remove('open');
    }
  });
});

// Закриваємо меню при кліку поза ним
document.addEventListener('click', (event) => {
  if (menu.classList.contains('open') && !menu.contains(event.target) && !burgerMenu.contains(event.target)) {
    burgerMenu.classList.remove('open');
    menu.classList.remove('open');
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const languageBlock = document.querySelector('.header__lenguage');
  const currentLanguage = document.querySelector('.header__current-language');
  const languageList = document.querySelector('.header__language-list');

  // Toggle language list visibility
  languageBlock.addEventListener('click', (event) => {
    event.stopPropagation(); // Зупиняємо спливання події

    // Закриваємо бургер-меню, якщо воно відкрите
    if (menu.classList.contains('open')) {
      burgerMenu.classList.remove('open');
      menu.classList.remove('open');
    }

    languageBlock.classList.toggle('open');
  });

  // Change language on selection
  languageList.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
      const selectedLanguage = event.target.getAttribute('data-lang');
      const previousLanguage = currentLanguage.textContent;

      // Swap current language with selected language
      currentLanguage.textContent = selectedLanguage;
      event.target.textContent = previousLanguage;
      event.target.setAttribute('data-lang', previousLanguage);

      // Close the language list
      languageBlock.classList.remove('open');
    }
  });

  // Close the language list when clicking outside
  document.addEventListener('click', (event) => {
    if (!languageBlock.contains(event.target)) {
      languageBlock.classList.remove('open');
    }
  });
});
