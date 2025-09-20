function displayPoem(response){

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
let context ="you are a creative writer, specialised in short poems. + Follow user instructions. + Return EXACTLY 4 lines, each separated by a newline. + After the 4 lines, add a 5th line as a signature, strong: SheCodes";
let prompt =`User instructions: create a poem about ${themePoemPrompt.value}`;
let apiURL=`https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;



axios.get(apiURL).then(displayPoem);



let poemElement= document.querySelector("#poem");

}

let promptFormElement= document.querySelector("#prompt-form");
promptFormElement.addEventListener("submit", createPoem);