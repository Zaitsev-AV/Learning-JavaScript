//Tasks with CODEWARS

const padIt = (str, n) => {
	let newSrtOne = str;
	let newSrtTwo = "";
	let i = 0;
	do {
		if (i % 2 != 0) {
			newSrtOne += "*";
		} else {
			newSrtTwo += "*";
		}
		i++;
	} while (i < n);
	{
	}
	return newSrtTwo + newSrtOne;
};

// Next kata

const pickIt = (arr) => {
	let odd = [],
		even = [];
	for (let i = 0; i < arr.length; i++) {
		if ((arr[i] %= 0)) {
			even.push(arr[i]);
		}
		if (arr[i] % 2 !== 0) {
			odd.push(arr[i]);
		}
	}
	return [odd, even];
};

// Next kata 6 kyu

function findOutlier(integers) {
	let even = [];
	let odd = [];
	let n;
	for (let i = 0; i < integers.length; i++) {
		if (integers[i] % 2 == 0) {
			even.push(integers[i]);
		} else {
			odd.push(integers[i]);
		}
	}
	if (even.length === 1) {
		n = even[0];
	} else {
		n = odd[0];
	}
	return n;
}

// Next kata /Training JS #11: loop statement --break,continue

const grabDoll = (dolls) => {
	let bag = [];
	for (let i = 0; i < dolls.length; i++) {
		if (bag.length >= 3) {
			break;
		}
		if (dolls[i] === "Hello Kitty" || dolls[i] === "Barbie doll") {
			bag.push(dolls[i]);
			continue;
		}
	}
	return bag;
};

// Next kata Training JS #12: loop statement --for..in and for..of

const giveMeFive = (obj) => {
	let newArr = [];
	for (let objKey in obj) {
		if (objKey.length == 5) {
			newArr.push(objKey);
		}
		if (obj[objKey].length == 5) {
			newArr.push(obj[objKey]);
		}
	}
	return newArr;
};

//Next kata Remove exclamation marks
function removeExclamationMarks(s) {
	let newS = s.replace(/!/gi, "");
	return newS;
}

//Task FreeCodeCamp
// Измените функцию multiplyAll так, чтобы она возвращала произведение всех чисел в подмассивах arr.

function multiplyAll(arr) {
	let product = 1;
	for (let i = 0; i < arr.length; i++) { // заходим в массив с массивами 
		for (let j = 0; j < arr[i].length; j++) { // проходим по подмассиву 
			product *= arr[i][j]; // вот тут затупил, если брать массив то получаем для первой итерации циклов сначала получим массив [1, 2] это 'i' далее заходим в него и получаем 0-вой элемент этого массива, то есть 1 и далее всё это зацикливаем. 
		}
	}
	return product;
}

multiplyAll([
	[1, 2],
	[3, 4],
	[5, 6, 7],
]);

// Next kata. Необходимо определить самое короткое слово в массиве и по его длинне обрезать все остальные слова.

const cutIt = (arr) => {
	let minArrLength = [];
	let min = arr[0].length; // для поиска слова с меньшей длинной
	for (let i = 0; i < arr.length; i++) {
		if (arr[i].length < min) min = arr[i].length; // проходим по массиву и сравниваем длинну слов, если оно короче то заменяем. 
	}
	for (let i = 0; i < arr.length; i++) {
		minArrLength.push(arr[i].slice(0, min)); // в этом цикле просто образаем слова и пушим их в новый массив 
	}
	return minArrLength;
};