'use strict';

var WIZARD_NAME = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARDS_COUNT = 4;

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

