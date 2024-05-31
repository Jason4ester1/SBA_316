function changeBackground(cream){
    document.body.style.background = color; 
}
const heading = document.querySelector("#heading")

heading.style.color = "brown"
//for (let i = 0,i < let; i++ );

//const coffee = document.querySelector(about);

// const menu = document.querySelector(menu);
// console.log(menu)

// const newImg = document.createElement("img");
// newImg.src = "https://www.google.com/imgres?q=coffee%20pictures&imgurl=https%3A%2F%2Fi.dailymail.co.uk%2Fi%2Fpix%2Fscaled%2F2015%2F03%2F09%2F0C07226D00000578-0-image-a-23_1425939890281.jpg&imgrefurl=https%3A%2F%2Fwww.dailymail.co.uk%2Fhealth%2Farticle-2987126%2FIt-good-brain-waistline-bad-bones-kidneys-daily-coffee-really-doing-body.html&docid=XkQ6i8EdDhWqxM&tbnid=wA9QBqHt3WXtgM&vet=12ahUKEwjL67TrnbiGAxU1FlkFHaZBBy0QM3oECCsQAA..i&w=1908&h=1146&hcb=2&ved=2ahUKEwjL67TrnbiGAxU1FlkFHaZBBy0QM3oECCsQAA"
// console.log(newImg)

//menu.appendChild(newImg)


//'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2l5NGN5aXQwcnZzdDFnMmF2ZjN0eml6bjBqMW13eWc1a3hyc2pwZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/M4ecx9P2jI4tq/giphy.webp')
document.body.onload = addElement;

function addElement() {
  //create a new div element
  const newDiv = document.createElement("div");

 // and give it some content
  const newContent = document.createTextNode("Say hi to Doffee the Coffee!");

 // add the text node to the newly created div
  newDiv.appendChild(newContent);

  //add the newly created element and its content into the DOM
 const currentDiv = document.getElementById("div1");
 document.body.insertBefore(newDiv, currentDiv);
}

const about = document.querySelector("#about")
const h2 = document.getElementById("h2").innerHTML = "Doffee Coffee"
about.appendChild.h2
console.log(h2)

document.getElementById("#").addEventListener("click", displayDate);
  
