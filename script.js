const images = [
  {
    src: "images/waterfall.jpeg",
    alt: "Waterfall"
  },
  {
    src: "images/clouds.jpeg",
    alt: "Clouds"
  },
  {
    src: "images/cherryblossom.jpeg",
    alt: "Cherry Blossom"
  }
];

let currentIndex = 0;

const galleryImage = document.getElementById("galleryImage");
const nextBtn = document.getElementById("nextBtn");
const darkModeBtn = document.getElementById("darkModeBtn");

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;

  galleryImage.src = images[currentIndex].src;
  galleryImage.alt = images[currentIndex].alt;
});

darkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    darkModeBtn.textContent = "☀️ Light Mode";
  } else {
    darkModeBtn.textContent = "🌙 Dark Mode";
  }
});