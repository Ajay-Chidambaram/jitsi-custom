const BackgroundColorPlugin = {
  init(options) {
    // Create a button that will be used to change the background color
    const backgroundColorButton = document.createElement("button");
    backgroundColorButton.innerText = "Change Background Color";

    // Add an event listener to the button to handle the color change
    backgroundColorButton.addEventListener("click", () => {
      // Get the current background color of the UI
      const currentBackgroundColor = document.body.style.backgroundColor;

      // Define an array of possible background colors
      const backgroundColors = ["red", "green", "blue", "orange"];

      // Get the index of the current background color in the array
      const currentBackgroundColorIndex = backgroundColors.indexOf(currentBackgroundColor);

      // Get the next background color in the array
      let newBackgroundColor;
      if (currentBackgroundColorIndex === -1 || currentBackgroundColorIndex === backgroundColors.length - 1) {
        newBackgroundColor = backgroundColors[0];
      } else {
        newBackgroundColor = backgroundColors[currentBackgroundColorIndex + 1];
      }

      // Set the new background color of the UI
      document.body.style.backgroundColor = newBackgroundColor;
    });

    // Add the button to the Jitsi Meet UI
    document.querySelector(".toolbar").appendChild(backgroundColorButton);
  }
};
