//DOM - Document Object Model
//Elements, Nodes, Selectors, Create, Append, Remove
// const body = document.querySelector("body");
// console.log(body);
const view1 = document.getElementById("view1");
console.log(view1);

//Important! With QuerySelector # for indicating an ID, . for class!
const view2 = document.querySelector("#view2");
console.log(view2);
view2.style.display = "none";
view1.style.display = "flex";

const views = document.getElementsByClassName("view");
console.log(views);
//returns: HTMLCollection(2) [section#view1.view.view1, section#view2.view.view2, view1: section#view1.view.view1, view2: section#view2.view.view2]
//Collection has elements in it

const sameViews = document.querySelectorAll(".view");
console.log(sameViews);
//NodeList(2) [section#view1.view.view1, section#view2.view.view2]
//NodeList has nodes in it

const divs = view1.querySelectorAll("div");
console.log(divs);
//NodeList(12) [div, div, div, div, div, div, div, div, div, div, div, div]

const sameDivs = view1.getElementsByTagName("div");
console.log(sameDivs);
//HTMLCollection(12) [div, div, div, div, div, div, div, div, div, div, div, div]

const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)");
console.log(evenDivs);
evenDivs.forEach((e) => {
  e.style.color = "yellow";
});

const oddDivs = view1.querySelectorAll("div:nth-of-type(2n-1)");
console.log(oddDivs);
for (let i = 0; i < oddDivs.length; i++) {
  oddDivs[i].style.backgroundColor = "darkblue";
}

const lastDiv = view1.querySelector("div:last-of-type");
lastDiv.style.backgroundColor = "darkred";
console.log(lastDiv);

const navText = document.querySelector("nav h1");
console.log(navText); //<h1>My Page</h1>
navText.textContent = "Hello World"; //<h1>Hello World</h1>

const navbar = document.querySelector("nav");
navbar.innerHTML = "<h1>Hello!</h1> <p>this should align right.</p>";
console.log(navbar); //<nav><h1>Hello!</h1> <p>this should align right.</p></nav>
navbar.style.justifyContent = "space-between";

console.log(evenDivs); //NodeList(6) [div, div, div, div, div, div]
console.log(evenDivs[0]); //<div style="color: yellow;">2</div>
console.log(evenDivs[0].parentElement); //<section id="view1" class="view view1" style="display: flex;"></section>
console.log(evenDivs[0].parentElement.children); //HTMLCollection(12) [div, div, div, div, div, div, div, div, div, div, div, div]
console.clear();
console.log(evenDivs[0].parentElement.childNodes); //NodeList(25) [text, div, text, div, text, div, text, div, text, div, text, div, text, div, text, div, text, div, text, div, text, div, text, div, text]
console.log(evenDivs[0].parentElement.lastChild); //#text
console.log(evenDivs[0].parentElement.lastElementChild); //<div style="color: yellow; background-color: darkred;">12</div>
console.log(evenDivs[0].parentElement.firstChild); //#text
console.log(evenDivs[0].parentElement.firstElementChild); //<div style="background-color: darkblue;">1</div>

//remove elements from page
view1.style.display = "none";
view2.style.display = "flex";
view2.style.flexDirection = "row";
view2.style.flexWrap = "wrap";
view2.style.margin = "10px";

while (view2.lastChild) {
  view2.lastChild.remove();
}

//function declaration create divs
const createDivs = (parent, iter) => {
  const newDiv = document.createElement("div");
  newDiv.textContent = iter;
  newDiv.style.backgroundColor = "#222";
  newDiv.style.width = "100px";
  newDiv.style.height = "100px";
  newDiv.style.margin = "10px";
  newDiv.style.display = "flex";
  newDiv.style.justifyContent = "center";
  newDiv.style.alignItems = "center";
  parent.append(newDiv);
};

//creating multiple divs
for (let i = 1; i <= 12; i++) {
  createDivs(view2, i);
}
