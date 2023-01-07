// Document Object Model

// getElementById()
const banner = document.getElementById("banner");
// console.log(banner);
// console.dir(banner);

// getElementsByTagName()
const paragraphs = document.getElementsByTagName("p");
// console.log(paragraphs);

// getElementsByClassName()
const children = document.getElementsByClassName("child");
// console.log(children);

// querySelector()
const bannerQuery = document.querySelector("#banner");
// console.log(bannerQuery);

// querySelectorAll()
const childrenQuery = document.querySelectorAll("div.child");
// console.log(childrenQuery);

// 
const heading = document.querySelector("h1");
// element.textContent
heading.textContent = "DOM";

const container = document.querySelector(".container");
// element.innerText
// console.log(container.textContent);
// console.log(container.innerText);
// container.innerText = "This is my sample text";

// element.innerHTML
// console.log(container.innerHTML);
container.innerHTML += "<h2>The new text</h2>";

// Attributes
const link1 = document.querySelector("ul li a");
// element.getAttribute();
// console.log(link1.getAttribute("href"));
// element.setAttribute(attributeName, value);
link1.setAttribute("href", "https://google.com");
link1.setAttribute("class", "link");

const links = document.querySelectorAll("ul li a");
links[1].setAttribute("href", "https://yahoo.com");

// for(let link of links) {
//     link.innerText = "I AM A LINK!!!";
// }

// Element style
const heading3 = document.querySelector("h3");
// console.dir(heading3);
// font-size
heading3.style.fontSize = "48px";
heading3.style.color = "#462f5d";
heading3.style.fontFamily = "Arial";

// console.log(window.getComputedStyle(link1).color);

// Classes
const demo = document.getElementById("demo");
// demo.setAttribute("class", "green");
// demo.setAttribute("class", "border");
// element.classList();
// console.log(demo.classList);
demo.classList.add("green", "border");
demo.classList.remove("green");

// console.log(demo.classList.contains("green")); // false
// console.log(demo.classList.contains("border")); // true

demo.classList.toggle("green");

// toggle behavior
// if (demo.classList.contains("green")) {
//     demo.classList.remove("green");
// } else {
//     demo.classList.add("green");
// }

// Traversing Parent/Child/Sibling Elements
const listItem = link1.parentElement;
// console.log(listItem);

const list = listItem.parentElement;
// console.log(list.children);

// returns an element
// console.log(list.previousElementSibling);
// console.log(list.nextElementSibling);

// returns a Node
// console.log(list.previousSibling);
// console.log(list.nextSibling);

// ============================================
// Create a new Element
// ============================================
const menu = document.querySelector("#menu");

// creates a blank element <li></li>
const item = document.createElement("li");
// console.dir(item);
item.innerText = "I am a new li element";
item.classList.add("green");
menu.appendChild(item); // for innerText

const item2 = document.createElement("li");
const anchor = document.createElement("a");

// element.append = last child
anchor.append("Click Me!");
anchor.href = "https://bing.com";

item2.append(anchor);
menu.append(item2, 'another text');

const item3 = document.createElement("li");
item3.append("I will be the first child");
// element.append = first child
menu.prepend(item3);

const before = document.createElement("li");
const after = document.createElement("li");
before.append("I am before green");
after.append("I am after green");

item.insertAdjacentElement("beforebegin", before);
item.insertAdjacentElement("afterend", after);

// Remove child
// parentElement.removeChild()
const firstItem = document.querySelector("#menu li");
menu.removeChild(firstItem);

// Remove an element
// element.remove()
demo.remove();
console.log(demo.parentElement);






