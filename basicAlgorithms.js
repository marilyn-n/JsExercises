const driver = 'Marilyn';
const navigator = 'Rafael';

const longestNameIs = (driver, navigator) => {
  if(driver.length > navigator.length ) {
    console.log(`The driver has the longest name, it has ${driver.length} characters`);
  } else if(navigator.length > driver.length) {
    console.log(`It seems that the navigator has the longest name, it has ${navigator.length} characters.`);
  } else {
    console.log(`Wow, you both have equally long names, ${driver.length} characters!.`);
  }
  
  console.log(driver.toUpperCase().split('').join(' '));
  console.log(navigator.split('').reverse().join(' '));
  
}

longestNameIs(driver, navigator)

// Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?

const lexicographicName = (user1, user2) => {
  const users = [user1.split('')[0], user2.split('')[0]]  

  users.sort((driver, navigator) => {
    if(driver < navigator) { 
      console.log(`The driver's name goes first. ${driver}`);
    }
    if(driver > navigator) { 
      console.log(`Yo, the navigator goes first definitely. ${navigator}`);
    } else if (driver === navigator){
      console.log(`What?! You both have the same name?`);
      
    }
})
  
}

lexicographicName('Rafael', 'Ravi')

// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.

const paragraph = `Vestibulum ante ipsum primis in faucibus orci luctus et 
ultrices posuere cubilia Curae; Suspendisse porta est leo, eget sodales quam 
elementum non. Nulla eu purus dictum, bibendum lorem vel, lacinia mi. 

Phasellus in tempus
elit. Fusce odio arcu, tristique eget massa sit amet, dapibus finibus quam.
Curabitur vitae tortor ut dolor convallis condimentum sit amet vel arcu. 
Nunc non tempus tortor, in tempus nisi.

Aenean placerat justo felis, nec venenatis elit cursus ut. Suspendisse
consequat diam vel commodo vulputate. Suspendisse at diam mattis, sodales lectus 
ultricies, lobortis diam.`

const wordsCounter = (paragraph) => {
  const wordsLenght = paragraph.split(' ').length;
  console.log(wordsLenght);
  const etCounter = (paragraph.match(/et/g) || []).length;
  console.log(etCounter);
};

wordsCounter(paragraph);

const phraseToCheck = 'step on no pets';

const clean = (str) => str.toLowerCase().replace(/[\W_]/g, '');

const isPalindrome = (str) => {
  const cleanStr = clean(str);
  const reversedStr = cleanStr.split('').reverse().join('');

  reversedStr === cleanStr ? 
  console.log(`${cleanStr} it's a palindrome!`) :
  console.log(`${cleanStr} it's NOT a palindrome!`);
}

isPalindrome(phraseToCheck);