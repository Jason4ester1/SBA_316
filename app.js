function changeBackground(cream){
    document.body.style.background = color; 
}
const heading = document.querySelector("#heading")

heading.style.color = "brown"

document.body.onload = addElement;

function addElement() {
  const newDiv = document.createElement("div");

  const newContent = document.createTextNode("Say hi to Doffee the Coffee!");

  newDiv.appendChild(newContent);

 const currentDiv = document.getElementById("div1");
 document.body.insertBefore(newDiv, currentDiv);
}

const about = document.querySelector("#about")
const h2 = document.getElementById("h2").innerHTML = "Doffee Coffee"
about.appendChild.h2
console.log(h2)

document.getElementById("#").addEventListener("click", displayDate);
  