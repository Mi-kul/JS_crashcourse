// Short circuit evaluation to assign  writingUtensil variable below:
let tool = '';
let writingUtensil = tool || 'pen'
console.log(`The ${writingUtensil} is mightier than the sword.`); //print pen


// Short If Else Ternary Operator
if (isLocked) {
    console.log('You will need a key to open the door.');
  } else {
    console.log('You will not need a key to open the door.');
  }

isLocked ? console.log('You will need a key to open the door.') 
: console.log('You will not need a key to open the door.');
  
let favoritePhrase = 'Love That!';
if (favoritePhrase === 'Love That!') {
  console.log('I love that!');
} else {
  console.log("I don't love that!");
}

favoritePhrase === 'Love That!' ? console.log('I love that!') : console.log("I don't love that!");