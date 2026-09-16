document.addEventListener("DOMContentLoaded", function () {

  const yesButton = document.getElementById("yesButton");

  yesButton.addEventListener("click", function () {

    // Hide the first screen
    document.getElementById("startScreen").classList.add("hidden");

    // Show the heart screen
    document.getElementById("heartScreen").classList.remove("hidden");

    // Create the heart
    createHeart();

  });


  function createHeart() {

    const heart = document.getElementById("heart");

    const words = [
      "I LOVE YOU",
      "♡",
      "always",
      "you",
      "my favourite person"
    ];

    const points = [];

    // Mathematical heart shape
    for (let t = 0; t < Math.PI * 2; t += 0.035) {

      const x = 16 * Math.pow(Math.sin(t), 3);

      const y =
        13 * Math.cos(t)
        - 5 * Math.cos(2 * t)
        - 2 * Math.cos(3 * t)
        - Math.cos(4 * t);

      points.push({ x: x, y: y });

    }


    // Build the heart
    for (let layer = 0; layer < 8; layer++) {

      points.forEach(function (point, index) {

        const word = document.createElement("span");

        word.className = "word";

        word.textContent =
          words[Math.floor(Math.random() * words.length)];

        const scale = 20;

        const x =
          point.x * scale +
          window.innerWidth / 2;

        const y =
          -point.y * scale +
          window.innerHeight / 2 -
          40;

        word.style.left = x + "px";
        word.style.top = y + "px";

        word.style.animationDelay =
          (index * 0.003 + layer * 0.12) + "s";

        heart.appendChild(word);

      });

    }


    // Show the letter after the heart
    setTimeout(function () {

      document
        .getElementById("heartScreen")
        .classList.add("hidden");

      document
        .getElementById("letterScreen")
        .classList.remove("hidden");

    }, 6500);

  }

});
