const pizzaToppings = ['sausage', 'peperoni', 'canadian bacon', 'spicy sausage', 'pineapple', 'olives', 'green peppers', 'tomatoes', 'bacon', 'tofu', 'ham'];

function toppingsAnd(toppings){
    //this function takes a list of toppings and formats them to there proper format in a sentence.
    let tops = "no toppings";
    if (toppings.length == 0){
        //If not toppings return 'no toppings'
        return tops;
    }else if (toppings.length == 1){
        //If 1 return the single topping
        return toppings[0];
    }else if (toppings.length == 2){
        //If 2 return top1 and top2 no commas required
        return toppings[0] + ' and ' + toppings[1];
    }else{
        //More then two topping then iterate through a for loop
        tops = toppings[0] + ', ';
        for (let i = 1; i < toppings.length -2; i++){
            tops+=toppings[i]+', ';
        };
        tops+= 'and ' + toppings[toppings.length -1];
    }
    return tops;
}

//Function tests!
console.log(toppingsAnd(pizzaToppings));        //All toppings
console.log(toppingsAnd(['ham', 'pineapple'])); //Two Toppings
console.log(toppingsAnd(['cheese']));           //One topping
console.log(toppingsAnd([]));                   //No Toppings
