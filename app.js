const date = 'Time to drink doffee: ' + new Date().getHours() + ':' + new Date().getMinutes()
const topArea = document.getElementById("top-area")

window.addEventListener("load", (event) => {
  event.preventDefault();
  topArea.append(date)
});

window.alert('welcome to Doffee Shop')
const options = document.getElementsByTagName("li")
for(let i = 0;i < options.length; i++ ){
  options[i].addEventListener("mouseover", (event) => {
    event.preventDefault();
    options[i].style.color = 'green'
  })

}


function changeBackground(color){
    document.body.style.backgroundColor = color; 
}

changeBackground('cream')
const heading = document.querySelector("#heading")

heading.style.color = "brown"

document.body.onload = addElement;

function addElement() {
  const newDiv = document.createElement("div");

  const newContent = document.createTextNode("Say hi to Doffee the Coffee!");

  newDiv.appendChild(newContent);
  const parent = document.getElementById('menu')
 const currentDiv = document.getElementById("menu-list");
 parent.insertBefore(newDiv, currentDiv);
}

const about = document.querySelector("#about")
const h2 = document.getElementById("h2").innerHTML = "Doffee Coffee"

const button = document.getElementById('btn')
const coffeeList = document.getElementById('coffee-list')
button.addEventListener("click", (event) => {
  const newListItem = document.createElement("li")
  console.log(newListItem)
  newListItem.innerHTML = 'hazelnut: $5:00'
  coffeeList.append(newListItem)
  options[options.length -1].addEventListener("mouseover", (event) => {
    event.preventDefault();
    options[options.length -1].style.color = 'green'
  })
})