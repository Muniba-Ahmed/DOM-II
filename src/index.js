import "./less/index.less";

// Your code goes here!

// Load
window.onload = function (event) {
  console.log(` event ${event.type} fired! Ready to rumble!`);
  const heading = document.querySelector("h1");
  heading.textContent = " Fun Bus Partayyyy!";

  // Key down
  window.addEventListener("keydown", () => {
    alert(
      "THERES NOTHING MORE TO SEE. GET YOUR RAGGEDY HANDS OFF MY SCREEN!!!"
    );
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
});

// Double-Click
document.body.addEventListener("dblclick", (event) => {
  event.target.classList.toggle("mirror");
});

//Mouse Move & Mouse Over
