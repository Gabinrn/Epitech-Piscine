var button = document.getElementsByTagName("div")[2];
  count = 0;
  button.innerHTML = "Number de clicks: " + count;
button.onclick = function() {
  count += 1;
  button.innerHTML = "Number de clicks: " + count;
};
