let currentIndex = 0;
const images = document.querySelectorAll(".gallery-container img");

function showImage(index) {
  if (index < 0) {
    currentIndex = images.length - 1;
  } else if (index >= images.length) {
    currentIndex = 0;
  }

  images.forEach((image, i) => {
    if (i === currentIndex) {
      image.style.display = "block";
    } else {
      image.style.display = "none";
    }
  });
}

function nextImage() {
  currentIndex++;
  showImage(currentIndex);
}

function prevImage() {
  currentIndex--;
  showImage(currentIndex);
}

showImage(currentIndex);

const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");

nextButton.addEventListener("click", nextImage);
prevButton.addEventListener("click", prevImage);
