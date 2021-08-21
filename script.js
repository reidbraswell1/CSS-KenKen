let kenKenRules = [
  ["8×=1,2", , "4+=3,4"],
  ["10+=5,6,10", , "4×=7,8,11"],
  ["1=9", , , "11+=12,15,16"],
  ["3+=14,13"],
];
let boxNumber=0;
//kenKenRules.forEach(myFunction)
for (let rowIndex = 0; rowIndex < kenKenRules.length; rowIndex++) {
  for (let colIndex = 0; colIndex < kenKenRules[rowIndex].length; colIndex++) {
    ++boxNumber;
    let value = `${kenKenRules[rowIndex][colIndex]}`;
    let colValue = "undefined";
    let colStyle = "undefined";
    if (value != "undefined") {
      colValue = value.slice(0, value.indexOf("="));
      colStyle = value.slice(value.indexOf("=") + 1);
      colStyleArray = colStyle.split(",");
      console.log(`colValue=${colValue} \n colStyle=${colStyle} \n boxNumber=${boxNumber}`);
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

function deriveBoxGridNumber(rowIndex, colIndex) {

}
