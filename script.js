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
      applyGridCageText(colStyleArray[0]*1,colValue);
      for(let gridCageStyleIndex = 0; gridCageStyleIndex < colStyleArray.length; gridCageStyleIndex++) {
        let boxNumber = colStyleArray[gridCageStyleIndex];
        applyGridCageStyling(boxNumber*1, gridCageStyleIndex, colStyleArray);          
      }
    }
    /*
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
    */
  }
}


function applyGridCageText(boxNumber,textValue) {

  switch (boxNumber) {
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

function applyGridCageStyling(boxNumber,index, array) {

  let topCornerRightGridBox = 4;
  let bottomCornerRightGridBox = 16;

  let border = "5px solid black";

  switch (boxNumber) {
    case 1:
      gridBox1 = document.getElementById("box1");
      gridBox1.style.borderTop = "5px solid black";
      gridBox1.style.borderLeft = "5px solid black";
      if(boxNumber > topCornerRightGridBox) {

      }
      else {
        gridBox1.style.borderBottom = border;
      }
      break;
    case 2:
      gridBox2 = document.getElementById("box2");
      gridBox2.style.borderTop = "5px solid black";
      if(array.length > index) {
        // Dont highlight the right corner
      }
      else {
        gridBox2.style.borderRight = "5px solid black";
        gridBox2.style.borderBottom = "5px solid black";
      }
      gridBox2.style.borderBottom = "5px solid black";
      break;
    case 3:
      gridBox3 = document.getElementById("box3");
      gridBox3.style.borderTop = border;
      gridBox3.style.borderLeft = border;
      if(array[index+1] > topCornerRightGridBox) {
        // Don't highlight the right corner
      }
      else {
        gridBox3.style.borderBottom = border;
      }
      break;
    case 4:
      gridBox4 = document.getElementById("box4");
      gridBox4.style.borderTop = border;
      gridBox4.style.borderRight = border;
      if(array.length > index) {
        // Dont highlight the bottom yet
      }
      else {
        gridBox4.style.borderBottom = border;
      }
      break;
    case 5:
      gridBox5 = document.getElementById("box5");
      gridBox5.style.borderTop = border;
      gridBox5.style.borderLeft = border;
      if(array.length > index) {
        // Dont highlight bottom yet
      }
      else {
        gridBox5.style.borderBottom = border;
      }
      break;
    case 6:
      gridBox6 = document.getElementById("box6");
      break;
    case 7:
      gridBox7 = document.getElementById("box7");
      break;
    case 8:
      gridBox8 = document.getElementById("box8");
      break;
    case 9:
      gridBox9 = document.getElementById("box9");
      break;
    case 10:
      gridBox10 = document.getElementById("box10");
      break;
    case 11:
      gridBox11 = document.getElementById("box11");
      break;
    case 12:
      gridBox12 = document.getElementById("box12");
      break;
    case 13:
      gridBox13 = document.getElementById("box13");
      break;
    case 14:
      gridBox14 = document.getElementById("box14");
      break;
    case 15:
      gridBox15 = document.getElementById("box15");
      break;
    case 16:
      gridBox16 = document.getElementById("box16");
      break;
  }
}
