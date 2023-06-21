// задание 1

let str = 'js'; 
console.log(new String(str).toUpperCase());

// задание 2 ????

const words = ['Кошка', 'Кит', 'Комар', 'Носорог'];
const search = 'ко';

words.forEach((str) => {
	
	if (str.toLowerCase().includes(search.toLowerCase())) {
		console.log(str);
	}
});

// задание 3

x = Math.floor(32.58884);

x = Math.ceil(32.58884);

x = Math.round(32.58884);
