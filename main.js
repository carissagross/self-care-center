var messageType = document.querySelectorAll('input[name="messageType"]');
var receiveMessageButton = document.querySelector('.receive_message');
var meditateImage = document.querySelector("img[src='./assets/meditate.svg']");
var imageBox = document.querySelector('.imageBox');
var clearButton = document.querySelector('.clear_message');
var message = document.querySelector('.display-message');



var affirmations =
["I forgive myself and set myself free.",
"I believe I can be all that I want to be.",
"I am in the process of becoming the best version of myself.",
"I have the freedom & power to create the life I desire.",
"I choose to be kind to myself and love myself unconditionally.",
"My possibilities are endless.",
"I am worthy of my dreams.", "I am enough.",
"I deserve to be healthy and feel good.",
"I am full of energy and vitality and my mind is calm and peaceful.",
"Every day I am getting healthier and stronger.",
"I honor my body by trusting the signals that it sends me.",
"I manifest perfect health by making smart choices."];

var mantras =
["Breathing in, I send myself love.",
"Breathing out, I send love to someone else who needs it.",
"Don’t let yesterday take up too much of today.",
"Every day is a second chance.",
"Tell the truth and love everyone.",
"I am free from sadness.",
"I am enough.",
"In the beginning it is you, in the middle it is you and in the end it is you.",
"I love myself.",
"I am present now.",
"Inhale the future, exhale the past.",
"This too shall pass.",
"Yesterday is not today.",
"The only constant is change.",
"Be impeccable with your word. Don't take anything personally. Don't make assumptions. Always do your best.",
"Onward and upward.",
"I am the sky, the rest is weather."]

// function for random index
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

affirmations[getRandomIndex(affirmations)];
mantras[getRandomIndex(mantras)];

// returns the value of selected radio buttons
function isChecked() {
  for (var i = 0; i < messageType.length; i++) {
    if (messageType[i].checked) {
      return messageType[i].value
    }
  }
}

receiveMessageButton.addEventListener('click', displayMessage)

function displayMessage(event) {
  var checkedButton = isChecked();
    if (checkedButton === 'affirmation') {
        meditateImage.classList.add('hidden');
        return imageBox.innerHTML +=
        `<section class="display-message">${affirmations[getRandomIndex(affirmations)]}</section>`
      } else if (checkedButton === 'mantra') {
          meditateImage.classList.add('hidden');
          return imageBox.innerHTML +=
          `<section class="display-message">${mantras[getRandomIndex(mantras)]}</section>`
        } else {
          return imageBox.innerHTML = `Please pick an option`
          }
}

clearButton.addEventListener('click', clearMessage)

function clearMessage() {
// return meditateImage.classList.remove('hidden');
}
