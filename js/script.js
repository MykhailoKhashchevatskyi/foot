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

document.addEventListener('DOMContentLoaded', () => {
  const heroImage = document.querySelector('.main__hero-image'); // Знаходимо зображення
  const heroText = document.querySelector('.main__hero-text'); // Знаходимо текстовий блок

  let isImageVisible = true; // Початковий стан: зображення видиме

  setInterval(() => {
    if (isImageVisible) {
      heroImage.classList.remove('visible'); // Ховаємо зображення
      heroText.classList.add('visible'); // Показуємо текст
    } else {
      heroText.classList.remove('visible'); // Ховаємо текст
      heroImage.classList.add('visible'); // Показуємо зображення
    }
    isImageVisible = !isImageVisible; // Змінюємо стан
  }, 5000); // Зміна кожні 3 секунди
});

document.addEventListener('DOMContentLoaded', () => {
  const readMoreButtons = document.querySelectorAll('.services__read-this-button');

  readMoreButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault(); // Запобігаємо переходу за посиланням

      const parentBlock = button.closest('.services__info-block'); // Знаходимо батьківський блок
      const textTwo = parentBlock.querySelector('.services__text-two'); // Знаходимо другий текст

      if (textTwo.classList.contains('visible')) {
        // Якщо текст уже видимий, приховуємо його
        textTwo.classList.remove('visible');
        button.textContent = 'Read more+'; // Змінюємо текст кнопки
      } else {
        // Якщо текст прихований, показуємо його
        textTwo.classList.add('visible');
        button.textContent = 'show less'; // Змінюємо текст кнопки
      }
    });
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const buttonStep = document.querySelector('.tab__button-step');
  const buttonSup = document.querySelector('.tab__button-sup');
  const tabStep = document.querySelector('.tab__step');
  const tabSupport = document.querySelector('.tab__support');

  // Функція для активації кнопки та відображення відповідного блоку
  const toggleTabs = (activeButton, inactiveButton, showTab, hideTab) => {
    activeButton.classList.add('active');
    inactiveButton.classList.remove('active');
    showTab.style.display = 'block';
    hideTab.style.display = 'none';
  };

  // Функція для перевірки ширини екрану
  const handleResize = () => {
    if (window.innerWidth < 899) {
      // Додаємо обробники подій для кнопок
      buttonStep.addEventListener('click', () => {
        toggleTabs(buttonStep, buttonSup, tabStep, tabSupport);
      });

      buttonSup.addEventListener('click', () => {
        toggleTabs(buttonSup, buttonStep, tabSupport, tabStep);
      });

      // Встановлюємо початковий стан
      toggleTabs(buttonStep, buttonSup, tabStep, tabSupport);
    } else {
      // Скидаємо стилі та видаляємо обробники подій при ширині більше 899
      buttonStep.classList.remove('active');
      buttonSup.classList.remove('active');
      tabStep.style.display = 'block';
      tabSupport.style.display = 'block';
    }
  };

  // Викликаємо функцію при завантаженні сторінки
  handleResize();

  // Додаємо обробник події для зміни розміру вікна
  window.addEventListener('resize', handleResize);
});





document.addEventListener('DOMContentLoaded', () => {
  const buttonStep = document.querySelector('.academies__button-step');
  const buttonSup = document.querySelector('.academies__button-sup');
  const tabStep = document.querySelector('.academies-step');
  const tabSupport = document.querySelector('.academies-support');

  // Функція для активації кнопки та відображення відповідного блоку
  const toggleTabs = (activeButton, inactiveButton, showTab, hideTab) => {
    activeButton.classList.add('active');
    inactiveButton.classList.remove('active');
    showTab.style.display = 'block';
    hideTab.style.display = 'none';
  };

  // Функція для перевірки ширини екрану
  const handleResize = () => {
    if (window.innerWidth < 899) {
      // Додаємо обробники подій для кнопок
      buttonStep.addEventListener('click', () => {
        toggleTabs(buttonStep, buttonSup, tabStep, tabSupport);
      });

      buttonSup.addEventListener('click', () => {
        toggleTabs(buttonSup, buttonStep, tabSupport, tabStep);
      });

      // Встановлюємо початковий стан
      toggleTabs(buttonStep, buttonSup, tabStep, tabSupport);
    } else {
      // Скидаємо стилі та видаляємо обробники подій при ширині більше 899
      buttonStep.classList.remove('active');
      buttonSup.classList.remove('active');
      tabStep.style.display = 'block';
      tabSupport.style.display = 'block';
    }
  };

  // Викликаємо функцію при завантаженні сторінки
  handleResize();

  // Додаємо обробник події для зміни розміру вікна
  window.addEventListener('resize', handleResize);
});