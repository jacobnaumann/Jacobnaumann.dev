function clear() {
  let output = document.getElementById("output");
  let main = document.getElementById("main");
  output.innerHTML = "";
  main.innerHTML = "";
}
function dateNow() {
  const date = new Date();
  let dateString = date.toString();
  output.innerHTML += `      <div id="input-line">
  <span id="anon-guest" style="color:#38cf12">anon-guest@ubuntu</span>
    <span id="input-white" style="color:#ffffff">:</span>
      <span id="input-blue" style="color:#3227d4">~</span>
        <span id="input-white" style="color:#ffffff">$</span>    
            ${dateString}</div>`;
}
function help() {
  output.innerHTML += `<div id="input-line">Help Menu</div>`;
}
function theme(inputVal) {
  const lowercaseVal = String(inputVal).toLowerCase();
  console.log(lowercaseVal);
  fetch('./src/json/themes.json')
    .then(response => response.json())
    .then(themes => {        
      // load json into a variable
      const theme_data = themes;
      // check if theme exists 
      let exists = false;
      for (let i = 0; i < theme_data.length; i++) {
        if (String(theme_data[i].name).toLowerCase() === lowercaseVal) {
          exists = true;
          break;
        }
      }
      // if exists, do this
      if (exists) {
        for (let i = 0; i < theme_data.length; i++) {
          const lowercaseName = String(theme_data[i].name).toLowerCase();
          if (lowercaseName === lowercaseVal) {
            // print theme name to console
            console.log(theme_data[i]);
            // change style of page to json entry properties
            changeThemeBackground(String(theme_data[i].background));
            changeThemeForeground(String(theme_data[i].foreground));
            output.innerHTML += `<div id="input-line">Theme successfully change to '${inputVal}'!</div>`
          }
        }
      } else if (lowercaseVal === 'list') {
        output.innerHTML += `<div id="input-line">Here is a list of available themes.  Type 'theme [themeName]' to apply.</div>`;
        // store all values with a key of "name" in a variable
        const nameValues = theme_data.map(obj => obj["name"]);
        // console array containing all values
        console.log(nameValues);
        for (let i = 0; i < nameValues.length; i++) {
          if (i == nameValues.length - 1) {
            const lowercaseNameValue = nameValues[i].toLowerCase();
            output.innerHTML += `<span>${lowercaseNameValue}</span>`;
          } else {
            const lowercaseNameValue = nameValues[i].toLowerCase();
            output.innerHTML += `<span>${lowercaseNameValue}, </span>`;
          }
        }
      } else {
        output.innerHTML += `<div id="input-line">Sorry, no theme '${inputVal}' exists.  For a list of themes, type 'theme list'.</div>`;
      }
    });
}
function font(inputVal) {
  const lowercaseVal = String(inputVal).toLowerCase();
  console.log(lowercaseVal);
  fetch('./src/json/fonts.json')
    .then(response => response.json())
    .then(fonts => {        
      // load json into a variable
      const fonts_data = fonts;
      // check if font exists 
      let exists = false;
      for (let i = 0; i < fonts_data.length; i++) {
        if (String(fonts_data[i].name).toLowerCase() === lowercaseVal) {
          exists = true;
          break;
        }
      }
      // if exists, do this
      if (exists) {
        for (let i = 0; i < fonts_data.length; i++) {
          const lowercaseName = String(fonts_data[i].name).toLowerCase();
          if (lowercaseName === lowercaseVal) {
            // change font of page to json entry properties
            //Remove the font-specific <link> line of code from <head> section (will add it later in the function)
            removeElementFromHead("link", "https://fonts.googleapis.com/css2?");
            //Now remove <style> code from the <head> section (will add it later in the function)
            removeElementFromHead("style", "@import");
            //Now add the new font-specific <link> and <style> elements to the <head> section
            addFontLinkAndStyleElementToHead(String(fonts_data[i].name));
            output.innerHTML += `<div id="input-line">Font successfully change to '${inputVal}'!</div>`
          }
        }
      } else if (lowercaseVal === 'list') {
        output.innerHTML += `<div id="input-line">Here is a list of available fonts.  Type 'font [fontName]' to apply.</div>`;
        // store all values with a key of "name" in a variable
        const nameValues = fonts_data.map(obj => obj["name"]);
        // console array containing all values
        console.log(nameValues);
        for (let i = 0; i < nameValues.length; i++) {
          if (i == nameValues.length - 1) {
            const lowercaseNameValue = nameValues[i].toLowerCase();
            output.innerHTML += `<span>${lowercaseNameValue}</span>`;
          } else {
            const lowercaseNameValue = nameValues[i].toLowerCase();
            output.innerHTML += `<span>${lowercaseNameValue}, </span>`;
          }
        }
      } else {
        output.innerHTML += `<div id="input-line">Sorry, no font '${inputVal}' exists.  For a list of fonts, type 'font list'.</div>`;
      }
    });
}