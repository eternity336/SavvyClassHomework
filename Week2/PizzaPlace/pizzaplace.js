let pizzaPlace = "Blast Tops";
let numOfToppings = 10;

console.log(pizzaPlace, typeof(pizzaPlace));
console.log(numOfToppings, typeof(numOfToppings));

console.log(`${pizzaPlace} is a pizza place that offers up to ${numOfToppings} toppings!`);

if (numOfToppings < 10){
  console.log("Quality, not quantity.");
}else{
  console.log("A whole lot of pizza.");
}

//Option 1
for (let i = 2; i <= numOfToppings; i = i + 2){
  console.log(i);
}

//Option 2
for (let i = 1; i <= numOfToppings; i++){
  if (i%2 == 0){
    console.log(i);
  }
}


