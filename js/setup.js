'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

// функция случайного числа
var randomIndex = function (max) {
  return Math.floor(max * Math.random());
};
// имя и фамилия
var names = [];
for (var j = 0; j < WIZARD_NAMES.length; j++) {
  var randomName = WIZARD_NAMES[randomIndex(WIZARD_NAMES.length)];
  var randomSurname = WIZARD_SURNAME[randomIndex(WIZARD_SURNAME.length)];
  var wizardName = randomName + ' ' + randomSurname;
  names.push(wizardName);
}
// цвет плаща
var coatColor = [];
for (var k = 0; k < WIZARD_NAMES.length; k++) {
  var randomCoatColor = COAT_COLOR[randomIndex(COAT_COLOR.length)];
  coatColor.push(randomCoatColor);
}
// цвет глаз
var eyesColor = [];
for (var l = 0; l < WIZARD_NAMES.length; l++) {
  var randomEyesColor = EYES_COLOR[randomIndex(EYES_COLOR.length)];
  eyesColor.push(randomEyesColor);
}

// добавление параметров в массив
var wizards = [];
for (var t = 0; t <= 3; t++) {
  wizards.push({
    name: names[t],
    coatColor: coatColor[t],
    eyesColor: eyesColor[t],
  });
}

// Функция создания элемента
var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};
// Сгенерированные DOM - элементы
var createFragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  createFragment.appendChild(renderWizard(wizards[i]));
}

similarListElement.appendChild(createFragment);
document.querySelector('.setup-similar').classList.remove('hidden');

