function addCommandtoOutput (command) {
  let output = document.getElementById('output');
  let input = document.getElementById("input-user");
  output.innerHTML += `<div id="input-line">
                        <span id="input-guest">guest@ubuntu</span>
                          <span id="input-white">:</span>
                            <span id="input-blue">~</span>
                              <span id="input-dollar">$</span>
                                <span id="input-line">${command}</span>
                       </div>`;
  
}

function scrollToBottom() {
  // Get the current scroll position
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  // Get the height of the document
  const documentHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
  // Calculate the target scroll position (the bottom of the page)
  const targetScrollPosition = documentHeight - window.innerHeight;
  // Smoothly scroll to the target position
  window.scrollTo({
    top: targetScrollPosition,
    behavior: 'smooth'
  });
}
function removeElementFromHead (tagName, includedText) {
  let currFontLink = document.getElementsByTagName(tagName);
  let fontElement = "";
  for (let i = 0; i < currFontLink.length; i++) {
    fontElement = currFontLink[i];
    if (fontElement.innerHTML.includes(includedText)) {
      // This is the element that contains the import statement
    }
  }
  let headElement = fontElement.parentNode;
  headElement.removeChild(fontElement);
}
function addFontLinkAndStyleElementToHead (element) {
  //add link
  let newFontLink = document.createElement("link");
  newFontLink.setAttribute("href", "https://fonts.googleapis.com/css2?family=" + element + "&display=swap");
  newFontLink.setAttribute("rel", "stylesheet");
  document.head.appendChild(newFontLink);
  //add style
  let newStyle = document.createElement("style");
  newStyle.innerHTML = " @import url('https://fonts.googleapis.com/css2?family=" + element + "&display=swap'); ";
  document.head.appendChild(newStyle);
}
function changeThemeBackground (newThemeBG) {
  let body = document.body;
  let cli = document.getElementById("cli");
  let macro = document.getElementById("macro");
  let main = document.getElementById("main");
  let output = document.getElementById("output");
  let input = document.getElementById("input-line");
  body.style.backgroundColor = newThemeBG;
  cli.style.backgroundColor = newThemeBG;
  macro.style.backgroundColor = newThemeBG;
  main.style.backgroundColor = newThemeBG;
  output.style.backgroundColor = newThemeBG;
  input.style.backgroundColor = newThemeBG;
}
function changeThemeForeground (newThemeFG) {
  let body = document.body;
  let cli = document.getElementById("cli");
  let macro = document.getElementById("macro");
  let main = document.getElementById("main");
  let output = document.getElementById("output");
  let input = document.getElementById("input-line");
  body.style.color = newThemeFG;
  cli.style.color = newThemeFG;
  macro.style.color = newThemeFG;
  main.style.color = newThemeFG;
  output.style.color = newThemeFG;
  input.style.color = newThemeFG;
}
function changeCSSFontFamily (newFamily) {
  let cli = document.getElementById("cli");
  let macro = document.getElementById("macro");
  let main = document.getElementById("main");
  let output = document.getElementById("output");
  let input = document.getElementById("input-line");
  cli.style.fontFamily = newFamily;
  macro.style.fontFamily = newFamily;
  main.style.fontFamily = newFamily;
  output.style.fontFamily = newFamily;
  input.style.fontFamily = newFamily;  
}