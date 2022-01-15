let click = document.querySelector(".clicksource");
let list = document.querySelector(".listsource");
let clickurl = document.querySelector(".clickurl");
let copyText = document.querySelector("#npmInstallCopy");
let tooltip = document.querySelector("#myToolcode");
let menuToggle = document.querySelector('.navicon-button');
let body = document.querySelector('body');

function buttonCopy() {
  navigator.clipboard.writeText(copyText.value);

  tooltip.classList.add("copybuttonshow");
  setTimeout(function() {
    tooltip.classList.remove("copybuttonshow");
  }, 1000);
}

click.addEventListener("click", () => {
  list.classList.toggle("newlist");
})

clickurl.addEventListener("click", () => {
  list.classList.toggle("newlist");
  window.history.pushState("new", 'title');
})

menuToggle.addEventListener("click", () => {
  body.classList.toggle('overflow__hidden');
})