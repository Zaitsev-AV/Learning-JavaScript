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

function findOutlier(integers){
	let even =[]
	let odd = []
	let n;
	for(let i = 0; i < integers.length; i++) {
	  if (integers[i] % 2 == 0) {
		 even.push(integers[i])
	  } else {
		 odd.push(integers[i])
		 }
	}
	if (even.length === 1) {
	  n = even[0]
	  } else {
		 n = odd[0]
		 }
	return n
 }
