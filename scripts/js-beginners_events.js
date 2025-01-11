const view = document.querySelector("#view2");
const div = view.querySelector("div");
const h2 = div.querySelector("h2");
console.log(view);

//Syntax: addEventListener(event, function, useCapture)
const doSomething = () => {
  alert("doing something");
};

h2.addEventListener("click", doSomething, false); //false is default value
h2.removeEventListener("click", doSomething, false);

//anonymus function cant be removed

//with arrow function
// h2.addEventListener("click", (event) => {
//   console.log(event.target);
//   event.target.textContent = "Clicked";
// });

//with traditional function
// h2.addEventListener("click", function (event) {
//   console.log(event.target);
//   event.target.textContent = "Clicked";
// });

// readystatechange event - dom is loaded - use bevor regular code and interacting with the page
document.addEventListener("readystatechange", (e) => {
  if (e.target.readyState === "complete") {
    console.log("readyState: complete");
    initApp();
  }
});

// initApp = () => {
//   const view = document.querySelector("#view2");
//   const div = view.querySelector("div");
//   const h2 = div.querySelector("h2");
//   view.addEventListener("click", (event) => {
//     view.style.backgroundColor = "purple";
//   });
//   div.addEventListener("click", (event) => {
//     div.style.backgroundColor = "blue";
//   });
//   h2.addEventListener("click", (event) => {
//     event.target.textContent = "Clicked";
//   });
// };

//event bubbling is when you work from the inside to the outside
//by clicking just on the h2, all eventListener trigger because of useCapture is false
//useCapture true: works from the out to the in

// initApp = () => {
//   const view = document.querySelector("#view2");
//   const div = view.querySelector("div");
//   const h2 = div.querySelector("h2");
//   view.addEventListener(
//     "click",
//     (event) => {
//       event.stopPropagation();
//       view.style.backgroundColor = "purple";
//     },
//     true
//   );
//   div.addEventListener(
//     "click",
//     (event) => {
//       div.style.backgroundColor = "blue";
//     },
//     true
//   );
//   h2.addEventListener(
//     "click",
//     (event) => {
//       event.target.textContent = "Clicked";
//     },
//     true
//   );
// };
// initApp = () => {
//   const view = document.querySelector("#view2");
//   const div = view.querySelector("div");
//   const h2 = div.querySelector("h2");
//   view.addEventListener(
//     "click",
//     (event) => {
//       event.stopPropagation();
//       view.classList.add("purple");
//       view.classList.remove("darkblue");
//       view.classList.toggle("purple");
//       view.classList.toggle("darkblue");
//     },
//     false
//   );
//   div.addEventListener(
//     "click",
//     (event) => {
//       div.classList.toggle("blue");
//       div.classList.toggle("black");
//     },
//     false
//   );
//   h2.addEventListener(
//     "click",
//     (event) => {
//       const myText = event.target.textContent;
//       event.target.textContent = myText.includes("My 2nd View")
//         ? "Clicked"
//         : "My 2nd View";
//     },
//     false
//   );

//   const nav = document.querySelector("nav");
//   nav.addEventListener("mouseover", () => {
//     nav.classList.add("height100");
//   });
//   nav.addEventListener("mouseout", () => {
//     nav.classList.remove("height100");
//   });
// };

//Form
//Default Form Action is to reload the page when submitting
const initApp = () => {
  const view3 = document.querySelector("#view3");
  const myForm = view3.querySelector("#myForm");
  myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("submit event");
    console.log(e);
    console.log(e.timeStamp);
    console.log(e.target[0]);
    console.log(e.target[0].value);
    console.log(e.target[1]);
  });
};
