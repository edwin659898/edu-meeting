
  document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".js-feature-slider");

    // Optional buttons
    const prevBtn = document.createElement("button");
    prevBtn.innerText = "<";
    prevBtn.className = "slider-button prev";
    const nextBtn = document.createElement("button");
    nextBtn.innerText = ">";
    nextBtn.className = "slider-button next";

    // Add buttons before and after the slider
    const parent = slider.parentElement;
    parent.appendChild(prevBtn);
    parent.appendChild(nextBtn);

    // Scroll amount
    const scrollAmount = 320;

    nextBtn.addEventListener("click", () => {
      slider.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });

    prevBtn.addEventListener("click", () => {
      slider.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });
  });

