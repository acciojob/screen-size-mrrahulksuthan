//your JS code here. If required.
window.addEventListener('resize', function() {
  var width = window.innerWidth;
  var height = window.innerHeight;
  var sizeInfo = document.getElementById('sizeInfo');
  var h1 = sizeInfo.querySelector('h1');
  h1.textContent = 'Width: ' + width +'and' + ' Height: ' + height;
});
