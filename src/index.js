function createPoem(event) {
event.preventDefault();

alert("AI writing a poem");

}

let promptFormElement= document.querySelector("#prompt-form");
promptFormElement.addEventListener("submit", createPoem);