let kenKenRules = [["8X", , "4+"], ["10+", , "4X"], ["1", , , "11+"], ["3+"]];

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
                document.getElementById("box1").innerText = value[colIndex];
              }
              break;
            case 1:
              if (typeof value[colIndex] != "undefined") {
                document.getElementById("box2").innerText = value[colIndex];
              }
              break;
            case 2:
              if (typeof value[colIndex] != "undefined") {
                document.getElementById("box3").innerText = value[colIndex];
              }
              break;
            case 3:
              if (typeof value[colIndex] != "undefined") {
                document.getElementById("box4").innerText = value[colIndex];
              }
              break;
          }
          break;
        case 1:
          switch (colIndex) {
            case 0:
              if (typeof value[colIndex] != "undefined") {
                document.getElementById("box5").innerText = value[colIndex];
              }
              break;
            case 1:
              if (typeof value[colIndex] != "undefined") {
                document.getElementById("box6").innerText = value[colIndex];
              }
              break;
            case 2:
              if (typeof value[colIndex] != "undefined") {
                document.getElementById("box7").innerText = value[colIndex];
              }
              break;
            case 3:
              if (typeof value[colIndex] != "undefined") {
                document.getElementById("box8").innerText = value[colIndex];
              }
              break;
          }
          break;
        case 2:
          switch (colIndex) {
            case 0:
              if (typeof value[colIndex] != "undefined") {
                document.getElementById("box9").innerText = value[colIndex];
              }
              break;
            case 1:
              if (typeof value[colIndex] != "undefined") {
                document.getElementById("box10").innerText = value[colIndex];
              }
              break;
            case 2:
              if (typeof value[colIndex] != "undefined") {
                document.getElementById("box11").innerText = value[colIndex];
              }
              break;
            case 3:
              if (typeof value[colIndex] != "undefined") {
                document.getElementById("box12").innerText = value[colIndex];
              }
              break;
          }
          break;
        case 3:
          switch (colIndex) {
            case 0:
              if (typeof value[colIndex] != "undefined") {
                document.getElementById("box13").innerText = value[colIndex];
              }
              break;
            case 1:
              if (typeof value[colIndex] != "undefined") {
                document.getElementById("box14").innerText = value[colIndex];
              }
              break;
            case 2:
              if (typeof value[colIndex] != "undefined") {
                document.getElementById("box15").innerText = value[colIndex];
              }
              break;
            case 3:
              if (typeof value[colIndex] != "undefined") {
                document.getElementById("box16").innerText = value[colIndex];
              }
              break;
          }
          break;
      }
    }
  }
}
