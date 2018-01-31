//---------------------------let
/* Let позволяет создавать переменные, так же как и var, но переменные объявленные
с помощью let видны в том месте где и объявлены и их нельзя использовать до объявления. */
console.log("start example Let----------------------------");

// --- example
var buttons = document.querySelectorAll('button');

for (let i = 0; i < buttons.length; i++) {
	var button = buttons[i];
	button.innerText = i;
	button.onclick = function(e) {
		console.log(i);
	};
}




//---------------------------const
/* const - константа, позволяет создавать переменные, которых нельзя переопределять
и использовать до объявления*/
console.log("start example const----------------------------");
// --- example

const PI = 3.14159;
console.log(PI);

const MATH = {
	PI: 3.1400
};

MATH.PI = 3.222;
console.log(MATH.PI);




//---------------------------spread operator
/* Оператор разворота/распространения позволяет разворачивать элементы массива для передачи в качестве аргуманта
функции или в элементы другого массива */
console.log("start example spread operator----------------------------");
// --- example
let staticLanguages = ['c','c++','java'];
let dynamicLanguages = ['javascript', 'php', 'ruby'];

let languages = [...staticLanguages, 'c#', ...dynamicLanguages, 'python'];
console.log(languages);

function add (x,y,z) {
	console.log(x+y+z);
}

let numbers = [1,2,3];

add(...numbers);

//---------------------------template strings (шаблонные строки)
console.log("start example template strings----------------------------");
// --- example

function greet(name) {
	console.log(`hello ${name}`.toUpperCase());
}
greet('Bill');

function createEmail (to, from, subject, message) {
	console.log(`
		To: ${to}
		From: ${from}
		Subject: ${subject}
		Message: ${message}
	`);
}
createEmail('Artur69Karmov@gmail.com', "Karmov69@yandex.ru", "Hello", "How are you doing");

function add (x, y) {
	console.log(`${x} + ${y} = ${parseInt(x) + parseInt(y)}`);
}
add(5, 7);

let name = 'Bill';
let lastName = 'Gates';
console.log(upperName`hello ${name}, ${lastName}`);

function upperName (literals, ...values) {
	return `${literals[0]} ${values[0].toUpperCase()} ${values[1].toUpperCase()}`;
}


//---------------------------Параметры функции
console.log("start parrameters at functions----------------------------");
// --- example
// function greet (geetting, name) {
// 	console.log(`${geetting} ${name}`);
// }
//
// function greet (geetting, name) {
// 	if(geetting!==undefined && name !== undefined) {
// 		console.log(`${geetting} ${name}`);
// 	} else if (geetting === undefined && name !==undefined) {
// 		console.log(`hello ${name}`);
// 	} else if (geetting !== undefined && name ===undefined) {
// 		console.log(`${geetting} friend`);
// 	} else {
// 		console.log(`Hello friend`);
// 	}
// }

function greet (geetting='Hello', name='Friend') {
	console.log(`${geetting} ${name}`);
}

greet('hi', 'Bill');
greet('hi');
greet(undefined, 'Bill');
greet();

function sum () {
	console.log(arguments);
	var sum = 0;
	Array.prototype.forEach.call(arguments, function (value) {
		sum+=value;
	});
	console.log(sum);
}

function sum (...values) {
	console.log(values instanceof Array);
	let sum = 0;
	values.forEach((value)=>{
		sum+=value;
	});
	console.log(sum);
}

function sum (...values) {
	console.log(
		values.reduce((prevValue, currentValue)=>{
			return prevValue + currentValue;
		})
	);
}
sum(5,6,3,10);

//---------------------------Циклы Fof...of
console.log("start for...of----------------------------");
// --- example
 let browsers = ['Chrome', 'Firefox', 'Edge', 'Safari', 'Opera'];

 for(let browser in browsers)
 {
	 console.log(browser);  //0,1,2
 }
 for(let index in browsers)
 {
	 console.log(browsers[index]); //Chrome, Firefox ...
 }

 for(let browser of browsers)
 {
	 console.log(browser); //Chrome, Firefox ...
 }
console.log(browsers);


//---------------------------Objects
console.log("start objects----------------------------");
// --- example
let fName = 'Bill',
	lName  = 'Gates',
	email 	  = 'billgates@microsoft.com';

let person = {
	fName,
	lName,
	email,
	get fullName() {
		return this.fName + ' ' + this.lName;
	},
	set fullName(value) {
		return this.fName = value;
	}
};

// Object.defineProperty(person, 'fullName', {
// 	get: function() {
// 		return this.fName + ' ' + this.lName;
// 	},
// 	set: function (value) {
// 		return this.fName = value;
// 	}
// })
console.log(person);

// function createCar(property, value) {  //es5
// 	var car = {};
// 	car[property] = value;
// 	return car;
// }
// console.log(createCar('vin', 1));
//
// function createHouse(property, value) {  //es6
// 	return {
// 		[property]: value,
// 		['_' + property]: value,
// 		[property.toUpperCase()]:value,
// 		['get'+property]() {
// 			return this[property];
// 		}
// 	};
// }
// console.log(createHouse('examplehouse', 10));
