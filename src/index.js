import "./less/index.less";

// Your code goes here!

// Load
window.onload = function (event) {
  console.log(` event ${event.type} fired! Ready to rumble!`);
  const heading = document.querySelector("h1");
  heading.textContent = " Fun Bus Partayyyy!";

  // Key down
  window.addEventListener("keydown", () => {
    const text = document.querySelector("p");
    text.style.visibility = "hidden";
  });

  window.addEventListener("keyup", () => {
    const text = document.querySelector("p");
    text.style.visibility = "visible";
  });
};

//Copy
window.addEventListener("copy", () => {
  alert("THIS IS INTELLECTUAL PROPERTY THEFT! STOP STEALING MY STUFF BOZO");
  console.log("stealing is bad ):");
});

//Click
document.body.addEventListener("click", (event) => {
  event.target.style.color = "limegreen";
  const text1 = document.querySelector("p");
  //   text1.style.visibility = "visible";
});

// Double-Click
document.body.addEventListener("dblclick", (event) => {
  event.target.classList.toggle("mirror");
  event.target.style.color = "black";
});

//MouseEnter & MouseLeave

const destinations = document.querySelectorAll(".destination");
for (let destination of destinations) {
  destination.addEventListener("mouseenter", (event) => {
    destination.style.border = "10px dotted teal";
  });
}

for (let destination of destinations) {
  destination.addEventListener("mouseleave", (event) => {
    destination.style.border = "none";
  });
}

//Mousemove
document.body.addEventListener("mousemove", (event) => {
  const { clientX, clientY } = event;
  event.preventDefault();
  //   console.log(`mouse is at ${clientX}, ${clientY}`);
});
