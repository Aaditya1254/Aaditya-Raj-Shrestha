// Gallery Images

const images = [
  {
    src: "https://picsum.photos/id/1015/800/500",
    alt: "River"
  },
  {
    src: "https://picsum.photos/id/1040/800/500",
    alt: "Clouds"
  },
  {
    src: "https://picsum.photos/id/1/800/500",
    alt: "Playing Games"
  }
];

let currentIndex = 0;

// Elements

const galleryImage = document.getElementById("galleryImage");
const nextBtn = document.getElementById("nextBtn");
const darkModeBtn = document.getElementById("darkModeBtn");

// Next Photo

nextBtn.addEventListener("click", function () {
  currentIndex = (currentIndex + 1) % images.length;

  galleryImage.src = images[currentIndex].src;
  galleryImage.alt = images[currentIndex].alt;
});

// Dark Mode

darkModeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    darkModeBtn.textContent = "☀️ Light Mode";
  } else {
    darkModeBtn.textContent = "🌙 Dark Mode";
  }
});