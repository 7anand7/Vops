const metrics = document.querySelectorAll('.metric');

metrics.forEach(metric => {
  // Generate a random value between 0 and 100 for the metric
  const value = Math.floor(Math.random() * 101);
  // Select the progress bar and progress element for the metric
  const progressBar = metric.querySelector('.progress-bar');
  const progress = metric.querySelector('.progress');
  // Set the width of the progress element to the value of the metric
  progress.style.width = `${value}%`;
  // Animate the progress bar by pulsating the width from 0 to the value of the metric and back to 0 over 1 second
  let currentWidth = 0;
  const interval = setInterval(function() {
    if (currentWidth >= value) {
      currentWidth = 10;
    } else {
      currentWidth++;
      progress.style.width = `${currentWidth}%`;
    }
  }, 10);
});
const slider = document.querySelector('.image-slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
let currentIndex = 0;

prevButton.addEventListener('click', () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slider.children.length - 1;
  }
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
});

nextButton.addEventListener('click', () => {
  currentIndex++;
  if (currentIndex >= slider.children.length) {
    currentIndex = 0;
  }
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
});
