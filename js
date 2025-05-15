// Optional enhancements can go here.
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thanks! Your message has been sent.");
  this.reset();
});
