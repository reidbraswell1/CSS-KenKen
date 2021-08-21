let kenKenRules = [["8×", , "4+"], ["10+", , "4×"], ["1", , , "11+"], ["3+"]];

kenKenRules.forEach(myFunction);

function myFunction(value, rowIndex, array) {
  for (let colIndex = 0; colIndex < value.length; colIndex++) {
    console.log(`Row [${rowIndex}] Column [${colIndex}] = ${value[colIndex]}`);
    if (typeof value[colIndex] != "undefined") {
      switch (rowIndex) {
        case 0:
          switch (colIndex) {
            case 0:
              if (typeof value[colIndex] != "undefined") {
                let box1 = document.getElementById("box1");
                box1.style.borderLeft="5px solid black";
                box1.style.borderTop="5px solid black";
                box1.style.borderBottom="5px solid black";
                let prompt1 = document.getElementById("prompt-1");
                prompt1.innerText = value[colIndex];
              }
              break;
            case 1:
              if (typeof value[colIndex] != "undefined") {
                document.getElementById("prompt-2").innerText = value[colIndex];
              }
              break;
            case 2:
              if (typeof value[colIndex] != "undefined") {
                document.getElementById("prompt-3").innerText = value[colIndex];
              }
              break;
            case 3:
              if (typeof value[colIndex] != "undefined") {
                document.getElementById("prompt-4").innerText = value[colIndex];
              }
              break;
          }
          break;
        case 1:
          switch (colIndex) {
            case 0:
              if (typeof value[colIndex] != "undefined") {
                document.getElementById("prompt-5").innerText = value[colIndex];
              }
              break;
            case 1:
              if (typeof value[colIndex] != "undefined") {
                document.getElementById("prompt-6").innerText = value[colIndex];
              }
              break;
            case 2:
              if (typeof value[colIndex] != "undefined") {
                document.getElementById("prompt-7").innerText = value[colIndex];
              }
              break;
            case 3:
              if (typeof value[colIndex] != "undefined") {
                document.getElementById("prompt-8").innerText = value[colIndex];
              }
              break;
          }
          break;
        case 2:
          switch (colIndex) {
            case 0:
              if (typeof value[colIndex] != "undefined") {
                document.getElementById("prompt-9").innerText = value[colIndex];
              }
              break;
            case 1:
              if (typeof value[colIndex] != "undefined") {
                document.getElementById("prompt-10").innerText = value[colIndex];
              }
              break;
            case 2:
              if (typeof value[colIndex] != "undefined") {
                document.getElementById("prompt-11").innerText = value[colIndex];
              }
              break;
            case 3:
              if (typeof value[colIndex] != "undefined") {
                document.getElementById("prompt-12").innerText = value[colIndex];
              }
              break;
          }
          break;
        case 3:
          switch (colIndex) {
            case 0:
              if (typeof value[colIndex] != "undefined") {
                document.getElementById("prompt-13").innerText = value[colIndex];
              }
              break;
            case 1:
              if (typeof value[colIndex] != "undefined") {
                document.getElementById("prompt-14").innerText = value[colIndex];
              }
              break;
            case 2:
              if (typeof value[colIndex] != "undefined") {
                document.getElementById("prompt-15").innerText = value[colIndex];
              }
              break;
            case 3:
              if (typeof value[colIndex] != "undefined") {
                document.getElementById("prompt-16").innerText = value[colIndex];
              }
              break;
          }
          break;
      }
    }
  }
}
