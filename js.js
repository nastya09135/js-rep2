'use strict'
//Пример 1
var min = 10;
if (min >= 0 && min <= 14) {console.log('В первую четверть.');}
if (min >= 15 && min <= 30) {console.log('Во вторую четверть.');}
if (min >= 31 && min <= 45) {console.log('В третью четверть.');}
if (min >= 46 && min <= 59) {console.log('В четвертую четверть.');}

// Пример 2
var lang = 'ru';
if (lang == 'ru') {var arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];}
if (lang == 'en') {arr = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];}
console.log(arr);

// Пример 3 ?????????????????
let num_3 = 86;
if ( num_3 >= 10 && num_3 <= 99 || num_3 <= -10 ){

		if (num_3>0){
			console.log(`Число ${num_3} двухзначное положительное.`)
		}else if(num_3<0){
			console.log(`Число ${num_3} двухзначное отрицательное.`)
		}
}else{
	if (num_3>0){
		console.log(`Число ${num_3} однозначное положительное.`)
	}else if(num_3<0){
		console.log(`Число ${num_3} однозначное отрицательное.`)
	}
}

// Пример 4
let red = "нет", yellow = "нет";
if (red == "да") 
{console.log("При красном сигнале стоим - дорогу переходить нельзя!");
}else if(yellow == "да")
{console.log("При жёлтом сигнале нужно приготовиться, но дорогу пока переходить нельзя!");
}else 
{console.log("Зелёный сигнал - переходим дорогу.");}

// Пример 5
let i5 = 1;
while(i5 <= 12){console.log(i5);
i5++;}

// Пример 6
let i_6 = 5;
while(i_6 <= 13){console.log(i_6);
i_6++;}

// Пример 7
for (var i_7 = 0; i_7 <= 16; i_7++) {
	if(i_7 % 2 == 0) {
		console.log(i_7);
	}
  }

// Пример 8
let result_8=0;
let arr_8=[2,5,8,3,6];
for(let i_8=0; i_8<arr_8.length; i_8++){
	result_8=result_8+arr_8[i_8];
}
console.log(result_8);