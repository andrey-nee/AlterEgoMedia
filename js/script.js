var video = document.getElementById("video");
var volume = document.getElementById("volume");

var form = document.querySelector('.contacts__form')
var formPhone = form.querySelector('.form__field--phone')
var formName = form.querySelector('.form__field--name')
var submit = form.querySelector('.form__submit-button')
var old = 0;

var burger = document.querySelector('.main-header__menu-burger')
var nav = document.querySelector('.main-navigation')

// Меню бургер для мобилок
burger.addEventListener('click', function () {
  burger.classList.toggle('active');
  nav.classList.toggle('active');
});

// Включение\Отключение звука видеофона
volume.addEventListener('click', function () {
    video.muted = !video.muted;
});


// Переключатель иконки звука видеофона
volume.addEventListener('click', function () {
  volume.classList.toggle('mute');
});


// Отбивка пробелов для номера телефона
formPhone.onkeydown = function() {
    var curLen = formPhone.value.length;

    if (curLen < old){
      old--;
      return;
      }

    if (curLen == 2)
    formPhone.value = formPhone.value + " ";

    if (curLen == 6)
    formPhone.value = formPhone.value + " ";

    if (curLen == 9)
    formPhone.value = formPhone.value + " ";

    old++;
}


// Валидация значений для поля ввода номера телефона
formPhone.addEventListener('keypress', e => {
  // Отменяем ввод НЕ цифр
  if(!/\d/.test(e.key))
    e.preventDefault();
});


// Валидация значений для поля ввода имени
formName.addEventListener('keypress', e => {
  // Отменяем ввод НЕ букв
  // if(/\d/.test(e.key))
  if(!/^[a-zа-яё\s]+$/iu.test(e.key))
    e.preventDefault();
});


// Ограничиваем длину поля ввода номера телефона
formPhone.addEventListener('keypress', e => {
  if(formPhone.value.length >= 12) {
    e.preventDefault();
  }
});


// Валидация пустых полей
form.addEventListener('submit', function (event) {
  event.preventDefault()

  // Очистка ошибок
  var errorList = form.querySelectorAll('.error-message')
  for (var i = 0; i < errorList.length; i++) {
    errorList[i].remove()
  }

  // Очистка стилей ошибок
  var errorStyle = form.querySelectorAll('.error')
  for (var i = 0; i < errorStyle.length; i++) {
    errorStyle[i].classList.remove('error')
  }

  // Валидация поля Имя
  if (!formName.value) {
    console.log(formPhone.value, 'Ошибка01.Поле имени не заполнено')
    var errorMessage01 = document.createElement('div')
    errorMessage01.className='form__error error-message'
    errorMessage01.innerHTML = 'Введите свое имя'
    formName.parentElement.appendChild(errorMessage01)
    formName.classList.add('error')
  }

  // Шаблон номера 00 000 00 00 (без учёта +998)
  let regex2 = /\d{2}\s?\d{3}\s?\d{2}\s?\d{2}$/;
  // дальше идет проверка на соответствие выражению
  if(!regex2.test(formPhone.value)){
    console.log(formPhone.value, 'Ошибка02.Номер не соответствует формату')
    var errorMessage02 = document.createElement('div')
    errorMessage02.className='form__error error-message'
    errorMessage02.innerHTML = 'Номер формата +998 XX XXX XX XX'
    formPhone.parentElement.appendChild(errorMessage02)
    formPhone.classList.add('error')
  }
  else{
    console.log(formPhone.value, 'Соответствует')
  }
});

