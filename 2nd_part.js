let userName = "gui";
let dateCurrent = "11/01/2021";
let age = 20;
let language = "French";



/*if(language === "english") {
    console.log("Hello world");
} else if(language === "Portuguese") {
    console.log("olá mundo");
} else if(language === "French") {
    console.log("Bonjour");
} else {
    console.log("Heyo world");
}*/

switch(language) {
    case "english":
        console.log("Hello world");
    break;
    case "Portuguese":
        console.log("olá mundo");
    break;   
    case "French":
        console.log("Bonjour");
    break;
    default:
        console.log("Heyo world");    
}

if(age >= 21) {
    console.log("You can drink in the USA, Yey!");
} else {
    console.log("sorry pal, go get a pepsi.");
}

let numberOne = 3; 
let numberTwo = 4;

if(numberOne > numberTwo) {
    console.log("one is greater than 2");
} else if(numberOne < numberTwo) {
    console.log("Two is greater than one");
} else {
    console.log("they are equal");
}

let charName = "Sansa";


switch(charName) {
    case "Khal Drogo":
        console.log("House Dothraki");
        break;
    case "Jon Snow":
        console.log("House Stark");
        break;
    default:
        console.log("I only know star wars dude");        
}