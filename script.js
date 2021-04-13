'use strict';

let factorByMillion = [];
let factorByBillion = [];
let factorByThousand = [];

document.querySelector('.check').addEventListener('click', function () {
  let number = document.querySelector('.guess').value;
  if (number === 'SEMOUH') {
    document.querySelector('body').style.backgroundColor = '#CE3315';
    document.querySelector('.label-score').textContent =
      'ON REGARDE UN FILM CE SOIR ? SEMOUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUH';
    document.querySelector('.number').textContent = '<3';
    document.querySelector('.result').textContent = '';
    document.querySelector('h1').textContent =
      'SEMOUUUUUUUUUUUUUUUH REPOOOOOOOOOOOOOOOOOOOOOOONDS';
    document.querySelector(
      '.message'
    ).textContent = `Tu es le père qu'elles n'ont jamais eu.`;
  } else {
    number = Number(number);
    factorBy(number);

    for (let i = 0; i < factorByThousand.length; i++) {
      factorByMillion[i] = factorByThousand[i] * 1000;
      factorByBillion[i] = factorByThousand[i] * 1000000;
    }
    deleteValue(factorByThousand);
    deleteValue(factorByMillion);
    deleteValue(factorByBillion);
    document.querySelector('body').style.backgroundColor = '#0546a8';
    document.querySelector('.number').textContent = ':O';
    document.querySelector('.label-score').textContent = '';
    document.querySelector(
      'h1'
    ).textContent = `Découvre la différence impressionnante entre des milliers, des millions
      et des milliards :O`;
    document.querySelector(
      '.message'
    ).textContent = `Entre un nombre de secondes entre 1 et 999`;
    document.querySelector(
      '.result'
    ).textContent = `${number} 000 secondes est égal à \r\n`;
    displayValues(factorByThousand);
    document.querySelector('.result').textContent += `\r\n`;
    document.querySelector(
      '.result'
    ).textContent += `${number} millions de secondes est égal à \r\n`;
    displayValues(factorByMillion);
    document.querySelector('.result').textContent += `\r\n \r\n`;
    document.querySelector(
      '.result'
    ).textContent += `${number} milliards de secondes est égal à \r\n`;
    displayValues(factorByBillion);
    document.querySelector('.result').textContent += `\r\n`;
  }
});

// Fonction pour arrondir un nombre à une décimale
function round(nb) {
  nb = Math.round(nb * 10) / 10;
  return nb;
}

// Fonction pour supprimer certaines valeurs des trois tableaux
function deleteValue(arr) {
  arr[0] < 1 || arr[0] > 60 ? (arr[0] = '') : false; // plage de 1 à 60 minutes
  arr[1] < 1 || arr[1] > 35 ? (arr[1] = '') : false; // plage de 1 à 35 heures
  arr[2] < 1 || arr[2] > 365 ? (arr[2] = '') : false; // plage de 1 à 365 jours
  arr[3] < 1 || arr[3] > 52 ? (arr[3] = '') : false; // plage de 1 à 52 semaines
  arr[4] < 1 || arr[4] > 12 ? (arr[4] = '') : false; // plage de 1 à 12 mois
  arr[5] < 1 ? (arr[5] = '') : false; // plage de 1 à X ans
}

// Fonction pour afficher les valeurs contenant des nombres uniquement
function displayValues(arr) {
  if (typeof arr[0] === 'number') {
    document.querySelector('.result').textContent += `- ${round(
      arr[0]
    )} minutes \r\n`;
  } else if (typeof arr[1] === 'number') {
    document.querySelector('.result').textContent += `- ${round(
      arr[1]
    )} heures`;
  } else if (typeof arr[2] === 'number') {
    document.querySelector('.result').textContent += `- ${round(arr[2])} jours`;
  } else if (typeof arr[3] === 'number') {
    document.querySelector('.result').textContent += `- ${round(
      arr[3]
    )} semaines`;
  } else if (typeof arr[4] === 'number') {
    document.querySelector('.result').textContent += `- ${round(arr[4])} mois`;
  } else if (typeof arr[5] === 'number') {
    document.querySelector('.result').textContent += `- ${round(
      arr[5]
    )} années`;
  }
}

// Fonction pour convertir le nombre de secondes pour chaque unité de temps
function factorBy(seconds) {
  factorByThousand = [
    (seconds / 60) * 1000,
    (seconds / 3600) * 1000,
    (seconds / 86400) * 1000,
    (seconds / 604800) * 1000,
    (seconds / 2628000) * 1000,
    (seconds / 31536000) * 1000,
  ];
}
