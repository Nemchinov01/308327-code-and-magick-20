'use strict';

var WIZARD_NAME = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var WIZARDS_COUNT = 4;
var MIN_NAME_LENGTH = 2;
var MAX_NAME_LENGTH = 25;

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

// функция случайного числа
var randomNumber = function (max) {
  return Math.floor(max * Math.random());
};
// Функция добавления в массив
var wizards = [];
var getWizards = function () {
  for (var t = 0; t <= WIZARDS_COUNT; t++) {
    wizards.push({
      name: WIZARD_NAME[randomNumber(WIZARD_NAME.length)] + ' ' + WIZARD_SURNAME[randomNumber(WIZARD_SURNAME.length)],
      coatColor: COAT_COLOR[randomNumber(COAT_COLOR.length)],
      eyesColor: EYES_COLOR[randomNumber(COAT_COLOR.length)],
    });
  }
};
getWizards();

// Функция создания элемента
var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};
// Сгенерированные DOM - элементы
var createFragment = function () {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  return fragment;
};

similarListElement.appendChild(createFragment());
document.querySelector('.setup-similar').classList.remove('hidden');

var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var setupClose = setup.querySelector('.setup-close');
var userNameInput = document.querySelector('.setup-user-name');

var onPopupEscPress = function (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closePopup();
  }
};

// показ popup
var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    openPopup();
  }
});

userNameInput.addEventListener('focusin', function () {
  document.removeEventListener('keydown', onPopupEscPress);
});

userNameInput.addEventListener('focusout', function () {
  document.addEventListener('keydown', onPopupEscPress);
});

// закрытие popup
var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    closePopup();
  }
});

// обработчик ввода
userNameInput.addEventListener('input', function () {
  var valueLength = userNameInput.value.length;

  if (valueLength < MIN_NAME_LENGTH) {
    userNameInput.setCustomValidity('Ещё ' + (MIN_NAME_LENGTH - valueLength) + ' симв.');
  } else if (valueLength > MAX_NAME_LENGTH) {
    userNameInput.setCustomValidity('Удалите лишние ' + (valueLength - MAX_NAME_LENGTH) + ' симв.');
  } else {
    userNameInput.setCustomValidity('');
  }
});

// для делегирования
var parentContainer = document.querySelector('.setup');

var setColor = function (prop, element, input, color) {
  element.style[prop] = color;
  input.value = color;
};

// цвет плаща
var wizardCoat = document.querySelector('.wizard-coat');
wizardCoat.addEventListener('click', function () {
  setColor('fill', wizardCoat, parentContainer.querySelector('input[name = "coat-color"]'), COAT_COLOR[randomNumber(COAT_COLOR.length)]);
});

// цвет глаз
var wizardEyes = document.querySelector('.wizard-eyes');
wizardEyes.addEventListener('click', function () {
  setColor('fill', wizardEyes, parentContainer.querySelector('input[name = "eyes-color"]'), EYES_COLOR[randomNumber(EYES_COLOR.length)]);
});

// цвет файербола
var wizardFireball = document.querySelector('.setup-fireball-wrap');
wizardFireball.addEventListener('click', function () {
  setColor('background', wizardFireball, parentContainer.querySelector('input[name = "fireball-color"]'), FIREBALL_COLOR[randomNumber(FIREBALL_COLOR.length)]);
});

