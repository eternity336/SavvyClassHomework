const pizzaToppings = ['sausage', 'peperoni', 'canadian bacon', 'spicy sausage', 'pineapple', 'olives', 'green peppers', 'tomatoes', 'bacon', 'tofu', 'ham'];

function greetCustomer(guest){
  console.log(`Welcome ${guest} to the Pizza Place!  The toppings today are ${listToppingsAnd(pizzaToppings)}.`);
};

function getPizzaOrder(size, crust, toppings){
  if (!checkToppings(toppings)){
    return;
  }
  if(toppings.length == 0){
    console.log(`One ${size} ${crust} crust cheese pizza coming up!`);
  }else{
    console.log(`One ${size} ${crust} crust pizza with ${listToppingsAnd(toppings)} coming up!`);
  }
  
  return [size, crust, toppings];
};

function preparePizza(pizza){
  console.log("...Cooking Pizza...");
  return {'size':pizza[0], 'crust':pizza[1], 'toppings':pizza[2]};
};

function servePizza(pizza){
  if (pizza['toppings'].length == 0){
    console.log(`Order up! Here's your ${pizza['size']} ${pizza['crust']} crust cheese pizza enjoy!`);
  }else{
    console.log(`Order up! Here's your ${pizza['size']} ${pizza['crust']} crust pizza with ${listToppingsAnd(pizza['toppings'])} enjoy!`);
  }
  
};

function listToppingsAnd(toppings){
  if (toppings.length == 1){
    return toppings[0];
  };
  let tops = toppings[0];
  for (top of toppings.slice(1, toppings.length - 1)){
    tops += `, ${top}`;
  };
  return `${tops} and ${toppings[toppings.length - 1]}`;
}

function checkToppings(toppings){
  for (top of toppings){
    if (!(pizzaToppings.includes(top.toLowerCase()))){
      console.log("We do not have some of these toppings please order again.")
      return false;
    }
  }
  return true;
}

function pushPizza(pizza){
  if(pizza){
    servePizza(preparePizza(pizza));
  }
}

greetCustomer("John Smith");
pizza1 = getPizzaOrder("Large", "Thin", ['ham', 'pineapple']);
pizza2 = getPizzaOrder("Small", "Thin", []);
pizza3 = getPizzaOrder("Medium", "thick", ['fish', 'chips']);

pushPizza(pizza1);
pushPizza(pizza2);
pushPizza(pizza3);

listToppingsAnd(pizzaToppings.slice(0,3))
