function displayPoem(response){
  let poemElement = document.querySelector("#poem");
  poemElement.innerHTML = "";

new Typewriter("#poem", {
  strings: response.data.answer,
  autoStart: true,
  delay: 5,
  cursor:"",
});

}
function createPoem(event) {
event.preventDefault();

let themePoemPrompt = document.querySelector("#theme-poem-prompt");
let apiKey="79c10854b8bbfdaa4tfa826305864ob5";
let context ="you are a creative writer, specialised in short poems. + Follow user instructions. + Return EXACTLY 4 lines, each separated by a newline. + After the 4 lines, add a 5th line as a signature, strong: SheCodes AI";
let prompt =`User instructions: create a poem about ${themePoemPrompt.value}`;
let apiURL=`https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;



let poemElement = document.querySelector("#poem");
poemElement.innerHTML =`<span class="blink" id="poem-status"></span>`; 
document.querySelector("#poem-status").textContent = `I am writing a poem about ${themePoemPrompt.value}`;


axios.get(apiURL).then(displayPoem).catch(() => {
  poemElement.innerHTML = "Sorry. Something went wrong. Please try again";
});

}

let promptFormElement= document.querySelector("#prompt-form");
promptFormElement.addEventListener("submit", createPoem);