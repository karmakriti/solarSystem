
document.addEventListener('click', function(event) {
  const contentDiv = document.querySelector('.content');
  const isClickInside = contentDiv.contains(event.target);

  if (!isClickInside) {
    contentDiv.style.display = 'none';
    console.log("click outside")
  }
});
