var messageType = document.querySelectorAll('input[name="messageType"]');
var receiveMessageButton = document.querySelector('.receive_message');
var meditateImage = document.querySelector('.image');
var affirmation = document.querySelector('#affirmation');
var mantra = document.querySelector('#mantra');
var textOutput = document.querySelector('.output')
var clearButton = document.querySelector('.clear_message');
var messageDisplay = document.querySelector('.display-message');


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


function randomAffirmation() {
  var affirmation = affirmations[Math.floor(Math.random() * affirmations.length)]
  textOutput.innerText = affirmation;
}

function randomMantra() {
  var mantra = mantras[Math.floor(Math.random() * mantras.length)]
  textOutput.innerText = mantra;
}


receiveMessageButton.addEventListener('click', displayMessage)

function displayMessage() {
    if (affirmation.checked) {
      randomAffirmation()
        meditateImage.classList.add('hidden');
        clearButton.classList.remove('hidden');
      } else if (mantra.checked) {
        randomMantra()
          meditateImage.classList.add('hidden');
          clearButton.classList.remove('hidden');
        }
}

clearButton.addEventListener('click', clearMessage)

function clearMessage() {
  clearButton.classList.add('hidden');
  meditateImage.classList.remove('hidden');
  textOutput.classList.add('hidden');
}
