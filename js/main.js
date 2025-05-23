
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
const projectList = document.querySelector('#projectsList')
const projectItem = document.querySelector('.project')
projectList.classList.add('grid')
const gridBtn = document.querySelector('.btn--grid')
const listBtn = document.querySelector('.btn--list')

const projectWrapper = document.querySelectorAll('.project-wrapper')
const projectImg = document.querySelectorAll('.project__img')

gridBtn.addEventListener('click', function () {
  projectList.classList.toggle('grid')
  projectList.classList.remove('flex')
  projectList.classList.remove('projects')

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

})

tippy('#listButton', {
  content: "Вид плиткой",
  animation: 'fade',
});
tippy('#gridButton', {
  content: "Вид сеткой",
  animation: 'fade',
});
tippy('#btn-up', {
  content: "Back to Top",
});


// button scroll to top
const btnUp = {
  el: document.querySelector('.btn-up'),
  scrolling: false,
  show() {
    if (this.el.classList.contains('btn-up_hide') && !this.el.classList.contains('btn-up_hiding')) {
      this.el.classList.remove('btn-up_hide');
      this.el.classList.add('btn-up_hiding');
      window.setTimeout(() => {
        this.el.classList.remove('btn-up_hiding');
      }, 300);
    }
  },
  hide() {
    if (!this.el.classList.contains('btn-up_hide') && !this.el.classList.contains('btn-up_hiding')) {
      this.el.classList.add('btn-up_hiding');
      window.setTimeout(() => {
        this.el.classList.add('btn-up_hide');
        this.el.classList.remove('btn-up_hiding');
      }, 300);
    }
  },
  addEventListener() {
    // при прокрутке окна (window)
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      if (this.scrolling && scrollY > 0) {
        return;
      }
      this.scrolling = false;
      // если пользователь прокрутил страницу более чем на 200px
      if (scrollY > 2000) {
        // сделаем кнопку .btn-up видимой
        this.show();
      } else {
        // иначе скроем кнопку .btn-up
        this.hide();
      }
    });
    // при нажатии на кнопку .btn-up
    document.querySelector('.btn-up').onclick = () => {
      this.scrolling = true;
      this.hide();
      // переместиться в верхнюю часть страницы
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
}

btnUp.addEventListener();
