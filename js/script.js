const elem = document.querySelector(".list");

console.log(elem.children);
elem.append([...elem.children].map((child) => (child.style.color = "tomato")));
