let counter = 0;

/*while(counter <= 10) {
    if(counter%2 === 0) {
        console.log("pair");
    } else {
        console.log(counter);
    }
    counter++;
}*/

for(let i = 1; i <= 20; i++) {
    if(i%2 === 0) {
        console.log(`${i} is even.`);
    } else {
        console.log(`${i} is odd.`);
    }
}

let myName = "guilherme";

for(let i = 0; i < myName.length; i++) {
    if(myName[i] === "e") {
        console.log(`the number is ${3}`);
    } else {
        console.log(`the letter is ${myName[i]}`);
    }
}