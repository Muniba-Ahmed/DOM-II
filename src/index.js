import "./less/index.less";

// Your code goes here!

// 1: Load
window.onload = function (event) {
  console.log(` event ${event.type} fired! Ready to rumble!`);
  const heading = document.querySelector("h1");
  heading.textContent = "Lets get this Party Started!";

  //2: Key down
  window.addEventListener("keydown", () => {
    alert("GET YOUR RAGGEDY HANDS OFF MY SCREEN!!!");
  });
};
