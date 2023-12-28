//let titleProject = "Оценка стоимости";
//let screensValue = "шаблонные, с уникальным дизайном, с анимациями";
let screenPrice = 1;
let percentage = 0.3;
//let fullPrice = 500;
//let responsive = true;

let titleProject = prompt('Название проекта');
let screensValue = prompt('шаблsонные, с уникальным дизайном, с анимациями');
//let responsive = prompt(true, false);
let service1 = prompt('Какой сервис нужен?');
let servicePrice1 = prompt('Сколько это будет стоить');
let service2 = prompt('Какой еще сервис тебе нужен?');
let servicePrice2 = prompt('Сколько будет стоить этот второй сервис?');

let fullPrice = +screenPrice + +servicePrice1 + +servicePrice2;
let servicePercentPrice = fullPrice * percentage;
console.log(Math.round(servicePercentPrice));

if (fullPrice > 50000) {
    console.log('Вам скидка 10%');
} else if (fullPrice > 20000, fullPrice < 40000) {
    console.log('Вам скидка 5%');
} else if (fullPrice < 20000, fullPrice > 0) {
    console.log('Вам скидка 0%');
} else if (fullPrice = 0) {
    console.log('0');
} else if (fullPrice = 20000) {
    console.log('20000');
} else if (fullPrice = 50000) {
    console.log('50000');
};

