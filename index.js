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
   let newS = s.replace(/!/gi, '');
   return newS;
}