
const btnDarkMode = document.querySelector('.dark-mode-btn');

// 1. Проверка темной темы в системных настройках
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  btnDarkMode.classList.add('dark-mode-btn--active');
  document.body.classList.add('dark');
}

// 2. Проверка темной темы в localStorage
if (localStorage.getItem('darkMode') === 'dark') {
  btnDarkMode.classList.add('dark-mode-btn--active');
  document.body.classList.add('dark');
} else if (localStorage.getItem('darkMode') === 'light') {
  btnDarkMode.classList.remove('dark-mode-btn--active');
  document.body.classList.remove('dark');
}


// 3. Если меняются системные настройки, то меняем тему
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
  const newColorScheme = event.matches ? 'dark' : 'light';

  if (newColorScheme === 'dark') {
    btnDarkMode.classList.add('dark-mode-btn--active');
    document.body.classList.add('dark');
    localStorage.setItem('darkMode', 'dark');
  } else {
    btnDarkMode.classList.remove('dark-mode-btn--active');
    document.body.classList.remove('dark');
    localStorage.setItem('darkMode', 'light');
  }
});


// 4. Включение темной темы по нажатию кнопки
btnDarkMode.onclick = function () {
  btnDarkMode.classList.toggle('dark-mode-btn--active');
  const isDark = document.body.classList.toggle('dark');

  if (isDark) {
    localStorage.setItem('darkMode', 'dark')
  } else {
    localStorage.setItem('darkMode', 'light');
  }

}


// Когда пользователь прокручивает страницу, выполните myFunction
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}
