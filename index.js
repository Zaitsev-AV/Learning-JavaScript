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
	for (let i = 0; i < arr.length; i++) {
		// заходим в массив с массивами
		for (let j = 0; j < arr[i].length; j++) {
			// проходим по подмассиву
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

// Next kata Beginner - Reduce but Grow

const grow = (x) => {
	let n = 1;
	for (let i = 0; i < x.length; i++) {
		n *= x[i];
	}
	return n;
};
// Можно сократить до этого
// const grow=x=> x.reduce((a,b) => a*b);

// Next Kata Subtract the Sum

function SubtractSum(n) {
	return "apple";
}

// Next kata Especially Joyful Numbers

function numberJoy(n) {
	let number = n
		.toString()
		.split("")
		.reduce(function (a, b) {
			return +a + +b;
		});
	let numberRevers = n
		.toString()
		.split("")
		.reduce(function (a, b) {
			return +a + +b;
		});
	let reversed = numberRevers.toString().split("");
	let arrReverse = reversed.reverse();
	let arrReverseToNumber = arrReverse.reduce(function (a, b) {
		return a + b;
	});
	if (number * arrReverseToNumber == n) {
		return true;
	} else {
		return false;
	}
}

//Next kata Perpendicular lines
function maxBisectors(n) {
	return Math.round(Math.pow(n / 2, 2));
}
// Next kata Are they the "same"?
function comp(a1, a2) {
	if (a1 === null || a2 === null) return false;
	for (let i = 0; i < a2.length; i++) {
		const ind = a1.indexOf(Math.sqrt(a2[i]));
		if (ind == -1) return false;
		a1[ind] = null;
	}
	return true;
}

// Next kata Find Maximum and Minimum Values of a List

const min = (list) => {
	let min = list[0];
	for (let i = 0; i < list.length; i++) {
		if (list[i] < min) min = list[i];
	}
	return min;
};

const max = (list) => {
	let max = list[0];
	for (let i = 0; i < list.length; i++) {
		if (list[i] > max) max = list[i];
	}
	return max;
};

// Next kata Quarter of the year

const quarterOf = (month) => {
	switch (month) {
		case 1:
		case 2:
		case 3:
			return 1;
		case 4:
		case 5:
		case 6:
			return 2;
		case 7:
		case 8:
		case 9:
			return 3;
		case 10:
		case 11:
		case 12:
			return 4;
		default:
			break;
	}
};

// Next kata Cat years, Dog years
const humanYearsCatYearsDogYears = (humanYears) => {
	let cats = 0;
	let dog = 0;
	let result = [];
	if (humanYears > 2) {
		cats = (humanYears - 2) * 4 + 24;
		dog = (humanYears - 2) * 5 + 24;
	}
	if (humanYears === 2) {
		cats = 24;
		dog = 24;
	}
	if (humanYears === 1) {
		cats = 15;
		dog = 15;
	}
	result.push(humanYears, cats, dog);
	return result;
};

// Решение задачи выше через switch case

function humanYearsCatYearsDogYears(humanYears) {
	switch (humanYears) {
		case 1:
			return [1, 15, 15];
		case 2:
			return [2, 24, 24];
		default:
			return [
				humanYears,
				(humanYears - 2) * 4 + 24,
				(humanYears - 2) * 5 + 24,
			];
	}
}

// Next kata Are they the "same"?

function comp(a1, a2) {
	if (a1 === null || a2 === null) return false;
	for (let i = 0; i < a2.length; i++) {
		const ind = a1.indexOf(Math.sqrt(a2[i]));
		if (ind == -1) return false;
		a1[ind] = null;
	}
	return true;
}

// Next kata Find Maximum and Minimum Values of a List

const miN = (list) => {
	let min = list[0];
	for (let i = 0; i < list.length; i++) {
		if (list[i] < min) min = list[i];
	}
	return min;
};

const maX = (list) => {
	let max = list[0];
	for (let i = 0; i < list.length; i++) {
		if (list[i] > max) max = list[i];
	}
	return max;
};

// Next kata Is it a palindrome?
function isPalindrome(x) {
	let a = x.split("").reverse().join("");
	return x.toLowerCase() === a.toLowerCase() ? true : false;
}

//Next kata How many lightsabers do you own?

function howManyLightenersDoYouOwn(name) {
	return name === 'Zach' ? 18 : 0;
}
 
// Next kata Difference of Volumes of Cuboids

const findDifference =(a, b) => {
	let one = a.reduce(function (acc, item) {
		return acc * item;
	})
	console.log(one);
	let two = b.reduce(function (acc, item) {
		return acc * item;
	})
	console.log(two);
	return Math.abs(one - two)
}

// Next kata Parse nice int from char problem

const getAge = (inputString) => +inputString[0]

//Next kata Convert a Number to a String!

const numberToString = (num) => num.toString()