
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
window.onscroll = function () { myFunction() };

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}


// list view
const projectList = document.querySelector('.projects')
const projectItem = document.querySelector('.project')

const gridBtn = document.querySelector('.grid__btn')
const listBtn = document.querySelector('.list__btn')

const projectWrapper = document.querySelectorAll('.project-wrapper')
const projectImg = document.querySelectorAll('.project__img')

gridBtn.addEventListener('click', function () {
  projectList.classList.add('grid')
  projectList.classList.remove('flex')
})

listBtn.addEventListener('click', function () {
  projectList.classList.toggle('flex')
  projectList.classList.remove('grid')

  for (const block of projectWrapper) {
    block.classList.add('project-wrapper__flex')
  }
  for (const img of projectImg) {
    img.classList.add('project__img--flex')

  }
  // projectWrapper.classList.add('project-wrapper__flex')
  // projectWrapper.classList.remove('project-wrapper')
})

tippy('#listButton', {
  content: "Вид плиткой",
  animation: 'fade',
});
tippy('#gridButton', {
  content: "Вид сеткой",
    animation: 'fade',
});
