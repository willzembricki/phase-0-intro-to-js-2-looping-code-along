// Code your solutions in this file
//for (let age = 30; age < 40; age++) {
//    console.log(`I'm ${age} years old. Happy birthday to me!`);
  
 // } 


function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        debugger;
    }

    return gifts;
}

wrapGifts(gifts);


function writeCards(name,type){
    const msgArray = [];
    for (let i =0; i < name.length; i++){
       msgArray[i] = `Thank you, ${name[i]}, for the wonderful ${type} gift!`

    }
    return msgArray;
}


function countDown(i){
while (i>=0){
    console.log(i)
    i--
}}