// Style Rules T=Top, R=Right, B=Bottom, L=Left
let kenKenRules = [
  ["8×=1:T-BL,2:TRB-", , "4+=3:T-BL,4:TRB-"],
  ["10+=5:T-BL,6:TR--,10:-RBL", , "4×=7:T--L,8:TRB-,11:-RBL"],
  ["1=9:TRBL", , , "11+=12:TR-L,15:T-BL,16:-RB-"],
  ["3+=13:T-BL,14:TRB-"],
];
let boxNumber = 0;

//kenKenRules.forEach(myFunction)
for (let rowIndex = 0; rowIndex < kenKenRules.length; rowIndex++) {
  for (let colIndex = 0; colIndex < kenKenRules[rowIndex].length; colIndex++) {
    ++boxNumber;
    let value = `${kenKenRules[rowIndex][colIndex]}`;
    let colValue = "undefined";
    let colNum = 0;
    let colStyle = "undefined";
    let colStyleArray = [];
    if (value != "undefined") {
      colValue = getKenKenMathRuleText(value);
      colNum = getKenKenColumnTextNumber(value);
      //colValue = value.slice(0, value.indexOf("="));
      colStyle = value.slice(value.indexOf("=") + 1);
      colStyleArray = colStyle.split(",");
      console.log(`colValue=${colValue} \n colStyle=${colStyle} \n boxNumber=${boxNumber}`);
      console.log(`Row [${rowIndex}] Column [${colIndex}] = ${colValue}`);
      applyGridCageText(colNum*1, colValue);
      for (let gridCageStyleIndex = 0; gridCageStyleIndex < colStyleArray.length; gridCageStyleIndex++) {
        let boxNum = getKenKenColumnTextNumber(colStyleArray[gridCageStyleIndex]);
        let styleRule = getKenKenStyleRule(colStyleArray, gridCageStyleIndex);
        applyGridCageStyling(boxNum*1, styleRule);
      }
    }
  }
}

function applyGridCageText(boxNumber, textValue) {
  switch(boxNumber) {
    case 1:
      gridPrompt1 = document.getElementById("prompt-1");
      gridPrompt1.innerText = textValue;
      break;
    case 2:
      gridPrompt2 = document.getElementById("prompt-2");
      gridPrompt2.innerText = textValue;
      break;
    case 3:
      gridPrompt3 = document.getElementById("prompt-3");
      gridPrompt3.innerText = textValue;
      break;
    case 4:
      gridPrompt4 = document.getElementById("prompt-4");
      gridPrompt4.innerText = textValue;
      break;
    case 5:
      gridPrompt5 = document.getElementById("prompt-5");
      gridPrompt5.innerText = textValue;
      break;
    case 6:
      gridPrompt6 = document.getElementById("prompt-6");
      gridPrompt6.innerText = textValue;
      break;
    case 7:
      gridPrompt7 = document.getElementById("prompt-7");
      gridPrompt7.innerText = textValue;
      break;
    case 8:
      gridPrompt8 = document.getElementById("prompt-8");
      gridPrompt8.innerText = textValue;
      break;
    case 9:
      gridPrompt9 = document.getElementById("prompt-9");
      gridPrompt9.innerText = textValue;
      break;
    case 10:
      gridPrompt10 = document.getElementById("prompt-10");
      gridPrompt10.innerText = textValue;
      break;
    case 11:
      gridPrompt11 = document.getElementById("prompt-11");
      gridPrompt11.innerText = textValue;
      break;
    case 12:
      gridPrompt12 = document.getElementById("prompt-12");
      gridPrompt12.innerText = textValue;
      break;
    case 13:
      gridPrompt13 = document.getElementById("prompt-13");
      gridPrompt13.innerText = textValue;
      break;
    case 14:
      gridPrompt14 = document.getElementById("prompt-14");
      gridPrompt14.innerText = textValue;
      break;
    case 15:
      gridPrompt15 = document.getElementById("prompt-15");
      gridPrompt15.innerText = textValue;
      break;
    case 16:
      gridPrompt16 = document.getElementById("prompt-16");
      gridPrompt16.innerText = textValue;
      break;
  }
}

function applyGridCageStyling(boxNumber, styleRule) {

  let border = "5px solid black";

  switch (boxNumber) {
    case 1:
      gridBox1 = document.getElementById("box1");
      applyStyle(gridBox1, styleRule, border);
      break;
    case 2:
      gridBox2 = document.getElementById("box2");
      applyStyle(gridBox2, styleRule, border);
      break;
    case 3:
      gridBox3 = document.getElementById("box3");
      applyStyle(gridBox3, styleRule, border);
      break;
    case 4:
      gridBox4 = document.getElementById("box4");
      applyStyle(gridBox4, styleRule, border);
      break;
    case 5:
      gridBox5 = document.getElementById("box5");
      applyStyle(gridBox5, styleRule, border);
      break;
    case 6:
      gridBox6 = document.getElementById("box6");
      applyStyle(gridBox6, styleRule, border);
      break;
    case 7:
      gridBox7 = document.getElementById("box7");
      applyStyle(gridBox7, styleRule, border);
      break;
    case 8:
      gridBox8 = document.getElementById("box8");
      applyStyle(gridBox8, styleRule, border);
      break;
    case 9:
      gridBox9 = document.getElementById("box9");
      applyStyle(gridBox9, styleRule, border);
      break;
    case 10:
      gridBox10 = document.getElementById("box10");
      applyStyle(gridBox10, styleRule, border);
      break;
    case 11:
      gridBox11 = document.getElementById("box11");
      applyStyle(gridBox11, styleRule, border);
      break;
    case 12:
      gridBox12 = document.getElementById("box12");
      applyStyle(gridBox12, styleRule, border);
      break;
    case 13:
      gridBox13 = document.getElementById("box13");
      applyStyle(gridBox13, styleRule, border);
      break;
    case 14:
      gridBox14 = document.getElementById("box14");
      applyStyle(gridBox14, styleRule, border);
      break;
    case 15:
      gridBox15 = document.getElementById("box15");
      applyStyle(gridBox15, styleRule, border);
      break;
    case 16:
      gridBox16 = document.getElementById("box16");
      applyStyle(gridBox16, styleRule, border);
      break;
  }
}

// Return the math rule text i.e. "8x"
function getKenKenMathRuleText(value) {
  return value.slice(0, value.indexOf("="));
}

// Return the column number where the math rule text is located
function getKenKenColumnTextNumber(value) {
  let temp1 = value.slice(value.indexOf("=") + 1);
  let array = temp1.split(",");
  let colNum = array[0].slice(0,array[0].indexOf(":"));
  console.log(`getKenKenColumnTextNumber\ncolNum=${colNum}`);
  return colNum;
}

// Get the style rule for the KenKen grid box
function getKenKenStyleRule(array, index) {
  let temp1 = `${array[index]}`;
  let styleRule = temp1.slice(temp1.indexOf(":") + 1);
  return styleRule;
}

// Apply the style rule to the html object
function applyStyle(element, styleRule, border) {
  if(styleRule.slice(0,1) == "T") {
    element.style.borderTop = border;
  }
  if(styleRule.slice(1,2) == "R") {
    element.style.borderRight = border;
  }
  if(styleRule.slice(2,3) == "B") {
    element.style.borderBottom = border;
  }
  if(styleRule.slice(3,4) == "L") {
    element.style.borderLeft = border;
  }
}

function validateForm(input1,input2,input3,input4,input5,input6,input7,input8,input9,input10,input11,input12,input13,input14,input15,input16) {
  console.log(`---Start validateForm()---`);

  let errorColor = "red";
  console.log(`Input-1=${input1}`);
  console.log(`Input-2=${input2}`);
  console.log(`Input-3=${input3}`);
  console.log(`Input-4=${input4}`);
  console.log(`Input-5=${input5}`);
  console.log(`Input-6=${input6}`);
  console.log(`Input-7=${input7}`);
  console.log(`Input-8=${input8}`);
  console.log(`Input-9=${input9}`);
  console.log(`Input-10=${input10}`);
  console.log(`Input-11=${input11}`);
  console.log(`Input-12=${input12}`);
  console.log(`Input-13=${input13}`);
  console.log(`Input-14=${input14}`);
  console.log(`Input-15=${input15}`);
  console.log(`Input-16=${input16}`);
  let regexp=new RegExp("[^0-9]");
  if(regexp.test(input1)) {
    let errorLine = document.getElementById("error-box-1");
    errorLine.style.color=errorColor;
    errorLine.innerText="Not a number";
  }
  if(regexp.test(input2)) {
    let errorLine = document.getElementById("error-box-2");
    errorLine.style.color=errorColor;
    errorLine.innerText="Not a number";
  }
  return false;
}