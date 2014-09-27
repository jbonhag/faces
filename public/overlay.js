var request = new XMLHttpRequest();
request.onreadystatechange = runFaces;
request.open('GET', '/faces');
request.send();

var image = new Image();
document.body.appendChild(image);

var i = 0;

function runFaces() {
  if (request.readyState === 4 && request.status === 200) {
    var faces = JSON.parse(request.responseText);
    setInterval(function() {
      image.src = faces[i];
      i++;
    }, 100);
  }
}

