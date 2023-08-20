document.addEventListener("DOMContentLoaded", () => {
    function createParagraph() {
      const para = document.createElement("p");
      para.textContent = "Welcome!";
      document.body.appendChild(para);
    }
  
    const buttons = document.querySelectorAll("button");
  
    for (const button of buttons) {
      button.addEventListener("click", createParagraph);
    }
  });

  const para = document.querySelector("button");

para.addEventListener("click", updateName);

function updateName() {
  const name = prompt("Enter a new name");
  para.textContent = `Player 1: ${name}`;
}
