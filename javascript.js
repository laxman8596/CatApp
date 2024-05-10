function switchOff() {
  document.getElementById("buldImage").src =
    "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
  document.getElementById("catImage").src =
    "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
  document.getElementById("switchStatus").textContent = "Switched Off";
  document.getElementById("switchOff").style.backgroundColor = "red";
  document.getElementById("switchOn").style.backgroundColor = "gray";
}

function switchON() {
  document.getElementById("buldImage").src =
    "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
  document.getElementById("catImage").src =
    "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
  document.getElementById("switchStatus").textContent = "Switched On";
  document.getElementById("switchOff").style.backgroundColor = "gray";
  document.getElementById("switchOn").style.backgroundColor = "green";
}
