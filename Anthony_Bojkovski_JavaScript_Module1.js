// Developer Name: Anthony Bojkovski
// Purpose: Adding the functionality of the open and close button.

// Show / hide divs based on it's id
// Change button text based on it's current value
document.querySelector("#div1Button").addEventListener("click", (event) => {
  toggleDiv("div1", event.target.id); });
  document.querySelector("#div2Button").addEventListener("click", (event) => { toggleDiv("div2", event.target.id);
  });
  document.querySelector("#div3Button").addEventListener("click", (event) => {
  toggleDiv("div3", event.target.id); });

function toggleDiv(divId, buttonId) {
  const div = document.getElementById(divId);

  if (div.style.display == "none") {
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }

  const button = document.getElementById(buttonId);
  if (button.innerText == "CLOSE") {
    button.innerText = "OPEN";
  } else {
    button.innerText = "CLOSE";
  }
  
}
