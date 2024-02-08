function move(final, elem) {
  var elem = document.getElementById(elem);
  var width = 1;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= final) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + '%';
    }
  }
}