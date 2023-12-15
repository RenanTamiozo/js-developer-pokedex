function navigation() {
  firstGeneration.parentElement.removeChild(firstGeneration)
  secondGeneration.parentElement.removeChild(secondGeneration)
  thirdGeneration.parentElement.removeChild(thirdGeneration)
  paginationText.parentElement.removeChild(paginationText)
  document.getElementById('loadMoreButton').style.display = 'inline-block'
  document.getElementById('backToMenuBtn').style.display = 'inline-block'
}

backToMenuBtn.addEventListener('click', () => {
  location.reload()
})

window.onscroll = function() {
  showBackToTopButton();
};

function showBackToTopButton() {
  var btn = document.getElementById("backToTopBtn");

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
}

function scrollToTop() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0;
}

backToTopBtn.addEventListener('click', () => {
  scrollToTop()
})