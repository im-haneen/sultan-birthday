const claimButton =
  document.getElementById("claimButton");

const pass =
  document.getElementById("pass");


const messageButton =
  document.getElementById("messageButton");

const messageCloud =
  document.getElementById("messageCloud");

const closeMessage =
  document.getElementById("closeMessage");



/* =====================================
   CLAIM PASS
===================================== */

claimButton.addEventListener("click", () => {

  pass.classList.add("claimed-state");

});



/* =====================================
   OPEN MESSAGE
===================================== */

messageButton.addEventListener("click", () => {

  messageCloud.style.display = "block";

});



/* =====================================
   CLOSE MESSAGE
===================================== */

closeMessage.addEventListener("click", () => {

  messageCloud.style.display = "none";

});