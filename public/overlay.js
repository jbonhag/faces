new Audio("beyonce.wav").play();

var request = new XMLHttpRequest();
request.onreadystatechange = runFaces;
request.open('GET', '/faces');
request.send();

var image = new Image();
document.body.appendChild(image);

var i = 0;
var updateInterval;

function runFaces() {
  if (request.readyState === 4 && request.status === 200) {
    var faces = JSON.parse(request.responseText);
    updateInterval = setInterval(function() {
      image.src = faces[i];

      if (i > faces.length - 1) {
        clearInterval(updateInterval);
      }

      i++;
    }, 100);
  }
}

