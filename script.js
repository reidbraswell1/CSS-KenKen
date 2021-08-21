let kenKenRules = [
  ["8×=1,2", , "4+=3,4"],
  ["10+=5,6,10", , "4×=7,8,11"],
  ["1=9", , , "11+=12,15,16"],
  ["3+=14,13"],
];
let boxNumber = 0;
//kenKenRules.forEach(myFunction)
for (let rowIndex = 0; rowIndex < kenKenRules.length; rowIndex++) {
  for (let colIndex = 0; colIndex < kenKenRules[rowIndex].length; colIndex++) {
    ++boxNumber;
    let value = `${kenKenRules[rowIndex][colIndex]}`;
    let colValue = "undefined";
    let colStyle = "undefined";
    let colStyleArray = [];
    if (value != "undefined") {
      colValue = value.slice(0, value.indexOf("="));
      colStyle = value.slice(value.indexOf("=") + 1);
      colStyleArray = colStyle.split(",");
      console.log(
        `colValue=${colValue} \n colStyle=${colStyle} \n boxNumber=${boxNumber}`
      );
      console.log(`Row [${rowIndex}] Column [${colIndex}] = ${colValue}`);
    }
    if (colValue != "undefined") {
      switch (rowIndex) {
        case 0:
          switch (colIndex) {
            case 0:
              if (colValue != "undefined") {
                let box1 = document.getElementById("box1");
                box1.style.borderLeft = "5px solid black";
                box1.style.borderTop = "5px solid black";
                box1.style.borderBottom = "5px solid black";
                let prompt1 = document.getElementById("prompt-1");
                prompt1.innerText = colValue;
              }
              break;
            case 1:
              if (colValue != "undefined") {
                document.getElementById("prompt-2").innerText = colValue;
              }
              break;
            case 2:
              if (colValue != "undefined") {
                document.getElementById("prompt-3").innerText = colValue;
              }
              break;
            case 3:
              if (colValue != "undefined") {
                document.getElementById("prompt-4").innerText = colValue;
              }
              break;
          }
          break;
        case 1:
          switch (colIndex) {
            case 0:
              if (colValue != "undefined") {
                document.getElementById("prompt-5").innerText = colValue;
              }
              break;
            case 1:
              if (colValue != "undefined") {
                document.getElementById("prompt-6").innerText = colValue;
              }
              break;
            case 2:
              if (colValue != "undefined") {
                document.getElementById("prompt-7").innerText = colValue;
              }
              break;
            case 3:
              if (colValue != "undefined") {
                document.getElementById("prompt-8").innerText = colValue;
              }
              break;
          }
          break;
        case 2:
          switch (colIndex) {
            case 0:
              if (colValue != "undefined") {
                document.getElementById("prompt-9").innerText = colValue;
              }
              break;
            case 1:
              if (colValue != "undefined") {
                document.getElementById("prompt-10").innerText = colValue;
              }
              break;
            case 2:
              if (colValue != "undefined") {
                document.getElementById("prompt-11").innerText = colValue;
              }
              break;
            case 3:
              if (colValue != "undefined") {
                document.getElementById("prompt-12").innerText = colValue;
              }
              break;
          }
          break;
        case 3:
          switch (colIndex) {
            case 0:
              if (colValue != "undefined") {
                document.getElementById("prompt-13").innerText = colValue;
              }
              break;
            case 1:
              if (colValue != "undefined") {
                document.getElementById("prompt-14").innerText = colValue;
              }
              break;
            case 2:
              if (colValue != "undefined") {
                document.getElementById("prompt-15").innerText = colValue;
              }
              break;
            case 3:
              if (colValue != "undefined") {
                document.getElementById("prompt-16").innerText = colValue;
              }
              break;
          }
          break;
      }
    }
  }
}

function applyGridCageStyling(boxNumber,textValue) {
  switch (boxNumber) {
    case 1:
      gridBox1 = document.getElementById("box1");
      gridPrompt1 = document.getElementById("prompt-1");
      break;
    case 2:
      gridBox2 = document.getElementById("box2");
      gridPrompt2 = document.getElementById("prompt-2");
      break;
    case 3:
      gridBox3 = document.getElementById("box3");
      gridPrompt3 = document.getElementById("prompt-3");
      break;
    case 4:
      gridBox4 = document.getElementById("box4");
      gridPrompt4 = document.getElementById("prompt-4");
      break;
    case 5:
      gridBox5 = document.getElementById("box5");
      gridPrompt5 = document.getElementById("prompt-5");
      break;
    case 6:
      gridBox6 = document.getElementById("box6");
      gridPrompt6 = document.getElementById("prompt-6");
      break;
    case 7:
      gridBox7 = document.getElementById("box7");
      gridPrompt7 = document.getElementById("prompt-7");
      break;
    case 8:
      gridBox8 = document.getElementById("box8");
      gridPrompt8 = document.getElementById("prompt-8");
      break;
    case 9:
      gridBox9 = document.getElementById("box9");
      gridPrompt9 = document.getElementById("prompt-9");
      break;
    case 10:
      gridBox10 = document.getElementById("box10");
      gridPrompt10 = document.getElementById("prompt-10");
      break;
    case 11:
      gridBox11 = document.getElementById("box11");
      gridPrompt11 = document.getElementById("prompt-11");
      break;
    case 12:
      gridBox12 = document.getElementById("box12");
      gridPrompt12 = document.getElementById("prompt-12");
      break;
    case 13:
      gridBox13 = document.getElementById("box13");
      gridPrompt13 = document.getElementById("prompt-13");
      break;
    case 14:
      gridBox14 = document.getElementById("box14");
      gridPrompt14 = document.getElementById("prompt-14");
      break;
    case 15:
      gridBox15 = document.getElementById("box15");
      gridPrompt15 = document.getElementById("prompt-15");
      break;
    case 16:
      gridBox16 = document.getElementById("box16");
      gridPrompt16 = document.getElementById("prompt-16");
      break;
  }
}
