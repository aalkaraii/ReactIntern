let coordinates = [];
var mode = "triangle";

document
  .getElementById("fileInput")
  .addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const content = e.target.result;
        const rows = content.split("\n").map((row) => row.trim());
        console.log(rows);
        coordinates = rows.map((row) => {
          const parts = row.split(/\s+/);
          const coordinatesPart = parts[parts.length - 1];
          return coordinatesPart
            .split("|")
            .map((pair) => pair.split("-").map(Number))
            .flat();
        });

        document.getElementById("output").innerText = rows;
      };
      reader.readAsText(file);
    }
  });

function triangle() {
  var canvasElement = document.querySelector("#canvas");
  var context = canvasElement.getContext("2d");
  context.beginPath();
  context.moveTo(coordinates[0][0], coordinates[0][1]);
  context.lineTo(coordinates[0][2], coordinates[0][3]);
  context.lineTo(coordinates[0][4], coordinates[0][5]);
  context.closePath();
  context.lineWidth = 10;
  context.strokeStyle = "black";
  context.stroke();
  context.fillStyle = "white";
  context.fill();
}

function quad() {
  var canvasElement = document.querySelector("#canvas");
  var context = canvasElement.getContext("2d");
  context.beginPath();
  context.moveTo(coordinates[1][0], coordinates[1][1]);
  context.lineTo(coordinates[1][2], coordinates[1][3]);
  context.lineTo(coordinates[1][4], coordinates[1][5]);
  context.lineTo(coordinates[1][6], coordinates[1][7]);
  context.closePath();
  context.lineWidth = 10;
  context.strokeStyle = "red";
  context.stroke();
  context.fillStyle = "#FFCC00";
  context.fill();
}
