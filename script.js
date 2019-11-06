let name = "Mitch Cuckovich";
let age = 25;
let birthday = "January 24";
let detroitGC = true;
if (name === "Mitch Cuckovich" && !detroitGC) {
  console.log("My name is Mitch Cuckovich and I am a student at Grand Circus in Detroit, Michigan. I am currently 25 years old and my birthday is one January 24.");
} else {
  console.log("My name is Mitch Cuckovich and I am a student at Grand Circus in Grand Rapids, Michigan. I am currently 25 years old and my birthday is one January 24.");
}
let lifeEvents = ["I was born in Troy, Michigan.", "I went to Hope College.", "I went to Junior Olympics when I was 10 years old. I placed 14th in the nation in the 800 meter event.", "I\'m a graduate of the front-end bootcamp."]; 
for (let i = 0; i<lifeEvents.length; i++) {
  console.log(lifeEvents[i]);
}

let counter = 0;
let randomNumber = (Math.floor(Math.random() * 10));  

while(true) {
  randomNumber = (Math.floor(Math.random() * 10));  
  if (randomNumber !== 5) {
   counter++;
   console.log(randomNumber+ " !==5"); 
  } else {
    counter++;
    console.log("5===5. It took " +counter+ " iterations to randomly generate the number 5.");
    break;
  }
}
