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
