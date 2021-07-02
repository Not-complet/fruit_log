let fruit_servings = 0;
let vegetable_servings = 0;
let goals = [fruit = 0, veggie = 0];
var goal_achieved = false;
function setGoals(){
    // fruits: 2-3 = 1 cup, 4-8 = 1 1/2 cup, 9-13 = 1 1/2 cup, 14-18 = 2 cups 
    // vegetables: 2-3 = 1 cup, 4-8 = 1 1/2 cups, 9-13 = 2 cups, 14-18 = 3 cups
    var header = "<h4 style='float: right;'> Enter your age </h4>"
    var input = "<input style='float: right; width: 20%;' type='number' class='form-control' id='age' placeholder='Enter your age here'>"
    var btn = "<button style='float:right;' class='btn btn-success' onclick='setAgeGoal()'>Confirm</button>"
    document.getElementById("input_div").innerHTML = "<br>"+ "<br>"+ header + "<br>"+ "<br>"+ input + "<br>"+"<br>"+ btn;
}
function reset(){
    fruit_servings = 0;
    vegetable_servings = 0;
    goals.fruit = 0;
    goals.veggie = 0;
    goal_achieved = false;
    document.getElementById("goal_achieved").innerHTML = "";
    document.getElementById("fruit_log").innerHTML = "";
    document.getElementById("vegetable_log").innerHTML = "";
    document.getElementById("goals").innerHTML ="";
}
function setAgeGoal(){
    age = document.getElementById("age").value;
    if(age == 3 || age==2){
        goals[fruit] = 1;
        goals[veggie] = 1;
        console.log(goals.fruit);
        console.log(goals.veggie);
    }
    if(age >= 4 && age <= 8){
        goals.fruit = 1.5;
        goals.veggie = 1.5;
        console.log(goals.veggie);
        console.log(goal.fruit);
    }
    if(age >=9 && age <= 13){
        goals.fruit = 1.5;
        goals.veggie = 2;
        console.log(goals.fruit);
        console.log(goals.veggie);
    }
    if(age >= 14 && age <= 18){
        goals.fruit = 2;
        goals.veggie = 3;
        console.log(goals.fruit);
        console.log(goals.veggie);
    }
    document.getElementById("input_div").innerHTML = "";
    document.getElementById("goals").innerHTML = "Fruit Goal: " + goals.fruit + " cups, Veggie goal: " + goals.veggie + " cups";
}
function check(){
    if(goals.fruit <= fruit_servings && goals.veggie <= vegetable_servings && goal_achieved != true){
        text = "<h1 id='new_text'>Good Job! You achieved your goal</h1>";
        document.getElementById("goal_achieved").innerHTML = text;
        goal_achieved = true;
        location.href = "#";
        location.href = "#goal_achieved";
    }
}
function addToFruit_1(){
    fruit_servings = fruit_servings + 0.75;
    Math.round(100 * fruit_servings) / 100;
    console.log(fruit_servings);
    document.getElementById("fruit_log").innerHTML = "Cups of fruit eaten: "+fruit_servings;
    check();
}
function addToFruit_2(){
    fruit_servings = fruit_servings + 0.60;
    Math.round(100 * fruit_servings) / 100;
    console.log(fruit_servings);
    document.getElementById("fruit_log").innerHTML = "Cups of fruit eaten: "+ fruit_servings; 
}
function addToFruit_3(){
    fruit_servings = fruit_servings + 1;
    Math.round(100*fruit_servings) / 100;
    console.log(fruit_servings);
    document.getElementById("fruit_log").innerHTML = "Cups of fruit eaten: "+ fruit_servings;
    check();
}
function addToFruit_4(){
    fruit_servings = fruit_servings + 0.80;
    Math.round(100*fruit_servings) / 100;
    console.log(fruit_servings);
    document.getElementById("fruit_log").innerHTML = "Cups of fruit eaten: "+ fruit_servings;
    check();
}
function addToFruit_5(){
    fruit_servings = fruit_servings + 1;
    Math.round(100*fruit_servings) / 100;
    console.log(fruit_servings);
    document.getElementById("fruit_log").innerHTML = "Cups of fruit eaten: "+ fruit_servings;
    check();
}
function addToFruit_6(){
    fruit_servings = fruit_servings + 1;
    Math.round(100*fruit_servings) / 100;
    console.log(fruit_servings);
    document.getElementById("fruit_log").innerHTML = "Cups of fruit eaten: "+ fruit_servings;
    check();
}
function addToFruit_7(){
    fruit_servings = fruit_servings + 1;
    Math.round(100*fruit_servings) / 100;
    console.log(fruit_servings);
    document.getElementById("fruit_log").innerHTML = "Cups of fruit eaten: "+ fruit_servings;
    check();
}
function addToFruit_8(){
    fruit_servings = fruit_servings + 0.75;
    Math.round(100*fruit_servings) / 100;
    console.log(fruit_servings);
    document.getElementById("fruit_log").innerHTML = "Cups of fruit eaten: "+ fruit_servings;
    check();
}
function addToFruit_9(){
    fruit_servings = fruit_servings + 1;
    Math.round(100*fruit_servings) / 100;
    console.log(fruit_servings);
    document.getElementById("fruit_log").innerHTML = "Cups of fruit eaten: "+ fruit_servings;
    check();
}
function addToVeggies(){
    vegetable_servings = vegetable_servings + 0.5;
    Math.round(100*vegetable_servings)/100;
    console.log(vegetable_servings);
    document.getElementById("vegetable_log").innerHTML = "Cups of veggies eaten: "+vegetable_servings;
    check();
}
function addToVeggies2(){
    vegetable_servings = vegetable_servings + 0.5;
    Math.round(100*vegetable_servings)/100;
    console.log(vegetable_servings);
    document.getElementById("vegetable_log").innerHTML = "Cups of veggies eaten: "+vegetable_servings;
    check();
}
function addToVeggies3(){
    vegetable_servings = vegetable_servings + 0.5;
    Math.round(100*vegetable_servings)/100;
    console.log(vegetable_servings);
    document.getElementById("vegetable_log").innerHTML = "Cups of veggies eaten: "+vegetable_servings;
    check();
}
function addToVeggies4(){
    vegetable_servings = vegetable_servings + 0.5;
    Math.round(100*vegetable_servings)/100;
    console.log(vegetable_servings);
    document.getElementById("vegetable_log").innerHTML = "Cups of veggies eaten: "+vegetable_servings;
    check();
}
function addToVeggies5(){
    vegetable_servings = vegetable_servings + 0.5;
    Math.round(100*vegetable_servings)/100;
    console.log(vegetable_servings);
    document.getElementById("vegetable_log").innerHTML = "Cups of veggies eaten: "+vegetable_servings;
    check();
}
function addToVeggies6(){
    vegetable_servings = vegetable_servings + 0.5;
    Math.round(100*vegetable_servings)/100;
    console.log(vegetable_servings);
    document.getElementById("vegetable_log").innerHTML = "Cups of veggies eaten: "+vegetable_servings;
    check();
}
function addToVeggies7(){
    vegetable_servings = vegetable_servings + 0.5;
    Math.round(100*vegetable_servings)/100;
    console.log(vegetable_servings);
    document.getElementById("vegetable_log").innerHTML = "Cups of veggies eaten: "+vegetable_servings;
    check();
}
function addToVeggies8(){
    vegetable_servings = vegetable_servings + 0.5;
    Math.round(100*vegetable_servings)/100;
    console.log(vegetable_servings);
    document.getElementById("vegetable_log").innerHTML = "Cups of veggies eaten: "+vegetable_servings;
    check();
}
function addToVeggies9(){
    vegetable_servings = vegetable_servings + 0.5;
    Math.round(100*vegetable_servings)/100;
    console.log(vegetable_servings);
    document.getElementById("vegetable_log").innerHTML = "Cups of veggies eaten: "+vegetable_servings;
    check();
}