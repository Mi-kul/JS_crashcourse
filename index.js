console.log(window);

// Single element
console.log(document.getElementById("my-form"));
document.querySelector(".container"); // container je class, takze pristup pres .

// Multiple element
console.log(document.querySelectorAll(".item")); //vzdy pouzivat pro multiple

//looping skrz array
const items = document.querySelectorAll(".item");

items.forEach((item) => {
  console.log(item);
});

const ul = document.querySelector(".items");
ul.lastElementChild.remove(); //remove last item
ul.firstElementChild.textContent = "Hello"; //change first to text 'Hello
ul.children[1].innerText = "Pjotr"; //change second text

//change style of button 'submit
const bt = document.querySelector(".btn");
//bt.style.background = "blue";

//event listener
bt.addEventListener("click", (e) => {
  e.preventDefault(); //zastavi
  console.log(e.target);
  bt.style.background = "blue";
  //menim pozadi containeru na cernou
  document.querySelector("#my-form").style.background = "black";
  //priradi body do CSS tridy .bg-dark => po clicku zmeni text na white a bck na tmavou
  document.querySelector("body").classList.add("bg-dark");
});
