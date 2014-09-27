function padToFour(number) {
  if (number<=9999) { number = ("000"+number).slice(-4); }
  return number;
}

var i = 0;
var interval = 50;

var loadImageInterval = setInterval(function() {
  var img = new Image();
  img.src = "face_"+ padToFour(i) +".jpg";
  document.body.appendChild(img);
  console.log(img.src);
  i++;
}, interval);

console.log(loadImageInterval);

setInterval(function() {
  if (i > 1000) {
    clearInterval(loadImageInterval);
  }
}, interval);

