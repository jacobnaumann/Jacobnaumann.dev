let history = []; // An array to store the history of commands
let currentIndex = history.length; //variable to store the current index in the history array

document.addEventListener("keydown", function(event) {
  let input = document.getElementById("input-user");
  switch (event.key) {
    case "Enter":
      if (input.value == "") {
        break;
      } else {
        history.push(input.value);
        processCommand();
        break;
      }
    case "ArrowUp":
      event.preventDefault();
      // Decrement the current index
      currentIndex--;  
      // If the current index is less than 0, set it to the last item in the history array
      if (currentIndex < 0) {
        currentIndex = history.length - 1;
      }
      input.value = history[currentIndex];
      break;      
    case "ArrowDown":
      event.preventDefault();
      // Increment the current index
      currentIndex++;  
      // If the current index is greater than or equal to the length of the history array, set it to 0
      if (currentIndex >= history.length) {
        currentIndex = 0;
      }  
      // Get the command from the history array and set it as the value of the input field
      input.value = history[currentIndex];
  }
});

function processCommand() {
  const input = document.getElementById("input-user");
  const output = document.getElementById("output");
  const macro = document.getElementById("macro");
  const main = document.getElementById("main");
  //create variable 'command' and set it to the input
  var command = input.value;
  var lowercaseCommand = command.toLowerCase();
  //add the command to 'output' and set new line
  //addCommandtoOutput(command);
  
  addCommandtoOutput(command);
  // Parse and execute the user's command
  if (lowercaseCommand === "clear") {
    clear();
  } else if (lowercaseCommand === "date") {
    // Display the current date and time
    dateNow();
  } else if (lowercaseCommand === "help") {
    help();
  } else if (lowercaseCommand.startsWith("theme ")) {
    var chosenTheme = command.substring(6, command.length);
    theme(chosenTheme);
  } else if (lowercaseCommand.startsWith("font ")) {
    var chosenFont = command.substring(5, command.length);
    font(chosenFont);
  } else {
    // Display an error message for unknown commands 
    output.innerHTML += `<div id="input-line">Command '${command}' not found</div>`;
  }
  input.value = "";
  scrollToBottom();
}
