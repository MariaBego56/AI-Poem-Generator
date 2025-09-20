function createPoem(event) {
event.preventDefault();

alert("AI is creating a poem");

new Typewriter("#poem", {
  strings: "The poem will appear here",
  autoStart: true,
  delay: 5,
  cursor:"",
});
let poemElement= document.querySelector("#poem");

}

let promptFormElement= document.querySelector("#prompt-form");
promptFormElement.addEventListener("submit", createPoem);