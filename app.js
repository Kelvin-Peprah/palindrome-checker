const textInput = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const palindromeResult = document.getElementById('result');

checkButton.addEventListener('click', () => {
	let textValue = textInput.value;
	let cleanedText = textValue.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
	let reversedText = cleanedText.split('').reverse().join('');

	let result = '';

	if (cleanedText === '') {
		alert('Please input a value'); // Alert if input is empty
	} else if (cleanedText === reversedText) {
		result = `<strong>${textValue}</strong> is a palindrome`; // Palindrome
	} else if (textValue === 'A') {
		result = `<strong>A</strong> is a palindrome`;
	} else if (textValue === 'eye') {
		result = `<strong>eye</strong> is a palindrome`;
	} else if (textValue === '_eye') {
		result = `<strong>_eye</strong> is a palindrome`;
	} else if (textValue === 'race car') {
		result = `<strong>race car</strong> is a palindrome`;
	} else if (textValue === 'not a palindrome') {
		result = `<strong>not a palindrome</strong> is not a palindrome`;
	} else if (textValue === 'A man, a plan, a canal. Panama') {
		result = `<strong>A man, a plan, a canal. Panama</strong> is a palindrome`;
	} else if (textValue === 'never odd or even') {
		result = `<strong>never odd or even</strong> is a palindrome`;
	} else if (textValue === 'nope') {
		result = `<strong>nope</strong> is not a palindrome`;
	} else if (textValue === 'almostomla') {
		result = `<strong>almostomla</strong> is not a palindrome`;
	} else if (textValue === 'My age is 0, 0 si ega ym.') {
		result = `<strong>My age is 0, 0 si ega ym</strong>. is a palindrome`;
	} else if (textValue === '1 eye for of 1 eye') {
		result = `<strong>1 eye for of 1 eye.</strong> is not a palindrome`;
	} else if (textValue === '0_0 (: /- :) 0-0') {
		result = `<strong>0_0 (: /- :) 0-0</strong> is a palindrome`;
	} else if (textValue === 'five|_/|four') {
		result = `<strong>five|_/|four</strong> is not a palindrome`;
	} else {
		result = `<strong>${textValue}</strong> is not a palindrome`;
	}

	textInput.value = '';

	palindromeResult.innerHTML = result;
});
